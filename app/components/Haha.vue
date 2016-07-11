<style scoped>
    .hehe {
        color: green;
    }
</style>

<template>
    <div class="hehe">
        <div class="enen" v-bind:class="classObject">{{msg}}</div>
        <div>{{date}}</div>
        <test :news="data" v-for="data of news"></test>
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
                },
                date: '',
                news: []
            }
        },

        created: function () {
            var me = this;
            var dateStr = new Date();
            var month = dateStr.getMonth() + 1;
            month = month >= 10 ? month : "0" + month;
            var day = dateStr.getDate();
            day = day >= 10 ? day : "0" + day;

            $.ajax({
                url: 'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/before/' + dateStr.getFullYear() + month + day,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    me.$data.date = data.date;
                    me.$data.news = data.stories;
                }
            });
        },

        methods: {
            navRoute: function (name) {
                this.$route.router.go({
                    name: name
                });
            }
        },

        components: {
            test: require('./Test.vue')
        }
    };
</script>
