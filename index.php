<?php
use Pagekit\Application;
// packages/pagekit/todo/index.php
return [
    'name' => 'osamaker',
    'type' => 'extension',
    // called when Pagekit initializes the module
    'main' => function (Application $app) {
        //echo "It's alive";
    },
    'autoload' => [
        'Osa\\OsaMaker\\' => 'src'
    ],
    'resources' => [
        'osamaker:' => ''
    ],
    'config' => [],

    'routes' => [

        '/osamaker' => [
            'name' => '@osamaker',
            'controller' => [
                'Osa\\OsaMaker\\Controller\\OsaMakerController'
            ]
        ],
        '/osamaker/api' => [
            'name' => '@osamaker/api',
            'controller' => [
                'Osa\\OsaMaker\\Controller\\AssessmentController',
                'Osa\\OsaMaker\\Controller\\QuestiongroupController',
                'Osa\\OsaMaker\\Controller\\QuestionController'
            ]
        ],



    ],
    'menu' => [
        'osamaker' => [
            'label' => 'OSA Maker',
            'url' => '@osamaker/assessment',
            'icon' => 'app/system/assets/images/placeholder-icon.svg'
        ],
        'osamaker: assessments' => [
			'label' => 'Assessments',
			'parent' => 'osamaker',
			'url' => '@osamaker/assessment',
        ],
        'osamaker: groups' => [
            'label' => 'Groups',
            'parent' => 'osamaker',
            'url' => '@osamaker/group',
        ],
    ],

    // /*
    //  * Listen to events.
    //  */
    // 'events' => [
    //     'view.scripts' => function ($event, $scripts) {
    //         $scripts->register('add-question', 'osamaker:app/bundle/add-question.vue');
    //         $scripts->register('osamaker-questiongroups', 'osamaker:app/bundle/questiongroups.js');
    //     }
    // ]
];
