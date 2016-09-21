<?php $view->script('assessments', 'root:app/bundle/public.js', 'vue') ?>
<?php $view->script('materialize-js', 'osamaker:app/assets/js/materialize.js') ?>

<?php $view->style('materialize-css', 'osamaker:app/assets/css/materialize.css') ?>

<div id="public" v-cloak>
<!--    <assessments></assessments>-->
    <router-view></router-view>
</div>

