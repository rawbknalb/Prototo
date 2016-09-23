<template>
    <span v-for="option in item.data.options">
        <!--<label for="hans_{{ $index }}">{{ option.text }}</label>-->
        <!--<input id="hans__{{ $index }}" name="supertol" type="radio" value="{{ option.value }}"/>-->

        <mdl-radio :checked.sync="checked" class="mdl-js-ripple-effect" :value="option.value">
            {{option.text}}
        </mdl-radio>
    </span>

    <!--<mdl-button class="card_save_button mdl-button&#45;&#45;icon" fab primary>-->
    <!--<i class="material-icons">save</i>-->
    <!--</mdl-button>-->

</template>

<script>

    module.exports = {

        components: {},

        props: ['item', 'checked'],

        data: function () {
            return {
            };
        },
        methods: {

            stuff: function () {
                console.log('stuff');
            }


        },

        computed: {},

        ready: function () {

        }
    };

</script>