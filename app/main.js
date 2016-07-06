var Vue = require('vue');
var VueRouter = require('vue-router');
var router = require('./router.js');
var App = require('./components/Haha.vue');
Vue.use(VueRouter);

router.start(App, 'haha');

/*
var testVue = new Vue({
    el: '#test',
    components: {
        Test: require('./components/Test.vue'),
        Haha: require('./components/Haha.vue')
    }
});

var puVue = new Vue({
    el: '#pupu',
    components: {
        Haha: require('./components/Haha.vue')
    }
});

$('#estest').click(function () {
    testVue.$refs.uuu.bbb();
});
*/
