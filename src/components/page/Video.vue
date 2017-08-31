<template>
    <div>
        <mu-toast style="width:50%;left:25%;bottom:50%;text-align: center;" v-if="toast" :message="toastMsg" @close="hideToast" />
        <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="loadData" />
        <div id="player_content">
            <router-view></router-view>
        </div>
        <div class="tab_lines">
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab v-for="item,index in list" :key="index" :value="item.line_name" :title="item.line_name" />
            </mu-tabs>
            <div class="tab_content" v-for="item,index in list" :key="index" v-if="activeTab === item.line_name">
                <!-- <mu-paper :zDepth="1" class="lines_des" v-for="line,i in item.lines" :key="i">
                        <span>{{line.video_name}}</span>
                    </mu-paper> -->
                <mu-raised-button class="lines_des" @click="getPlayer(item,line._id)" v-for="line,i in item.lines" :key="i" :label="line.video_name" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'video',
    data() {
        return {
            id: '',
            list: [],
            toast: false,
            toastMsg: "",
            refreshing: false,
            scroller: null,
            activeTab: ''
        }
    },
    methods: {
        loadData() {
            this.refreshing = true;
            this.$http.get("/video/lines/" + this.id)//todo this.id 返回结果不一致
                .then(result => {
                    this.list = result.data.result.line_data;
                    if (this.list && this.list.length > 0) {
                        this.activeTab = this.list[0].line_name;
                    }
                    this.refreshing = false;
                })
                .catch(err => {
                    this.showToast("网络错误");
                    this.refreshing = false;
                })
        },
        getPlayer(lines, lineId) {
            this.refreshing = true;
            let url = "/video/player/" + lines._id + "/" + lineId;
            this.$http.get(url)
                .then(result => {
                    let playerUrl = result.data.result;
                    this.refreshing = false;
                    this.$router.replace({path:"/video/"+lines.movie_id+"/player",query:{url:playerUrl}});
                })
                .catch(err => {
                    this.showToast("网络错误");
                    this.refreshing = false;
                })
        },
        handleTabChange(val) {
            this.activeTab = val;
        },
        setPlayerContent() {
            let el = $("#player_content");
            el.height(el.width() * 9 / 16);
        },
        showToast(msg) {
            this.toastMsg = msg;
            this.toast = true;
            if (this.toastTimer) clearTimeout(this.toastTimer);
            this.toastTimer = setTimeout(() => {
                this.toast = false;
            }, 1500)
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
    },
    mounted() {
        this.scroller = this.$el;
        this.id = this.$route.params.id;
        this.loadData();
        //设置播放区域的大小
        this.setPlayerContent();
    }

}
</script>
<style>
#player_content {
    display: flex;
    width: 100%;
    margin-top: 56px;
}

.tab_content {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 56px;
}

.lines_des {
    text-align: center;
    margin: 5px;
    color: gray;
    min-width: 60px;
}
</style>
