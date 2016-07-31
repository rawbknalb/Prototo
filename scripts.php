<?php
return [
    'enable' => function ($app) {
		$util = $app['db']->getUtility();
        if ($util->tableExists('@osa_assessments') === false) {
			$util->createTable('@osa_assessments', function ($table) {
				$table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
				$table->addColumn('title', 'string', ['length' => 255]);
                $table->addColumn('roles', 'integer', ['unsigned' => true, 'length' => 2, 'notnull' => false]);
                $table->addColumn('created_at', 'datetime');
                $table->addColumn('modified_at', 'datetime', ['notnull' => false]);
				//$table->addColumn('slug', 'string', ['length' => 255]);
				//$table->addColumn('data', 'json_array', ['notnull' => false]);
				$table->setPrimaryKey(['id']);
			});
		}
        if ($util->tableExists('@osa_questiongroups') === false) {
			$util->createTable('@osa_questiongroups', function ($table) {
				$table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
				$table->addColumn('title', 'string', ['length' => 255]);
                $table->addColumn('roles', 'integer', ['unsigned' => true, 'length' => 2, 'notnull' => false]);
                $table->addColumn('data', 'json_array', ['notnull' => false]);
                $table->addColumn('created_at', 'datetime');
                $table->addColumn('modified_at', 'datetime', ['notnull' => false]);
				//$table->addColumn('slug', 'string', ['length' => 255]);
				//$table->addColumn('data', 'json_array', ['notnull' => false]);
				$table->setPrimaryKey(['id']);
			});
		}
		if ($util->tableExists('@osa_questions') === false) {
			$util->createTable('@osa_questions', function ($table) {
				$table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
                $table->addColumn('title', 'string', ['length' => 255]);
				$table->addColumn('text', 'text');
                $table->addColumn('questiongroup_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('question_order', 'integer', ['unsigned' => true,'notnull' => false]);
				//$table->addColumn('slug', 'string', ['length' => 255]);
				$table->addColumn('options', 'json_array', ['notnull' => false]);
				$table->addColumn('data', 'json_array', ['notnull' => false]);
                $table->addColumn('created_at', 'datetime');
                $table->addColumn('modified_at', 'datetime', ['notnull' => false]);
                // $table->addForeignKeyConstraint('@osa_questiongroups', array("questiongroup_id"), array("id"));
                $table->setPrimaryKey(['id']);
				//$table->addIndex(['form_id'], 'FORMMAKER_FIELD_FORMID');
			});
		}
        if ($util->tableExists('@osa_assessments_questiongroups_mapping') === false) {
			$util->createTable('@osa_assessments_questiongroups_mapping', function ($table) {
                $table->addColumn('assessment_id', 'integer', ['unsigned' => true, 'length' => 10]);
				$table->addColumn('questiongroup_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('questiongroup_order', 'integer', ['unsigned' => true, 'length' => 3]);
                $table->setPrimaryKey(['assessment_id', 'questiongroup_id']);
                // $table->addForeignKeyConstraint('@osa_assessments', array("assessment_id"), array("id"));
                // $table->addForeignKeyConstraint('@osa_questiongroups', array("questiongroup_id"), array("id"));
				//$table->addIndex(['form_id'], 'FORMMAKER_FIELD_FORMID');
			});
		}
        // check if user has already answered questiongroups
        if ($util->tableExists('@osa_users_questiongroups_mapping') === false) {
			$util->createTable('@osa_users_questiongroups_mapping', function ($table) {
                $table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
                $table->addColumn('user_id', 'integer', ['unsigned' => true, 'length' => 10]);
				$table->addColumn('questiongroup_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('created_at', 'datetime');
                $table->setPrimaryKey(['id']);
                // $table->addForeignKeyConstraint('@system_user', array("user_id"), array("id"));
                // $table->addForeignKeyConstraint('@osa_questiongroups', array("questiongroup_id"), array("id"));
				//$table->addIndex(['form_id'], 'FORMMAKER_FIELD_FORMID');
			});
		}
        // exit('stuerb');
    },
    'uninstall' => function ($app) {
        $util = $app['db']->getUtility();
        $tables = [
            '@osa_assessments_questiongroups_mapping',
            '@osa_users_questiongroups_mapping',
            '@osa_questions',
            '@osa_assessments',
            '@osa_questiongroups',
        ];

        foreach ($tables as $table) {
            if ($util->tableExists($table)) {
                $util->dropTable($table);
            }
        }
		// // remove the config
		// $app['config']->remove('bixie/formmaker');
	},
	// 'updates' => [
    //
	// 	'1.1.0' => function ($app) {
	// 		//convert config to new questiongroup name
	// 		$app['config']->set('bixie/formmaker', $app->config('formmaker')->toArray());
	// 		$app['config']->remove('formmaker');
	// 	}
    //
	// ]
];
