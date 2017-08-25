<template>
    <mu-appbar class="appbar" :title="title">
        <mu-icon-button href="http://github.com/xiqingliu" slot="left"><i class="icon iconfont icon-icongithub"></i></mu-icon-button>
        <mu-icon-button slot="right"><i class="material-icons">search</i></mu-icon-button>
    </mu-appbar>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
      ...mapGetters([
          'title'
      ])
  }
}
</script>
<style>
.appbar{
    text-align: center;
    position: fixed;
    top: 0;
}
</style>
