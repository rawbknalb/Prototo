

<template>

    <mdl-switch :checked.sync="edit" class="mdl-js-ripple-effect" @click></mdl-switch>

    <ul class="mdl-list uk-sortable">
        <li class="mdl-list__item" v-dragable-for="question in questiongroup.questions" v-bind:options="options" >

            <span class="mdl-list__item-primary-content">
                <div><i class="handle material-icons mdl-list__item-icon">reorder</i></div>
                <span>
                    Question Name: {{ question.text }} <br>
                    Index: {{$index}}
                </span>
            </span>
            <span class="mdl-list__item-secondary-action">
                <mdl-button class="mdl-button--icon" primary @click="this.$root.deleteQuestion(question, questiongroup.questions)"><i class="material-icons">delete</i></mdl-button>
            </span>
        </li>
    </ul>

</template>

<script>

    module.exports = {
        props: [
            {
                name: 'questiongroup',
                type: Object
            },
        ],
        data: function() {
            return {
                question: {
                    text: '',
                    question_order: ''
                },
                questions: '',
                edit: false,
                options: {
                    handle: '.handle',
                    chosenClass: "chosen",
                    ghostClass: "ghost",
                    edit: false,
                    animation: 150
                },
            };
        },
    };


</script>
