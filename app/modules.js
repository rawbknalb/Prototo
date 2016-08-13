Vue.use(require('vue-mdl').default);
// Vue.use(require('vue-sortable'));
Vue.use(require('VueDragableFor'));
// Vue.use(require('vuikit'));
// Vue.use(require('vue-material-components'));


module.exports = {


            el: '#modules',
            components: {
                'list-item': require('./components/item/list-item.vue'),
                'add-item': require('./components/item/add-item.vue'),
                'card-module': require('./components/module/card-module.vue')
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

                deleteItem: function(item, items, id) {
                    items.$remove(item);
                    // console.log(items);
                    // var index = items.indexOf(item)
                    // console.log(index);
                    //   if (index !== -1) {
                    //     items.splice(index, 1)
                    //   }
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
