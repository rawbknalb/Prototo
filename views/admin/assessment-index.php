<?php $view->script('osamaker', 'osamaker:app/assessments.js', 'vue') ?>
<?php $view->script('vue-mdl', 'osamaker:app/assets/js/vue-mdl.js') ?>
<?php $view->script('mdl', 'osamaker:app/assets/js/material.js', 'vue') ?>


<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue-red.min.css" />
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<div id="assessments" v-cloak>
    <div class="uk-form uk-form-horizontal">
        <form class="uk-form" @submit.prevent="save">
            <fieldset data-uk-margin>
                <legend>Add a new Assessment</legend>
                <div class="form-group">
                    <label>Name:</label>
                    <input class="uk-input-large uk-width-1-4" placeholder="" v-model="assessment.title">
                </div>
            </fieldset>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">add</i>
            </button>
            <!-- <button class="uk-button uk-button-success">{{ 'Add' | trans}}</button> -->
        </form>
    </div>

    <button id="demo-menu-lower-left"
            class="mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">add</i>
    </button>

    <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
        for="demo-menu-lower-left">

        <li class="mdl-menu__item" v-for="module in modules">
            {{module.title}}
        </li>
    </ul>

    <h2>Your Assessments</h2>

    <div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select" >
            <input class="mdl-textfield__input" type="text" id="sample2" readonly tabIndex="-1" v-model="module.selected">
            <label for="sample2" class="mdl-textfield__label">Cofuntry</label>
            <ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">


                <li class="mdl-menu__item"
                v-for="module in modules"
                v-bind:value="module.title"
                >
                    {{module.title}}
                </li>
            </ul>
        </div>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
     <input class="mdl-textfield__input" type="text" id="sample1" value="Belarus" readonly tabIndex="-1">
     <label for="sample1" class="mdl-textfield__label">Country</label>
     <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
         <li class="mdl-menu__item">Germany</li>
         <li class="mdl-menu__item">Belarus</li>
         <li class="mdl-menu__item">Russia</li>
     </ul>
 </div>

        <div class="mdl-grid">
            <template v-for="assessment in assessments">

                <div class="mdl-cell">
                    <div class="mdl-card mdl-shadow--4dp">
                        <div class="mdl-card__media"><img src="" width="173" height="157" border="0"
                            alt="" style="padding:10px;">
                        </div>
                        <div class="mdl-card__supporting-text">
                            <h3>Assessment {{assessment.title}}</h3>

                        </div>
                        <div class="mdl-card__supporting-text">
                            <ul>
                                modules
                                <li v-for="module in assessment.modules">
                                    {{ module.title }}
                                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored"
                                        @click="removeModule(assessment.id, module.id)"
                                    >
                                        <i class="material-icons">delete</i>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div class="mdl-card__actions mdl-card--border">
                            <a class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored" @click="addModule(assessment.id, assessment.selected)">
                                <i class="material-icons">add</i>
                            </a>

                            <select v-model="assessment.selected">
                                <option v-for="module in modules" v-bind:value="module.id">
                                   {{ module.title }}
                                </option>
                            </select>


                            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored"
                                @click="remove(assessment)"
                            >
                                <i class="material-icons">delete</i>
                            </button>

                        </div>
                    </div>

                </div>

            </template>
        </div>

    </div>




</div>
