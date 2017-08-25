<template>
    <mu-paper class="bottom_nav">
        <mu-bottom-nav :value="bottomval" shift @change="handleChange">
            <mu-bottom-nav-item value="1" to="/home/1" title="电影" icon="shop" />
            <mu-bottom-nav-item value="2" to="/home/2" title="电视" icon="track_changes" />
            <mu-bottom-nav-item value="3" to="/home/3" title="综艺" icon="subscriptions" />
            <mu-bottom-nav-item value="4" to="/home/4" title="动漫" icon="group_work" />
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        handleChange(val) {
            this.$store.commit("BOTTOMVAL_CHANGE", val);
        }
    },
    computed: {
        ...mapGetters([
            'bottomval'
        ])
    }
}
</script>
<style>
.bottom_nav {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
