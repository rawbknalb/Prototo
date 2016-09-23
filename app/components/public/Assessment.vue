<template>
    <!--{{ assessment | json }}-->

    <ul>
        <li v-for="module in assessment">
            <module :module.sync="module"></module>
        </li>
    </ul>

</template>

<script>

    module.exports = {

        components: {
            Module: require('./Module.vue')
        },

        data: function () {
            return {
                assessment: {}
            };
        },
        methods: {

            stuff: function () {
                console.log('stuff');
            },

            getModules: function (assessmentId) {
//                if(_.isNull(this.assessments[assessmentId].modules)){
//                    this.assessments[assessmentId].modules = { };

                this.$http.get('assessments/getmodules/' + assessmentId)
                        .then(function (modules) {
//                                console.log(modules.data);

                            this.$set('assessment', modules.data);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
//                }

            }

        },

        computed: {},

        ready: function () {
//            console.log(this.$route.params);
            this.getModules(this.$route.params.id);
//            this.stuff();
        }
    };

</script>