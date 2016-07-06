var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var router = new VueRouter({
    history: true
});

router.map({
    '/': {
        component: {
            Test: require('./components/Test.vue'),
        }
    },
    '/haha': {
        component: {
            Test: require('./components/Test.vue'),
        }
    }
});

module.exports = router;
