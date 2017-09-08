<template>
    <div>
        <mu-toast style="width:50%;left:25%;bottom:50%;text-align: center;" v-if="toast" :message="toastMsg" @close="hideToast" />
        <div id="player_content">
            <mu-circular-progress class="progress" :size="45" :strokeWidth="5" />
            <router-view class="player"></router-view>
        </div>
        <div class="detail_content">

            <mu-paper class="video_info" id="video_info" :zDepth="1">
                <h4 class="info_title">视频信息
                    <span class="douban">豆瓣：{{data.douban}}</span>
                </h4>
                <div class="info">
                    <div>
                        <span>
                            <strong>主演:</strong>
                        </span>
                        <span>{{data.actor}}</span>
                    </div>
                    <div>
                        <span>
                            <strong>更新状态:</strong>
                        </span>
                        <span style="color:#ff4081">{{data.state}}</span>
                    </div>
                    <div>
                        <strong>剧情简介:</strong>
                        <span>{{data.synopsis}}</span>
                    </div>
                </div>
            </mu-paper>

            <mu-paper id="player_urls" :zDepth="1">
                <mu-flat-button class="player_url" :id="'player_'+index" @click="getPlayer(item.player_url,index)" :label="item.player_title" v-for="item,index in data.player_urls" :key="index" />
            </mu-paper>
        </div>
    </div>
</template>
<script>
export default {
    name: 'video',
    data() {
        return {
            id: '',
            data: [],
            toast: false,
            toastMsg: "",
            refreshing: false,
            scroller: null,
            first: true,
            isCollapse: false,
        }
    },
    methods: {
        loadData() {
            this.refreshing = true;
            this.$http.get("/videos/" + this.id + "/urls")
                .then(result => {
                    this.data = result.data.result;
                    console.log(this.data);
                    this.refreshing = false;
                })
                .catch(err => {
                    this.showToast("网络错误");
                    this.refreshing = false;
                })
        },
        getPlayer(url, index) {
            if (url.indexOf("http") < 0) {
                this.showToast("视频暂缺");
                return;
            }
            this.$router.replace({ path: "/video/" + this.id + "/player", query: { url: url } });
            //清除按钮样式
            $("#player_urls .player_url").each((index, el) => {
                $(el).removeClass("mu-flat-button-primary");
            })
            $("#player_" + index).addClass("mu-flat-button-primary");
        },
        setPlayerContent() {
            let el = $("#player_content");
            let elHeight = el.width() * 9 / 16;
            el.height(elHeight);
            $(".detail_content").css('padding-top', (elHeight + 56 + 5) + 'px');
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
        //初始化 获取数据
        this.scroller = this.$el;
        this.id = this.$route.params.id;
        this.loadData();
        //设置播放区域的大小
        this.setPlayerContent();

        new jQueryCollapse($("#video_info"), {
            open: function() {
                this.slideDown(150);
            },
            close: function() {
                this.slideUp(150);
            },
            accordion: true
        });
    },
    updated() {
        //第一次进入默认选择第一条
        if (this.first && this.data.player_urls) {
            this.getPlayer(this.data.player_urls[0].player_url, 0);//默认播放
            this.first = false;
        }
    }
}

</script>
<style>
.video_info {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
    min-height: 100px;
}

#video_info span+div {
    height: 0px;
    padding: 0px;
    overflow: hidden;
    display: block!important;
    -webkit-transform: translateZ(0);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.info_title a {
    display: inline-block;
    width: 100%;
}

.douban {
    float: right;
    text-align: center;
}

.info div {
    padding-bottom: 5px;
    letter-spacing: 2px;
}

#video_info span.open+div {
    height: auto;
}

span+div {
    display: none;
}

#player_content {
    width: 100%;
    position: fixed;
    top: 56px;
    z-index: 10086;
    background-color: #fff;
    text-align: center;
}

.refresh {
    z-index: 10087
}

.detail_content {
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    margin-bottom: 56px;
    overflow: scroll;
}

.progress {
    position: relative;
    top: 50px;
    z-index: 1;
}

.player {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
}

.player_url {
    text-align: center;
    margin: 5px;
    min-width: 60px;
}

#player_urls {
    width: 100%;
}
</style>
