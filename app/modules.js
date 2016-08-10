Vue.use(require('vue-mdl').default);
// Vue.use(require('vue-sortable'));
Vue.use(require('VueDragableFor'));
// Vue.use(require('vuikit'));
Vue.use(require('vue-material-components'));


module.exports = {


            el: '#modules',
            components: {
                'list-item': require('./components/list-item.vue'),
                'add-item': require('./components/add-item.vue')

            },
            data: {
                module: window.$data.module,
                // item: window.$data.item,
                modules: [],
                items: '',
                edit: false,
                // data: window.$data,
            },

            created: function() {
                this.resource = this.$resource('osamaker/api/module');
            },

            methods: {

                getModules: function(){
                    this.$http.get('admin/osamaker/api/module/get')
                        .then(function (data){
                            this.$set('modules', data.data);
                    })
                    .catch(function (err){
                        console.log(err);
                    });
                },

                getItems: function(){
                    this.$http.get('admin/osamaker/api/item/get')
                    .then(function (data){
                        this.$set('items', data.data);
                    })
                    .catch(function (err){
                        console.log(err);
                    });
                },


                save: function() {

                    var data = {module: this.module};

                    this.$http.post('admin/osamaker/api/module/save', data)
                        .then(function () {
                            // use the getModules method for updating
                            // the modules-array
                            // the view gets an update without a refresh
                            this.getModules();
                            UIkit.notify('Saved')
                        })
                        .catch(function() {
                            UIkit.notify('Something went wrong');
                        });

                    this.module = {
                        id: '',
                        title: '',
                        roles: '',
                    };

                },

                addItem: function (item, module_id, module) {
                    var data = {item: _.merge(item, {module_id: module_id}) };

                    this.$http.post('admin/osamaker/api/item/save', data)
                        .then(function (response) {

                            module.items.push(response.data.item);

                            this.item = {
                                text: ''
                            };
                            UIkit.notify('Item saved');
                        })
                        .catch(function() {
                            UIkit.notify('Something went wrong');
                        });
                },


                deleteItem: function(item, items) {
                    items.$remove(item);

                },

                remove: function(module, modules) {

                    var data = module;

                    this.$http.post('admin/osamaker/api/module/delete', data)
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
                    .then( function() {
                        UIkit.notify('Saved');
                    })
                    .catch(function() {
                        UIkit.notify('Something went wrong');
                    });
                }

        },

        ready: function() {
            this.getModules();
            this.getItems();
        },

};
Vue.ready(module.exports);
