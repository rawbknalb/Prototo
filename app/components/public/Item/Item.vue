<template>
    <div style="border: 1px solid #ddd">
        <h2>{{ item.text }}</h2>

        <single v-if="item.data.type == 'single'" :item="item" :checked.sync="results[item.id]"></single>
        <multiple v-if="item.data.type == 'multiple'" :item="item"></multiple>
        <slider v-if="item.data.type == 'slider'" :item="item"></slider>
        <scale v-if="item.data.type == 'scale'" :item="item"></scale>

    </div>

    <ui-button color="primary" @click="save">Save</ui-button>

</template>

<script>

    module.exports = {

        components: {
            Single: require('./Single.vue'),
            Multiple: require('./Multiple.vue'),
            Slider: require('./Slider.vue'),
            Scale: require('./Scale.vue')
        },

        props: ['item' /*, 'results'*/],

        data: function () {
            return {
                results: {}
            };
        },
        methods: {

            save: function () {

                var data = {results: this.results, module: this.item.module_id};
                this.$http.post('assessments/save', data)
                        .then(function (response) {
                            console.log(response);
                            this.$dispatch('continue');
                        })
                        .catch(function (err) {
                            console.log(err);
                        });

            },

            stuff: function () {
                console.log('stuff');
            }


        },

        computed: {

        },

        ready: function () {
        }
    };

</script>