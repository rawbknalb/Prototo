<?php $view->script('mdl', 'osamaker:app/assets/js/material.js') ?>
<?php $view->script('osamaker', 'osamaker:app/bundle/questiongroups.js', 'vue') ?>
<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.purple-green.min.css" />
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

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

<div id="questiongroups" v-cloak>
    <div class="uk-form uk-form-horizontal">
        <form class="uk-form" @submit.prevent="save">
            <fieldset data-uk-margin>
                <legend>Create a new Question Group</legend>
                <div class="form-group">
                    <label>Name:</label>
                    <input class="uk-input-large uk-width-1-4" placeholder="" v-model="questiongroup.title">
                </div>
            </fieldset>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--primary">
                <i class="material-icons">add</i>
            </button>
        </form>
    </div>


    <h2>Your Questiongroups</h2>
    <div class="mdl-grid" v-cloak>
        <template v-for="questiongroup in questiongroups">

            <!-- This is the modal -->
            <div id="{{ questiongroup.id }}" class="uk-modal">
                <div class="uk-modal-dialog modal-tweak uk-modal-dialog-large">
                    <a class="uk-modal-close uk-close"></a>
                    <div class="mdl-cell mdl-cell--top mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                        <list-question :questiongroup.sync="questiongroup" >
                        </list-question>
                        <add-question :questiongroup.sync="questiongroup" >
                        </add-question>
                    </div>


                </div>
            </div>

            <div class="mdl-cell--strech">

            </div>
            <div class="mdl-cell mdl-cell--top mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                <div class="mdl-card mdl-cell--top mdl-cell--stretch mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-shadow--8dp">

                    <div class="mdl-card__title card-background">
                        <div class="mdl-card__title-text title-text">
                            {{questiongroup.title}} <br>
                        </div>
                    </div>
                    <div class="mdl-card__supporting-text card-text-background">
                        <p>
                            Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus, consectetur.
                        </p>
                    </div>
<!--
                    <div class="">
                        <list-question :questiongroup.sync="questiongroup" >
                        </list-question>
                    </div> -->
                    <!-- This is an anchor toggling the modal -->
                    <!-- <a href="#my-id" data-uk-modal>..f.</a> -->

                    <!-- This is a button toggling the modal -->
                    <div class="mdl-card__actions">
                        <mdl-button colored accent raised data-uk-modal="{target:'#{{ questiongroup.id }}'}">
                            <i class="material-icons">add</i>
                            Show Items
                        </mdl-button>
                    </div>
                    <!-- <pre>
                        Questions Json <br>
                        {{ questiongroup.questions | json }}
                    </pre> -->
                    <div class="mdl-card__menu">
                        <mdl-button v-mdl-ripple-effect fab accent @click="remove(questiongroup, questiongroups)">
                            <i class="material-icons">delete</i>
                        </mdl-button>

                        <mdl-button v-mdl-ripple-effect fab accent @click="update(questiongroup)"><i class="material-icons">save</i></mdl-button>


                    </div>
                </div>
            </div>

        </template>

    </div>

</div>
