<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('osamaker', 'osamaker:app/bundle/modules.js', 'vue') ?>
<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.purple-green.min.css" />
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">


<style>
    .card-wide{
        width: 100%;
    }

    .card-narrow {
        width: 30%;
    }

    .card-high{
        height: 100%;
    }

    .content-grid {
        max-width: 930px;
    }

    .card-background.mdl-card__title {
        /*background: url('http://i.imgur.com/XvV9xub.png') center / cover;*/
        /*background: #68EFAD;*/
        background: #691A99;
        height: 100px;
        color: #fff;
        font-weight: 800;

    }

    .card-text-background.mdl-card__supporting-text {
        /*background: url('http://i.imgur.com/XvV9xub.png') center / cover;*/
        /*background: #68EFAD;*/
        background: #7A1EA1;
        color: #fff;
        width: 100%;
    }
    .title-text.mdl-card__title-text {
        font-weight: 800;
        margin-top: 0;
    }
    .mdl-card__actions {
        box-sizing:border-box;
        align-items: center;
    }
    .mdl-card__actions > .mdl-button--icon {
        margin-right: 3px;
        margin-left: 3px;
    }

    .ghost {
        color: #fff;
        background-color: #7A1EA1;
    }
    .chosen {
        color: #000000;
        background-color: #68EFAD;
    }
    .uk-modal-dialog.modal-tweak {
        background: #fff;
    }
</style>

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

            <!-- This is the modal -->
            <div id="{{ module.id }}" class="uk-modal">
                <div class="uk-modal-dialog modal-tweak uk-modal-dialog-large">
                    <a class="uk-modal-close uk-close"></a>
                    <div class="mdl-cell mdl-cell--top mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                        <list-item :module.sync="module" >
                        </list-item>
                        <add-item :module.sync="module" >
                        </add-item>
                    </div>
                </div>
            </div>

            <!-- This is the off-canvas sidebar -->
            <div id="{{ module.title }}" class="uk-offcanvas">
                <div class="uk-offcanvas-bar uk-offcanvas-bar">
                    <list-item :module.sync="module" >
                    </list-item>
                    <add-item :module.sync="module" >
                    </add-item>
                </div>
            </div>

            <div class="mdl-cell--strech">

            </div>
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
<!--
                    <div class="">
                        <list-item :module.sync="module" >
                        </list-item>
                    </div> -->
                    <!-- This is an anchor toggling the modal -->
                    <!-- <a href="#my-id" data-uk-modal>..f.</a> -->


                    <div class="mdl-card__actions">
                        <!-- This is a button toggling the modal -->
                        <mdl-button colored accent raised data-uk-modal="{target:'#{{ module.id }}'}">
                            <i class="material-icons">add</i>
                            Show Items (Modal)
                        </mdl-button>

                        <!-- This is the button toggling the off-canvas sidebar -->
                        <mdl-button colored accent raised data-uk-offcanvas="{target:'#{{ module.title }}'}">
                            <i class="material-icons">add</i>
                            Show Items (Off-Canvas)
                        </mdl-button>

                    </div>

                    <!-- This is the button toggling the off-canvas sidebar -->
                    <button class="uk-button" data-uk-offcanvas="{target:'#my-id'}">...</button>

                    <div class="mdl-card__menu">
                        <mdl-button v-mdl-ripple-effect fab accent @click="remove(module, modules)">
                            <i class="material-icons">delete</i>
                        </mdl-button>

                        <mdl-button v-mdl-ripple-effect fab accent @click="update(module)"><i class="material-icons">save</i></mdl-button>


                    </div>
                </div>
            </div>

        </template>

    </div>

</div>
