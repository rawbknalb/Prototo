<?php $view->script('assessments', 'root:app/bundle/public.js', 'vue') ?>

<div id="public" v-cloak>
    <ul>
        <li v-for="assessment in assessments"> {{ assessment.title }}</li>
    </ul>
</div>

