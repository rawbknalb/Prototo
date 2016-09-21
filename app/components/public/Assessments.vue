<template>
    <!--<pre>-->
    <!--{{ $data | json }}-->
    <!--</pre>-->

<<<<<<< HEAD

    <ul>
        <li v-for="assessment in assessments">
            <a v-link="{ path: '/' + assessment.id }">{{ assessment.title }}</a>
=======
    <!--<div class="uk-accordion" data-uk-accordion>-->

    <!--<h3 class="uk-accordion-title">tita</h3>-->
    <!--<div class="uk-accordion-content">lala</div>-->

    <!--<h3 class="uk-accordion-title">huhu</h3>-->
    <!--<div class="uk-accordion-content">asdfasdf</div>-->

    <!--</div>-->

    <ul class="">
        <li @click="getModules(assessment.id)" v-for="assessment in assessments">
            <div class="">{{ assessment.title }}</div>
            <div class="">
                <ul>
                    <li v-for="module in assessment.modules">
                        {{ module.title }}
                    </li>
                </ul>
                <!-- <div v-if="!assessment.modules">
                    loading ...
                </div> -->
            </div>
>>>>>>> bf8d28fea5e7986ff3fcbcff3f1ee6017eeb2701
        </li>
    </ul>

    <div v-if="isDisplayLoading">
        loading ...
    </div>

</template>

<script>

    module.exports = {

        components: {
            'single': require('../item/create/create-single.vue'),
          },

        data: function () {
            return {
                assessments: {}
            };
        },
        methods: {

            stuff: function () {
                console.log('stuff');
            },

            getAssessments: function () {
                this.$http.get('assessments/getassessments')
                        .then(function (data) {
                            this.$set('assessments', data.data);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
            },



            getItems: function () {
                this.$http.get('admin/osamaker/api/item/get')
                        .then(function (data) {
                            this.$set('items', data.data);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
            },

            save: function () {

                var data = {module: this.module};

                this.$http.post('admin/osamaker/api/module/save', data)
                        .then(function () {
                            // use the getModules method for updating
                            // the modules-array
                            // the view gets an update without a refresh
                            this.getModules();
                            UIkit.notify('Saved')
                        })
                        .catch(function () {
                            UIkit.notify('Something went wrong');
                        });

                this.module = {
                    id: '',
                    title: '',
                    roles: ''
                };

            },

            deleteItem: function (item, items, id) {
                items.$remove(item);
                // console.log(items);
                // var index = items.indexOf(item)
                // console.log(index);
                //   if (index !== -1) {
                //     items.splice(index, 1)
                //   }
            },

            remove: function (module, modules) {

                this.$http.post('admin/osamaker/api/module/delete', module)
                        .then(function () {
                            modules.$remove(module);
                            UIkit.notify('Module removed');
                        })
                        .catch(function () {
                            UIkit.notify('Something went wrong');
                        });

            },

            update: function (module) {
                var data = {module: module};
                this.$http.post('admin/osamaker/api/module/edit', data)
                        .then(function () {
                            UIkit.notify('Saved');
                        })
                        .catch(function () {
                            UIkit.notify('Something went wrong');
                        });
            }

        },

        computed: {
            isDisplayLoading: function () {
                return !_.size(this.assessments);
            }
        },

        ready: function () {
            this.getAssessments();
        }
    };

</script>
