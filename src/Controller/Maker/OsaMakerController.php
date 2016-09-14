<?php
namespace Osa\OsaMaker\Controller\Maker;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Module;
use Osa\OsaMaker\Model\Item;

/**
 * @Access(admin=true)
 */
class OsaMakerController
{
    // gets triggert @Route("/assessment")
    public function assessmentAction()
    {
//        $questi = Module::create(['title' => 'questi', 'created_at' => new \DateTime()])->save();

//        $questiongroup1 = Module::find(1);
//        $assessment1 = Assessment::query()->related('questiongroup')->where('id = ?', [1])->first();
//
//        var_dump($assessment1);
//        exit();


        $assessment = Assessment::create([
             'created_at' => date(\DateTime::ATOM),
        ]);


        return [
            '$view' => [
                'title' => 'Assessments Manager',
                'name' => 'osamaker:views\admin\assessment-index.php'
            ],
            '$data' => [
                'assessment' => $assessment,
            ],
        ];
    }

    // gets triggert @Route("/group")
    public function groupAction()
    {
        $module = Module::create([
            'created_at' => date(\DateTime::ATOM),
        ]);

        $item = Item::create([
            'created_at' => date(\DateTime::ATOM),
        ]);

        return [
            '$view' => [
                'title' => 'Module Manager',
                'name' => 'osamaker:views\admin\modules.php'
            ],
            '$data' => [
                'module' => $module,
                'item' => $item
            ],
        ];
    }

}
