<template>
    <div style="border: 1px solid #ddd">
        <h2>{{ item.text }}</h2>

        <single v-if="item.data.type == 'single'" :item="item" :checked.sync="results[item.id]"></single>
        <multiple v-if="item.data.type == 'multiple'" :item="item"></multiple>
        <slider v-if="item.data.type == 'slider'" :item="item"></slider>
        <scale v-if="item.data.type == 'scale'" :item="item"></scale>

    </div>


</template>

<script>

    module.exports = {

        components: {
            Single: require('./Single.vue'),
            Multiple: require('./Multiple.vue'),
            Slider: require('./Slider.vue'),
            Scale: require('./Scale.vue')
        },

        props: ['item', 'results'],

        data: function () {
            return {

            };
        },
        methods: {

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