<?php
namespace Osa\OsaMaker\Controller;

use Pagekit\Application as App;
use Osa\OsaMaker\Model\Assessment;
use Osa\OsaMaker\Model\Questiongroup;
use Osa\OsaMaker\Model\Question;

/**
 * @Access(admin=true)
 */
class OsaMakerController
{
    // gets triggert @Route("/assessment")
    public function assessmentAction()
    {
//        $questi = Questiongroup::create(['title' => 'questi', 'created_at' => new \DateTime()])->save();

//        $questiongroup1 = Questiongroup::find(1);
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
        $questiongroup = Questiongroup::create([
            'created_at' => date(\DateTime::ATOM),
        ]);

        $question = Question::create([
            'created_at' => date(\DateTime::ATOM),
        ]);

        return [
            '$view' => [
                'title' => 'Questiongroup Manager',
                'name' => 'osamaker:views\admin\questiongroup-index.php'
            ],
            '$data' => [
                'questiongroup' => $questiongroup,
                'question' => $question
            ],
        ];
    }

}
