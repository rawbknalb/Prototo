<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Questiongroup;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Question;

/**
 * @Route("group", name="group")
 * @Access(admin=true)
 */
class QuestiongroupController
{

    public function getAction(){
        $questiongroups = Questiongroup::query()->related('questions')->get();

        foreach($questiongroups as $questiongroup){
            $questiongroup->questions = array_values($questiongroup->questions);
        }


        return array_values($questiongroups);
    }

    // trigger @Route(osamaker/api/group/save)
    /**
     * @Request({"questiongroup": "array"}, csrf=true)
     */
    public function saveAction($data)
    {
        $questiongroup = Questiongroup::create([
            'created_at' => new \DateTime(),
        ]);

        $questiongroup->save($data);
        return ['message' => 'success', 'questiongroup' => $questiongroup];

    }


    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($data){

        if ($questiongroup = Questiongroup::find($data)) {

            $query = App::db()->createQueryBuilder();
            $deletequestion = $query
                ->select('*')
                ->from('@osa_questions')
                ->where('questiongroup_id = ?', [$data])
                ->delete();

            $questiongroup->delete();
        }

        return ['message' => 'success'];
    }

    /**
     * @Request({"questiongroup": "array"}, csrf=true)
     */
    public function editAction($data)
    {

        if ($questiongroup = Questiongroup::query()->where(['id' => $data['id']])->related('questions')->first()) {

            // sets the question_order in the db
            foreach($data['questions'] as $i => $questionData){
                $questionData['question_order'] = $i;

                // saves each question with the posted questionData in the db
                $question = Question::find($questionData['id']);
                $question->save([
                    'text' => $questionData['text'],
                    'question_order' => $questionData['question_order'],
                    'options' => $questionData['options'],
                    'data' => $questionData['data'],
                    'modified_at' => new \DateTime()

                ]);
            }

            // puts each question id which was posted in the $data in an array
            $questionKeysInData = [];
            foreach($data['questions'] as $question){
                $questionKeysInData[] = $question['id'];
                // [1,2,3,4,5]
            }

            // checking for each question in the db, if the id's in the db
            // are in the posted $data. If a questionID ist not in the array
            // $questionsKeysInData, the question gets deleted.
            foreach($questiongroup->questions as $question){
                $questionExistsInData = in_array($question->id, $questionKeysInData);

                if(!$questionExistsInData){
                    $question->delete();
                }
            }

            //questiongroup edit
            $questiongroup->save([
                'title' => $data['title'],
                'data' => $data['data'],
                'modified_at' => new \DateTime(),
                'roles' => $data['roles']
            ]);
        }

        return ['message' => 'success'];

    }


}
