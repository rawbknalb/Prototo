<?php
namespace Osa\OsaMaker\Controller\Maker;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Module;

/**
 * @Route("assessment", name="assessment")
 * @Access(admin=true)
 */
class AssessmentController
{

    public function getAction()
    {
        $assessments = Assessment::query()->related('modules')->get();

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

            // delete assessments_modules_mapping
            $query = App::db()->createQueryBuilder();
            $delete = $query
                ->select('*')
                ->from('@osa_assessments_modules_mapping')
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
     * @Request({"assessment": "int", "module": "int"}, csrf=true)
     */
    public function addmoduleAction($assessment, $module)
    {
        $assessment = Assessment::find($assessment);
        $module = Module::find($module);

        $moduleOrder = count(
            Assessment::query()
            ->where(['id' => $assessment->id])
            ->related('modules')
            ->first()
            ->modules
        );

        if($assessment && $module){
            App::db()->insert('@osa_assessments_modules_mapping', [
                'assessment_id' => $assessment->id,
                'module_id' => $module->id,
                'module_order' => $moduleOrder
            ]);
        }

        return ['message' => 'success'];
    }

    /**
     * @Request({"assessment": "int", "module": "int"}, csrf=true)
     */
    public function removemoduleAction($assessment_id, $module_id)
    {

        $assessment = Assessment::find($assessment_id);
        $module = Module::find($module_id);

        if($assessment && $module){
            // delete assessments_modules_mapping
            $query = App::db()->createQueryBuilder();
            $delete = $query
                ->select('*')
                ->from('@osa_assessments_modules_mapping')
                ->where('assessment_id = ?', [$assessment_id])
                ->where('module_id = ?', [$module_id])
                ->delete();
        }
        return ['message' => 'success'];
    }

}
