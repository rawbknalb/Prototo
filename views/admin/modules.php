<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('osamaker', 'osamaker:app/bundle/modules.js', 'vue') ?>
<?php $view->style('mdl_theme', 'osamaker:app/assets/css/material.blue-red.min.css') ?>
<!-- <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.purple-green.min.css" /> -->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"> -->

<div id="modules" v-cloak>

    <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div class="mdl-tabs__tab-bar">
          <a href="#starks-panel" class="mdl-tabs__tab is-active">Assessments</a>
          <a href="#lannisters-panel" class="mdl-tabs__tab">Modules</a>
          <a href="#targaryens-panel" class="mdl-tabs__tab">Settings</a>
      </div>

      <div class="mdl-tabs__panel is-active" id="starks-panel">
          Assessments
      </div>
      <div class="mdl-tabs__panel" id="lannisters-panel">
          <add-module :module="module" @getModules="getModules"></add-module>
          <list-modules :modules="modules"></list-modules>
      </div>
      <div class="mdl-tabs__panel" id="targaryens-panel">
        <ul>
          <li>Viserys</li>
          <li>Daenerys</li>
        </ul>
      </div>
    </div>

</div>
