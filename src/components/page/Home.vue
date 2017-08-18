<template>
    <div class="gridlist-video-container">
        <mu-grid-list class="gridlist-video" :cols="cols" :padding="10">
            <mu-grid-tile v-for="tile, index in list" :key="index">
                <img :src="tile.image" />
                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by
                    <b>{{tile.author}}</b>
                </span>
                <mu-icon-button icon="star_border" slot="action" />
            </mu-grid-tile>
        </mu-grid-list>
    </div>
</template>

<script>
import axios from "axios"
axios.defaults.baseURL = '/api'
export default {
    data() {
        return {
            cols: 5,
            list: []
        }
    },
    created() {
        let width = document.body.clientWidth;
        if (width < 640) {
            this.cols = 2;
        }
        axios.get('http://106.14.152.232/video/home/2/1')
            .then(result => {
                this.list = result.data.result;
            })
            .catch(err => {

            })
    }

}
</script>

<style>
.gridlist-video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.gridlist-video {
    width: 95%;
    height: auto;
    overflow-y: auto;
}
</style>
