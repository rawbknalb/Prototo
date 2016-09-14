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


}
