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
        if ($util->tableExists('@osa_modules') === false) {
			$util->createTable('@osa_modules', function ($table) {
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
		if ($util->tableExists('@osa_items') === false) {
			$util->createTable('@osa_items', function ($table) {
				$table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
                $table->addColumn('title', 'string', ['length' => 255, 'notnull' => false]);
				$table->addColumn('text', 'text');
                $table->addColumn('module_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('item_order', 'integer', ['unsigned' => true,'notnull' => false]);
				//$table->addColumn('slug', 'string', ['length' => 255]);
				// $table->addColumn('options', 'json_array', ['notnull' => false]);
				$table->addColumn('data', 'json_array', ['notnull' => false]);
                $table->addColumn('created_at', 'datetime');
                $table->addColumn('modified_at', 'datetime', ['notnull' => false]);
                // $table->addForeignKeyConstraint('@osa_questiongroups', array("questiongroup_id"), array("id"));
                $table->setPrimaryKey(['id']);
				//$table->addIndex(['form_id'], 'FORMMAKER_FIELD_FORMID');
			});
		}
        if ($util->tableExists('@osa_assessments_modules_mapping') === false) {
			$util->createTable('@osa_assessments_modules_mapping', function ($table) {
                $table->addColumn('assessment_id', 'integer', ['unsigned' => true, 'length' => 10]);
				$table->addColumn('module_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('module_order', 'integer', ['unsigned' => true, 'length' => 3]);
                $table->setPrimaryKey(['assessment_id', 'module_id']);
                // $table->addForeignKeyConstraint('@osa_assessments', array("assessment_id"), array("id"));
                // $table->addForeignKeyConstraint('@osa_questiongroups', array("questiongroup_id"), array("id"));
				//$table->addIndex(['form_id'], 'FORMMAKER_FIELD_FORMID');
			});
		}
        // check if user has already answered questiongroups
        if ($util->tableExists('@osa_users_modules_mapping') === false) {
			$util->createTable('@osa_users_modules_mapping', function ($table) {
                $table->addColumn('id', 'integer', ['unsigned' => true, 'length' => 10, 'autoincrement' => true]);
                $table->addColumn('user_id', 'integer', ['unsigned' => true, 'length' => 10]);
				$table->addColumn('module_id', 'integer', ['unsigned' => true, 'length' => 10]);
                $table->addColumn('data', 'json_array', ['notnull' => false]);
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
            '@osa_assessments_modules_mapping',
            '@osa_users_modules_mapping',
            '@osa_items',
            '@osa_assessments',
            '@osa_modules',
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
