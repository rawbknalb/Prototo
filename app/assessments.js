$(function(){

    // var AddQuestiongroup = Vue.extend({
    //     template: '#addquestiongroup-template'
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
            questiongroups: '',
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

            getQuestiongroups: function(){
                this.$http.get('admin/osamaker/api/group/get')
                .then(function (data){
                    this.$set('questiongroups', data.data);
                })
                .catch(function (err){
                    console.log(err);
                });
            },

            save: function() {

                var data = {assessment: this.assessment};

                this.$http.post('admin/osamaker/api/assessment/save', data,
                function(){
                    this.getAssessments();
                    UIkit.notify('Saved');
                }).error(function() {
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

                this.$http.post('admin/osamaker/api/assessment/delete', data,
                function(){
                    this.getAssessments()
                    UIkit.notify('Deleted');
                }).error(function() {
                    UIkit.notify('Oops');
                });

            },

            addQuestiongroup: function (assessment, questiongroup) {
                //var questiongroup = this.assessment.questiongroup;
                var data = {assessment: assessment, questiongroup: questiongroup};

                this.$http.post('admin/osamaker/api/assessment/addquestiongroup', data,
                    function(){
                        UIkit.notify('Werkt');
                        this.getAssessments();
                    }).error(function() {
                        UIkit.notify('Oops');
                    });
            },

            removeQuestiongroup: function (assessment_id, questiongroup_id) {
                //var questiongroup = this.assessment.questiongroup;
                var data = {
                    assessment: assessment_id,
                    questiongroup: questiongroup_id
                }

                this.$http.post('admin/osamaker/api/assessment/removequestiongroup', data,
                    function(){
                        UIkit.notify('Wörkt');
                        this.getAssessments();
                    }).error(function() {
                        UIkit.notify('Oops');
                    });
            }

        },

        ready: function() {
            this.getAssessments();
            this.getQuestiongroups();
        },

    });
});
