<style scoped>
    .hehe {
        color: green;
    }
</style>

<template>
    <router-view></router-view>
</template>

<script>
    module.exports = {
        /*data: function () {
            return {
                msg: 'ppppppppppp'
            }
        }*/
        props: ['msg']
    };
</script>
