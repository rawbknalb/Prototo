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
            :show.sync="show" 
            type="large"
            hide-footer
            header="Module Name">
              <div class="mdl-grid">

                <div class="mdl-components mdl-js-components mdl-cell--top mdl-cell--stretch mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <aside class="mdl-components__nav docs-text-styling mdl-shadow--4dp">
                      <h2>Items</h2>
                    <template v-for="module in modules">
                        <a v-for="item in module.items" href="#{{ category.name }}-section" class="mdl-components__link mdl-component badges">
                          <!-- <div class="mdl-components__link-image">
                              {{item.text}}
                          </div> -->
                          <span class="mdl-components__link-text">{{ item.text }}</span>
                        </a>
                    </template>
                    </aside>
                </div>
                <div class="mdl-cell--top mdl-cell--stretch mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                  <h1>TestTest</h1>
                </div>
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
