<style scoped>
    .hehe {
        color: green;
    }
</style>

<template>
    <div class="hehe">
        <div class="enen" v-bind:class="classObject">{{msg}}</div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'ppppppppppp',
                classObject: {
                    aaaa: true,
                    bbbb: false
                }
            }
        },
        props: ['msg'],
        methods: {
            navRoute: function (name) {
                this.$route.router.go({
                    name: name
                });
            }
        }
    };
</script>
