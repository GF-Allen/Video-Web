<template>
    <mt-tabbar fixed v-model="selected" v-if="footerHide">
        <mt-tab-item id="type_1">
            <i slot="icon" class="icon iconfont icon-emoji-3"></i> 电影
            <router-link to="/home/1"></router-link>
        </mt-tab-item>
        <mt-tab-item id="type_2">
            <i slot="icon" class="icon iconfont icon-emoji-2"></i> 电视
            <router-link to="/home/2"></router-link>
        </mt-tab-item>

        <mt-tab-item id="type_3">
            <i slot="icon" class="icon iconfont icon-emoji-1"></i> 综艺
            <router-link to="/home/3"></router-link>
        </mt-tab-item>

        <mt-tab-item id="type_4">
            <i slot="icon" class="icon iconfont icon-emoji-4"></i> 动漫
            <router-link to="/home/4"></router-link>
        </mt-tab-item>

    </mt-tabbar>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    name: "Footer",
    data() {
        return {
            title: {
                "type_1": "电影",
                "type_2": "电视",
                "type_3": "综艺",
                "type_4": "动漫",
            }
        }
    },
    computed: {
        ...mapGetters([
            'footerHide',
            'selected'
        ]),
        ...mapMutations([

        ]),
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

.page-tabbar-container {
    padding-top: 44px;
}
</style>
