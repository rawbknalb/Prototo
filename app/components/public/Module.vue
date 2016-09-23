<template>
    <div>{{ module.title }}</div>
    <ul>
        <li v-for="item in module.items">
            <item :item="item" :results.sync="results"></item>
        </li>
    </ul>

    <ui-button color="primary" @click="save">Save</ui-button>

</template>

<script>

    module.exports = {

        components: {
            Item: require('./Item/Item.vue')
        },

        props: ['module'],

        data: function () {
            return {
                results: {}
            };
        },

        methods: {

            save: function () {

                var data = {results: this.results, module: this.module.id};
                this.$http.post('assessments/save', data)
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });

            },

            stuff: function () {
                console.log('stuff');
            }


        },

        computed: {},

        ready: function () {

        }
    };

</script>