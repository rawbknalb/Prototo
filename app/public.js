// Vue.use(require('vue-mdl').default);
// Vue.use(require('vue-sortable'));
// Vue.use(require('VueDragableFor'));
// Vue.use(require('vuikit'));
// Vue.use(require('vue-material-components'));

module.exports = function () {

    var VueRouter = require('vue-router');

    Vue.use(VueRouter);

    var router = new VueRouter();

    router.map({
        '/': {
            component: require('./components/public/Assessments.vue')
        },
        '/:id': {
            component: require('./components/public/Assessment.vue')
        },
        '*': {
            component: require('./components/public/Assessments.vue')
        }
    });

    router.start({}, '#public');

    // return {
    //     el: '#public',
    //
    //     components: {
    //         Assessments: require('./components/public/Assessments.vue')
    //     },
    //
    //     data: {
    //     },
    //
    //     created: function() {
    //     },
    //
    //     methods: {
    //
    //
    //
    //     },
    //
    //     ready: function () {
    //     }
    // }


};
Vue.ready(module.exports);
