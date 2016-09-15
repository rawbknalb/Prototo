Vue.use(require('vue-mdl').default);
// Vue.use(require('vue-sortable'));
Vue.use(require('VueDragableFor'));
// Vue.use(require('vuikit'));
// Vue.use(require('vue-material-components'));


module.exports = {


            el: '#modules',
            components: {
                'add-module': require('./components/admin/modules/add-module.vue'),
                'list-modules': require('./components/admin/modules/list-modules.vue')
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
