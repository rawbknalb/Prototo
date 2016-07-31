<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Questiongroup;

/**
 * @Route("assessment", name="assessment")
 * @Access(admin=true)
 */
class AssessmentController
{

    public function getAction()
    {
        $assessments = Assessment::query()->related('questiongroups')->get();

        return ($assessments);
    }

    // trigger @Route(osamaker/api/assessment/save)
    /**
     * @Request({"assessment": "array"}, csrf=true)
     */
    public function saveAction($data)
    {
        $assessment = Assessment::create([
            'created_at' => new \DateTime(),
        ]);

        $assessment->save($data);
        return ['message' => 'success', 'assessment' => $assessment];

    }


    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function deleteAction($data)
    {

        if ($assessment = Assessment::find($data)) {
            // var_dump($assessment);
            // exit();
            $assessment->delete();

            // delete assessment_questiongroup_mapping
            $query = App::db()->createQueryBuilder();
            $delete = $query
                ->select('*')
                ->from('@osa_assessments_questiongroups_mapping')
                ->where('assessment_id = ?', [$data])
                ->delete();
        }
        return ['message' => 'success'];
    }


    /**
     * @Request({"id": "int"}, csrf=true)
     */
    public function editAction($data)
    {

        if ($assessment = Assessment::find($data)) {

            $assessment->delete();
        }

        return ['message' => 'success'];
    }

    /**
     * @Request({"assessment": "int", "questiongroup": "int"}, csrf=true)
     */
    public function addquestiongroupAction($assessment, $questiongroup)
    {
        $assessment = Assessment::find($assessment);
        $questiongroup = Questiongroup::find($questiongroup);

        $questiongroupOrder = count(
            Assessment::query()
            ->where(['id' => $assessment->id])
            ->related('questiongroups')
            ->first()
            ->questiongroups
        );

        if($assessment && $questiongroup){
            App::db()->insert('@osa_assessments_questiongroups_mapping', [
                'assessment_id' => $assessment->id,
                'questiongroup_id' => $questiongroup->id,
                'questiongroup_order' => $questiongroupOrder
            ]);
        }

        return ['message' => 'success'];
    }

    /**
     * @Request({"assessment": "int", "questiongroup": "int"}, csrf=true)
     */
    public function removequestiongroupAction($assessment_id, $questiongroup_id)
    {

        $assessment = Assessment::find($assessment_id);
        $questiongroup = Questiongroup::find($questiongroup_id);

        if($assessment && $questiongroup){
            // delete assessment_questiongroup_mapping
            $query = App::db()->createQueryBuilder();
            $delete = $query
                ->select('*')
                ->from('@osa_assessments_questiongroups_mapping')
                ->where('assessment_id = ?', [$assessment_id])
                ->where('questiongroup_id = ?', [$questiongroup_id])
                ->delete();
        }
        return ['message' => 'success'];
    }

}
