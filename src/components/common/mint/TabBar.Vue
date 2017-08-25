<template>
    <div>
        <mt-header fixed :title="selectTitle"></mt-header>
        <div class="content">
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item :id="selected">
                    {{selected}}
                    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
                        <li v-for="item in 1000">{{ item }}</li>
                    </ul>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="type_1">
                <i slot="icon" class="icon iconfont icon-emoji-3"></i> 电影
            </mt-tab-item>
            <mt-tab-item id="type_2">
                <i slot="icon" class="icon iconfont icon-emoji-2"></i> 电视
            </mt-tab-item>
            <mt-tab-item id="type_3">
                <i slot="icon" class="icon iconfont icon-emoji-1"></i> 综艺
            </mt-tab-item>
            <mt-tab-item id="type_4">
                <i slot="icon" class="icon iconfont icon-emoji-4"></i> 动漫
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    name: "TabBar",
    data() {
        return {
            selected: "type_1",
            title: {
                "type_1": "电影",
                "type_2": "电视",
                "type_3": "综艺",
                "type_4": "动漫",
            }
        }
    },
    computed: {
        selectTitle: function() {
            return this.title[this.selected]
        }
    }
}
</script>
<style scoped>
.content {
    /* padding-top: 44px; */
    overflow: hidden;
    /* height: 100vh; */
}
.page-tabbar-container{
    padding-top: 44px;
}
</style>
