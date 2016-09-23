module.exports = function () {
    Vue.use(require('vue-mdl').default);
    Vue.use(require('keen-ui'));

    var VueRouter = require('vue-router');
    Vue.use(VueRouter);

    var settings = {}; //{history: true};
    var router = new VueRouter(settings);

    router.map({
        '/': {
            component: require('./components/public/Assessments.vue')
        },
        '/:id': {
            component: require('./components/public/Assessment.vue')
        }//,
        // '*': {
        //     component: require('./components/public/Assessments.vue')
        // }
    });

    router.start({}, '#public');

};
Vue.ready(module.exports);
