<template>
    <div class="video-content">
        <mu-grid-list class="gridlist-demo">
            <mu-grid-tile v-for="item, index in list" :key="index" >
                <img :src="item.cover_img" />
                <span slot="title">{{item.title}}</span>
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

</script>

<style>
.video-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.gridlist-demo {
    width: 1280px;
    height: auto;
}
</style>
