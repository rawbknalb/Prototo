<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('keen-ui', 'osamaker:app/assets/js/keen-ui.min.js') ?>
<?php $view->script('osamaker', 'osamaker:app/bundle/modules.js', 'vue') ?>
<?php $view->style('mdl_theme', 'osamaker:app/assets/css/material.blue-red.min.css') ?>
<?php $view->style('keen-ui_theme', 'osamaker:app/assets/css/keen-ui.min.css') ?>
<!-- <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.purple-green.min.css" /> -->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"> -->

<div id="modules" v-cloak>



    <ui-tabs fullwidth background-color="clear">
        <ui-tab header="Assessments">
            Assessments
            <ui-modal
            :show.sync="show" type="large">
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">Title</span>
                    <nav class="mdl-navigation">
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>

                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
            </div>
        </ui-modal>
        <ui-button @click="show = true">Large Modal</ui-button>
        </ui-tab>

        <ui-tab header="Modules">
            <add-module :module="module" @getModules="getModules"></add-module>
            <list-modules :modules="modules"></list-modules>
        </ui-tab>

        <ui-tab header="Settings">
            Settings
        </ui-tab>

    </ui-tabs>

</div>
