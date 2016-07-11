<style>
    .test {
        color: red;
    }
</style>

<template>
    <div class="test">
        <p>{{news.id}}-{{news.title}}</p>
        <div class="enen">{{msg}}</div>
        <input v-model="msg" v-on:click="aaa" type="text">
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'world'
            }
        },

        props: {
            news: {
                type: Object,
                required: true
            }
        },

        ready: function () {
            // console.log(this);
        },

        methods: {
            aaa: function () {
                this.bbb('bbb');
            },

            bbb: function (data) {
                this.$data.msg = 'sasada';
            }
        }
    };
</script>
