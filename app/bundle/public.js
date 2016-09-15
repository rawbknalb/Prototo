/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Vue.use(require('vue-mdl').default);
	// Vue.use(require('vue-sortable'));
	// Vue.use(require('VueDragableFor'));
	// Vue.use(require('vuikit'));
	// Vue.use(require('vue-material-components'));


	module.exports = {
	            el: '#public',

	            data: {
	                assessments: []
	            },

	            // created: function() {
	            //     this.resource = this.$resource('osamaker/api/module');
	            // },

	            methods: {

	                getAssessments: function(){
	                    this.$http.get('assessments/getassessments')
	                        .then(function (data){
	                            this.$set('assessments', data.data);
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
	            this.getAssessments();

	            console.log(this.assessments);
	        }

	};
	Vue.ready(module.exports);


/***/ }
/******/ ]);