<template>
    <div class="video-content">
        <mu-toast style="width:50%;left:25%;bottom:50%;text-align: center;" v-if="toast" :message="toastMsg" @close="hideToast" />
        <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="getData" />
        <mu-grid-list class="gridlist-demo">
            <mu-grid-tile class="list-item" v-for="tile, index in list" :key="index">
                <a @click="goVideo(tile)">
                    <img :src="tile.pic" onerror="this.src='/static/img/load.png'" />
                </a>
                <span slot="title">{{tile.title}}</span>
            </mu-grid-tile>
        </mu-grid-list>
        <!-- <mu-float-button icon="keyboard_arrow_up" mini class="float-button" @click="backTop" /> -->
        <mu-back-top/>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
        
    </div>
</template>

<script>
import Foot from '../common/muse/Footer.vue'
import ConStant from '../../utils/constant'
export default {
    data() {
        return {
            type: '1',
            loading: false,
            refreshing: false,
            scroller: null,
            list: [],
            page: 2,
            toastMsg: '',
            toast: false
        }
    },
    components: {
        Foot
    },
    methods: {
        getData(type) {
            if (!type) {
                type = this.type;
            }
            this.type = type;
            this.refreshing = true;
            this.$http.get('/videos?page=' + 1 + '&page_size=' + ConStant.default_page_size + '&type=' + this.type)
                .then(result => {
                    this.list = result.data.result;
                    this.refreshing = false;
                })
                .catch(err => {
                    this.refreshing = false;
                })
        },
        goVideo(tile) {
            this.$router.push('/video/' + tile.video_id);
            this.$store.commit("TITLE_CHANGE", tile.title);
        },
        loadMore() {
            console.log('loadmore');
            this.loading = true;
            this.$http.get('/videos?page=' + this.page + '&page_size=' + ConStant.default_page_size + '&type=' + this.type)
                .then(result => {
                    Array.prototype.push.apply(this.list, result.data.result);
                    this.loading = false;
                    this.page++;
                })
                .catch(err => {
                    this.loading = false;
                })
        },
        showToast(msg) {
            this.toastMsg = msg
            this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
            this.toastTimer = setTimeout(() => {
                this.toast = false
            }, 1500)
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        backTop() {
            const dom = document.getElementsByTagName('body')[0]
            const scrollTop = dom.scrollTop
            for (var i = 60; i >= 0; i--) {
                setTimeout((i => {
                    return () => {
                        dom.scrollTop = scrollTop * i / 60
                    }
                })(i), 1000 * (1 - i / 60))
            }
        }
    },
    mounted() {
        this.scroller = this.$el;
        this.getData();
    },
    updated() {
        let width = document.body.clientWidth;
        let val = width * 200 / 300 + "px";
        $(".list-item").height(val);
    },
    watch: {
        '$route'(to, from) {
            $('body').scrollTop(0);
            let type = to.path.split('/home/')[1];
            this.list = [];
            this.page = 2;
            this.getData(type);
        }
    }
}

</script>

<style>
.video-content {
    width: 100%;
    height: 100%;
    /* margin-top: 56px; */
    margin-bottom: 56px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.page-tabbar-container {
    display: flex;
    flex-wrap: wrap;
}

.page-tabbar-container ul {
    list-style: none;
}

.gridlist-demo img {
    width: 100%;
    height: 100%;
}

.float-button {
    position: fixed;
    height: 40px;
    bottom: 100px;
    right: 50px;
}

</style>
