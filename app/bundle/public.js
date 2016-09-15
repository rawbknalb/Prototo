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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// Vue.use(require('vue-mdl').default);
	// Vue.use(require('vue-sortable'));
	// Vue.use(require('VueDragableFor'));
	// Vue.use(require('vuikit'));
	// Vue.use(require('vue-material-components'));


	module.exports = {
	    el: '#public',
	    
	    components: {
	        Assessments: __webpack_require__(40)
	    },
	    
	    data: {
	        // assessments: []
	    },

	    created: function() {
	    //     this.resource = this.$resource('osamaker/api/module');
	    },

	    methods: {

	        // getAssessments: function () {
	        //     this.$http.get('assessments/getassessments')
	        //         .then(function (data) {
	        //             this.$set('assessments', data.data);
	        //         })
	        //         .catch(function (err) {
	        //             console.log(err);
	        //         });
	        // },
	        //
	        // getItems: function () {
	        //     this.$http.get('admin/osamaker/api/item/get')
	        //         .then(function (data) {
	        //             this.$set('items', data.data);
	        //         })
	        //         .catch(function (err) {
	        //             console.log(err);
	        //         });
	        // },
	        //
	        //
	        // save: function () {
	        //
	        //     var data = {module: this.module};
	        //
	        //     this.$http.post('admin/osamaker/api/module/save', data)
	        //         .then(function () {
	        //             // use the getModules method for updating
	        //             // the modules-array
	        //             // the view gets an update without a refresh
	        //             this.getModules();
	        //             UIkit.notify('Saved')
	        //         })
	        //         .catch(function () {
	        //             UIkit.notify('Something went wrong');
	        //         });
	        //
	        //     this.module = {
	        //         id: '',
	        //         title: '',
	        //         roles: '',
	        //     };
	        //
	        // },
	        //
	        // deleteItem: function (item, items, id) {
	        //     items.$remove(item);
	        //     // console.log(items);
	        //     // var index = items.indexOf(item)
	        //     // console.log(index);
	        //     //   if (index !== -1) {
	        //     //     items.splice(index, 1)
	        //     //   }
	        // },
	        //
	        // remove: function (module, modules) {
	        //
	        //     var data = module;
	        //
	        //     this.$http.post('admin/osamaker/api/module/delete', data)
	        //         .then(function () {
	        //             modules.$remove(module);
	        //             UIkit.notify('Module removed');
	        //         })
	        //         .catch(function () {
	        //             UIkit.notify('Something went wrong');
	        //         });
	        //
	        // },
	        //
	        // update: function (module) {
	        //     var data = {module: module};
	        //     this.$http.post('admin/osamaker/api/module/edit', data)
	        //         .then(function () {
	        //             UIkit.notify('Saved');
	        //         })
	        //         .catch(function () {
	        //             UIkit.notify('Something went wrong');
	        //         });
	        // }

	    },

	    ready: function () {
	        // this.getAssessments();
	    }

	};
	Vue.ready(module.exports);


/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Assessments.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d4b8811e/Assessments.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 41:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    data: function data() {
	        return {
	            assessments: {}
	        };
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        },

	        getAssessments: function getAssessments() {
	            this.$http.get('assessments/getassessments').then(function (data) {
	                this.$set('assessments', data.data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },

	        getModules: function getModules(assessmentId) {
	            if (_.isNull(this.assessments[assessmentId].modules)) {
	                this.assessments[assessmentId].modules = {};

	                this.$http.get('assessments/getmodules/' + assessmentId).then(function (modules) {
	                    console.log(modules.data);

	                    this.$set('assessments[' + assessmentId + '].modules', modules.data);
	                }).catch(function (err) {
	                    console.log(err);
	                });
	            }
	        },

	        getItems: function getItems() {
	            this.$http.get('admin/osamaker/api/item/get').then(function (data) {
	                this.$set('items', data.data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },

	        save: function save() {

	            var data = { module: this.module };

	            this.$http.post('admin/osamaker/api/module/save', data).then(function () {
	                this.getModules();
	                UIkit.notify('Saved');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });

	            this.module = {
	                id: '',
	                title: '',
	                roles: ''
	            };
	        },

	        deleteItem: function deleteItem(item, items, id) {
	            items.$remove(item);
	        },

	        remove: function remove(module, modules) {

	            this.$http.post('admin/osamaker/api/module/delete', module).then(function () {
	                modules.$remove(module);
	                UIkit.notify('Module removed');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });
	        },

	        update: function update(module) {
	            var data = { module: module };
	            this.$http.post('admin/osamaker/api/module/edit', data).then(function () {
	                UIkit.notify('Saved');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });
	        }

	    },

	    computed: {
	        isDisplayLoading: function isDisplayLoading(object) {
	            return !_.size(object);
	        }
	    },

	    ready: function ready() {
	        this.getAssessments();
	    }
	};

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = "\n<!--<pre>-->\n<!--{{ $data | json }}-->\n<!--</pre>-->\n\n<!--<div class=\"uk-accordion\" data-uk-accordion>-->\n\n<!--<h3 class=\"uk-accordion-title\">tita</h3>-->\n<!--<div class=\"uk-accordion-content\">lala</div>-->\n\n<!--<h3 class=\"uk-accordion-title\">huhu</h3>-->\n<!--<div class=\"uk-accordion-content\">asdfasdf</div>-->\n\n<!--</div>-->\n\n<ul class=\"collapsible\" data-collapsible=\"expandable\">\n    <li @click=\"getModules(assessment.id)\" v-for=\"assessment in assessments\">\n        <div class=\"collapsible-header\">{{ assessment.title }}</div>\n        <div class=\"collapsible-body\">\n            <ul>\n                <li v-for=\"module in assessment.modules\">{{ module.title }}</li>\n            </ul>\n            <div v-if=\"!assessment.modules\">\n                loading ...\n            </div>\n        </div>\n    </li>\n</ul>\n\n<div v-if=\"isDisplayLoading\">\n    loading ...\n</div>\n\n";

/***/ }

/******/ });