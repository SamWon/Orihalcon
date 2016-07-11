<style>
</style>

<template>
    <a v-link="'hehe'">hehe</a>
    <a v-link="'haha'">haha</a>
    <div>{{$route.path}}</div>

    <router-view></router-view>
</template>

<script>
    module.exports = {
    };
</script>
