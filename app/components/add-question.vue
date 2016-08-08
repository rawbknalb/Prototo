<template>
        <form @submit.prevent="this.$root.addQuestion(question, questiongroup.id, questiongroup.questions)">
            <mdl-textfield floating-label="New Question" :value.sync="question.text" ></mdl-textfield>

            <mdl-button fab accent><i class="material-icons">add</i></mdl-button>
        </form>
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
            };
        }
    };


</script>
