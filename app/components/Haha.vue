<style scoped>
    .hehe {
        color: green;
    }
</style>

<template>
    <div class="hehe">
        <div class="enen">{{msg}}</div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'ppppppppppp'
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
