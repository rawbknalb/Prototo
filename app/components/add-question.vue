<template>
    <div class="mdl-card__actions mdl-card--border">
        <form>
            <mdl-textfield floating-label="New Question" :value.sync="question.text" ></mdl-textfield>

            <mdl-button type="submit" class="mdl-button--icon uk-modal-close" fab accent @click.prevent="this.$root.addQuestion(question, questiongroup.id, questiongroup.questions)"><i class="material-icons">add</i></mdl-button>
        </form>

    </div>


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
