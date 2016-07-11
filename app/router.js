var Vue = require('vue');
var VueRouter = require('vue-router');
var Test = require('./components/Test.vue');
var Haha = require('./components/Haha.vue');
Vue.use(VueRouter);

/* var router = new VueRouter({
    history: true
}); */

var router = new VueRouter({
    hashbang: false
});

router.map({
    /*'/': {
        name: 'index',
        component: Haha
    },*/
    '/hehe': {
        // name: 'hehe',
        component: Test
    },
    '/haha': {
        // name: 'haha',
        component: Haha
    }
});

module.exports = router;
