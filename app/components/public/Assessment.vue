<template>
    <!--{{ assessment | json }}-->

    <!--<ul>-->
    <!--<li v-for="module in assessment">-->
    <!--<module :module.sync="module"></module>-->
    <!--</li>-->
    <!--</ul>-->

    <item v-if="currentItem" :item="currentItem"></item>

    <div v-else>
        loading ...
    </div>

</template>

<script>

    module.exports = {

        components: {
//            Module: require('./Module.vue')
            Item: require('./Item/Item.vue')
        },

        data: function () {
            return {
                assessment: {},
                moduleIndex: 0,
                itemIndex: 0
            };
        },

        methods: {

            stuff: function () {
                console.log('assy stuff');
            },

            getModules: function (assessmentId) {

                this.$http.get('assessments/getmodules/' + assessmentId)
                        .then(function (modules) {
                            this.$set('assessment', modules.data);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });


            }

        },

        events: {
            continue: function() {

                if(this.itemIndex >= this.currentItemsKeys.length - 1){
                    this.moduleIndex++;
                    this.itemIndex = 0;

                    if(this.moduleIndex >= this.modulesKeys.length - 1 && this.itemIndex >= this.currentItemsKeys.length - 1){
                        console.log('ferting');
                    }
                } else {
                    this.itemIndex++;
                }

            }
        },

        computed: {
            currentItem: function () {
                if(_.size(this.assessment)){
                    var currentModule = this.assessment[this.modulesKeys[this.moduleIndex]];

                    return currentModule.items[this.currentItemsKeys[this.itemIndex]];
                }

            },

            modulesKeys: function () {
                return _.keys(this.assessment);
            },

            currentItemsKeys: function() {
                return _.keys(this.assessment[this.modulesKeys[this.moduleIndex]].items);
            }
        },

        ready: function () {
            this.getModules(this.$route.params.id);
        }
    };

</script>