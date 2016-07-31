<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Question;
use Osa\OsaMaker\Model\Questiongroup;

/**
 * @Route("question", name="question")
 * @Access(admin=true)
 */
class QuestionController
{

    public function getAction(){
        $questions = Question::findAll();
        return array_values($questions);
    }

    /**
     * @Request({"question": "array"}, csrf=true)
     */
    public function saveAction($data)
    {
        // todo: mit robi abklären die genaue options und data struktur

        // return $data;

        $questionOrder = Question::where(['questiongroup_id' => $data['questiongroup_id']])->count();

        $question = Question::create([
            'questiongroup_id' => $data['questiongroup_id'],
            'text' => $data['text'],
            'question_order' => $questionOrder,
            'created_at' => new \DateTime()
        ]);

        $question->save();

        return ['message' => 'success', 'question' => $question];
    }

    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($data){

        if ($question = Question::find($data)) {

            $question->delete();
        }

        return ['message' => 'success'];
    }

    // /**
    //  * @Request({"questions": "array"}, csrf=true)
    //  */
    // public function bulkEditAction($data)
    // {
    //     foreach($data as $i => $question){
    //         $question['question_order'] = $i;
    //
    //         $this->editAction($question);
    //     }
    //
    //     return ['message' => 'success'];
    //
    // }
    //
    // /**
    //  * @Request({"question": "array"}, csrf=true)
    //  */
    // public function editAction($data){
    //     $question = Question::find($data['id']);
    //     $question->save([
    //         'text' => $data['text'],
    //         'question_order' => $data['question_order'],
    //         'options' => $data['options'],
    //         'data' => $data['data'],
    //         'modified_at' => new \DateTime()
    //     ]);
    //
    //     return ['message' => 'success', 'question' => $question];
    // }
}
