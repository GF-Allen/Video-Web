<template>
    <div class="video-content">
        <!-- Least Gallery -->
        <mu-grid-tile v-for="item, index in list" :key="index">
            <img :src="tile.cover_img" />
            <span slot="title">{{tile.title}}</span>
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
        axios.get('/video/home/2/1')
            .then(result => {
                this.list = result.data.result;
            })
            .catch(err => {

            })
    }
}

$(document).ready(function() {
    $('.list-video').least();
});

</script>

<style>
.video-content {
    margin-top: 10px;
}

.list-video li {
    display: inline;
    margin: 10px;
}

.list-video li img {
    width: 200px;
    height: 300px;
}

.gridlist-video {
    width: 95%;
    height: auto;
    overflow-y: auto;
}
</style>
