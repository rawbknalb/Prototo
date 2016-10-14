<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Module;

class PublicController
{
    public function indexAction()
    {
        return [
            '$view' => [
                'title' => 'Assessments Manager',
                'name' => 'root:views\public.php'
            ]
        ];
    }

    public function getAssessmentsAction()
    {
        return Assessment::findAll();

    }

    /**
     * @Route("getmodules/{assessmentId}", requirements={"id"="\d+"})
     */
    public function getModulesAction($assessmentId)
    {
        $query = App::db()->createQueryBuilder();

//        return $query
//            ->select('m.*')
//            ->from('@osa_assessments_modules_mapping am')
//            ->innerJoin('@osa_modules m', 'am.module_id = m.id')
//            ->where('am.assessment_id = ?', [1])
//            ->orderBy('am.module_order')
//            ->get();

        $modules = $query
            ->select('module_id')
            ->from('@osa_assessments_modules_mapping')
            ->where('assessment_id = ?', [$assessmentId])
            ->orderBy('module_order')
            ->get();

        $moduleIds = array_map(function ($element) {
            return $element['module_id'];
        }, $modules);


        return Module::query()->whereIn('id', $moduleIds)->related('items')->get();

    }

    /**
     * @Request({"results": "array", "module": "integer"}, csrf=true)
     */
    public function saveAction($results, $module)
    {
        $userId = App::user()->id;
        $query = App::db();

        $modulesQuery = App::db()->createQueryBuilder()
            ->select()
            ->from('@osa_users_modules_mapping')
            ->where('user_id = ?', [$userId])
            ->where('module_id = ?', [$module]);

        $hasBeenFinished = false;
        if ($modulesQuery->count() > 0) {
            $row = $modulesQuery->first();
            $data = json_decode($row['data']); //TODO: multiple can exist! design?
            $hasBeenFinished = isset($data['finished']);

            if(!$hasBeenFinished){
                // update current result
                $row->update(['data' => json_encode($results)]); //TODO: how to update query? this throws error
            }
        }


        if (!$hasBeenFinished) {
            // create new result

            $query->insert('@osa_users_modules_mapping', [
                'user_id' => $userId,
                'module_id' => $module,
                'data' => json_encode($results),
                'created_at' => '2016-01-01' // new \DateTime() //TODO: real timestamp
            ]);

        }

        return ['message' => 'success'];

    }

}
