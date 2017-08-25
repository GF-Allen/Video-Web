<template>
    <div class="video-content">
        <mu-toast style="width:50%;left:25%;bottom:50%;text-align: center;" v-if="toast" :message="toastMsg" @close="hideToast" />
        <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="getData" />
        <mu-grid-list class="gridlist-demo">
            <mu-grid-tile class="list-item" v-for="tile, index in list" :key="index">
                <img :src="tile.cover_img" />
                <span slot="title">{{tile.title}}</span>
            </mu-grid-tile>
        </mu-grid-list>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @loadMore="loadMore" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            refreshing: false,
            scroller: null,
            list: [],
            page: 2,
            toastMsg: '',
            toast: false,
        }
    },
    methods: {
        getData() {
            this.refreshing = true;
            this.$http.get('/video/home/2/1')
                .then(result => {
                    this.list = result.data.result;
                    this.refreshing = false;
                })
                .catch(err => {
                    this.refreshing = false;
                })

        },
        loadMore() {
            this.showToast('加载更多');
            // this.loading = true;
            // this.$http.get('/video/home/2/' + this.page)
            //     .then(result => {
            //         this.list = result.data.result;
            //         this.loading = false;
            //         this.page++;
            //     })
            //     .catch(err => {
            //         this.loading = false;
            //     })
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
    },
    mounted() {
        this.scroller = this.$el;
        this.getData();
    },
    watch: {
        "list": () => {
            let width = document.body.clientWidth;
            let val = width * 180 / 250 + "px";
            $(".list-item").height(val);
        }
    }
}

</script>

<style>
.video-content {
    margin-top: 56px;
    margin-bottom: 56px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: hidden;
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
</style>
