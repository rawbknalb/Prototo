<template>
    <!--<pre>-->
    <!--{{ $data | json }}-->
    <!--</pre>-->


    <ul>
        <li v-for="assessment in assessments">
            <a v-link="{ path: '/' + assessment.id }">{{ assessment.title }}</a>
        </li>
    </ul>

    <div v-if="isDisplayLoading">
        loading ...
    </div>

</template>

<script>

    module.exports = {

        components: {},

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