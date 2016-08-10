$(function(){

    // var AddModule = Vue.extend({
    //     template: '#addmodule-template'
    // });
    //
    // Vue.component('edit-switch', {
    //     template: '#edit-template',
    //     data: function () {
    //         return {
    //             switched: true,
    //             isOpen: false,
    //         };
    //     }
    // });


    var vm = new Vue({
        el: '#assessments',
        data: {
            assessment: window.$data.assessment,
            assessments: '',
            modules: '',
            checked: false
            // data: window.$data,
        },

        created: function() {
            this.resource = this.$resource('osamaker/api/assessment');
        },

        methods: {

            // <<< $set description>>>
            // The $set method is provided by Vue and when used to put data
            // onto an array, triggers a view update. Its first argument needs
            // to be a string with the name of the keypath
            // that we want to target.
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array

            getAssessments: function(){
                this.$http.get('admin/osamaker/api/assessment/get')
                .then(function (data){
                    this.$set('assessments', data.data);
                })
                .catch(function (err){
                    console.log(err);
                });
            },

            getModules: function(){
                this.$http.get('admin/osamaker/api/module/get')
                .then(function (data){
                    this.$set('modules', data.data);
                })
                .catch(function (err){
                    console.log(err);
                });
            },

            save: function() {

                var data = {assessment: this.assessment};

                this.$http.post('admin/osamaker/api/assessment/save', data)
                .then(function () {
                    this.getAssessments();
                    UIkit.notify('Saved');
                })
                .catch(function() {
                    UIkit.notify('Oops');
                });

                this.assessment = {
                    id: '',
                    title: '',
                    roles: '',
                };

            },


            remove: function(assessment) {

                var data = assessment;

                this.$http.post('admin/osamaker/api/assessment/delete', data)
                    .then(function () {
                        this.getAssessments()
                        UIkit.notify('Deleted');
                    })
                    .catch(function() {
                        UIkit.notify('Oops');
                });

            },

            addModule: function (assessment, module) {
                //var module = this.assessment.module;
                var data = {assessment: assessment, module: module};

                this.$http.post('admin/osamaker/api/assessment/addmodule', data)
                    .then(function () {
                        UIkit.notify('Werkt');
                        this.getAssessments();
                    })
                    .catch(function() {
                        UIkit.notify('Oops');
                    });
            },

            removeModule: function (assessment_id, module_id) {
                //var module = this.assessment.module;
                var data = {
                    assessment: assessment_id,
                    module: module_id
                }

                this.$http.post('admin/osamaker/api/assessment/removemodule', data)
                    .then(function () {
                        UIkit.notify('Wörkt');
                        this.getAssessments();
                    }).error(function() {
                        UIkit.notify('Oops');
                    });
            }

        },

        ready: function() {
            this.getAssessments();
            this.getModules();
        },

    });
});
