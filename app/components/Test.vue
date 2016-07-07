<style>
    .test {
        color: red;
    }
</style>

<template>
    <div class="test">
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
