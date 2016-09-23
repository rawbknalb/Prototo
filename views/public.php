<?php $view->script('assessments', 'root:app/bundle/public.js', 'vue') ?>
<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('keen-ui', 'osamaker:app/assets/js/keen-ui.min.js') ?>

<?php $view->style('keen-ui_theme', 'osamaker:app/assets/css/keen-ui.min.css') ?>
<?php $view->style('mdl_theme', 'osamaker:app/assets/css/material.blue-red.min.css') ?>

<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div id="public" v-cloak>
    <router-view></router-view>
</div>

