<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('osamaker', 'osamaker:app/bundle/modules.js', 'vue') ?>
<?php $view->style('mdl_theme', 'osamaker:app/assets/css/material.blue-red.min.css') ?>
<!-- <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.purple-green.min.css" /> -->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"> -->

<div id="modules" v-cloak>

    <div class="uk-form uk-form-horizontal">
        <form class="uk-form" @submit.prevent="save">
            <fieldset data-uk-margin>
                <legend>Create a new Module</legend>
                <div class="form-group">
                    <label>Name:</label>
                    <input class="uk-input-large uk-width-1-4" placeholder="" v-model="module.title">
                </div>
            </fieldset>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--primary">
                <i class="material-icons">add</i>
            </button>
        </form>
    </div>


    <h2>Your Modules</h2>
    <div class="mdl-grid" v-cloak>

        <template v-for="module in modules">

          <!-- This is the add-item modal -->
          <add-item :module.sync="module" >
          </add-item>

            <!-- This is the off-canvas sidebar -->
          <list-item :module.sync="module" >
          </list-item>


            <div class="mdl-cell mdl-cell--top mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">

                <div class="mdl-card mdl-cell--top mdl-cell--stretch mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--8dp">

                    <div class="mdl-card__title card-background">
                        <div class="mdl-card__title-text title-text">
                            {{module.title}} <br>
                        </div>
                    </div>
                    <div class="mdl-card__supporting-text card-text-background">
                        <p>
                            Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus, consectetur.
                        </p>
                    </div>


                    <div class="mdl-card__actions">
                        <div class="mdl-grid">

                            <div class="mdl-cell mdl-cell--top mdl-cell--8-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                                <!-- This is a button toggling the modal -->
                                <mdl-button colored accent raised data-uk-modal="{target:'#{{ module.id }}'}">
                                    <i class="material-icons">add</i>
                                </mdl-button>

                                <!-- This is the button toggling the off-canvas sidebar -->
                                <mdl-button colored accent raised data-uk-offcanvas="{target:'#Module{{ module.id }}'}">
                                    <i class="material-icons">list</i>
                                </mdl-button>
                            </div>


                            <div class="mdl-cell mdl-cell--top mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                                <mdl-button  v-mdl-ripple-effect raised accent @click="remove(module, modules)">
                                    <i class="material-icons">delete</i>
                                </mdl-button>

                                <mdl-button  v-mdl-ripple-effect raised accent @click="update(module)"><i class="material-icons">save</i></mdl-button>
                            </div>

                        </div>

                    </div>

                    <div class="mdl-card__menu">

                    </div>
                </div>
            </div>

        </template>

    </div>

</div>
