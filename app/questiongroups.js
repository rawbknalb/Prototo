Vue.use(require('vue-mdl').default);
// Vue.use(require('vue-sortable'));
Vue.use(require('VueDragableFor'));
Vue.use(require('vuikit'));

module.exports = {


            el: '#questiongroups',
            components: {
                'list-question': require('./components/list-question.vue'),
                'add-question': require('./components/add-question.vue')

            },
            data: {
                questiongroup: window.$data.questiongroup,
                // question: window.$data.question,
                questiongroups: [],
                questions: '',
                edit: false,
                // data: window.$data,
            },

            created: function() {
                this.resource = this.$resource('osamaker/api/group');
            },

            methods: {

                getQuestiongroups: function(){
                    this.$http.get('admin/osamaker/api/group/get')
                        .then(function (data){
                            this.$set('questiongroups', data.data);
                    })
                    .catch(function (err){
                        console.log(err);
                    });
                },

                getQuestions: function(){
                    this.$http.get('admin/osamaker/api/question/get')
                    .then(function (data){
                        this.$set('questions', data.data);
                    })
                    .catch(function (err){
                        console.log(err);
                    });
                },


                save: function() {

                    var data = {questiongroup: this.questiongroup};

                    this.$http.post('admin/osamaker/api/group/save', data)
                        .then(function () {
                            // use the getQuestiongroups method for updating
                            // the questiongroups-array
                            // the view gets an update without a refresh
                            this.getQuestiongroups();
                            UIkit.notify('Saved')
                        })
                        .catch(function() {
                            UIkit.notify('Something went wrong');
                        });

                    this.questiongroup = {
                        id: '',
                        title: '',
                        roles: '',
                    };

                },

                addQuestion: function (question, questiongroup_id, questions) {
                    var data = {question: _.merge(question, {questiongroup_id: questiongroup_id}) };

                    this.$http.post('admin/osamaker/api/question/save', data)
                        .then(function (response) {
                            // console.log(response.question);
                            // this.$set('questions', response.question);
                            // console.log(questions);
                            this.getQuestiongroups();
                            this.question = {
                                text: ''
                            };
                            UIkit.notify('Question saved');
                        })
                        .catch(function() {
                            UIkit.notify('Something went wrong');
                        });
                },


                deleteQuestion: function(question, questions) {
                    questions.$remove(question);
                    console.log(questions);

                },

                remove: function(questiongroup, questiongroups) {

                    var data = questiongroup;

                    this.$http.post('admin/osamaker/api/group/delete', data)
                        .then(function () {
                            questiongroups.$remove(questiongroup);
                            UIkit.notify('Questiongroup removed');
                        })
                        .catch(function () {
                            UIkit.notify('Something went wrong');
                        });

                },

                update: function (questiongroup) {
                    var data = {questiongroup: questiongroup};
                    this.$http.post('admin/osamaker/api/group/edit', data)
                    .then( function() {
                        UIkit.notify('Saved');
                    })
                    .catch(function() {
                        UIkit.notify('Something went wrong');
                    });
                }

        },

        ready: function() {
            this.getQuestiongroups();
            this.getQuestions();
        },

};
Vue.ready(module.exports);
