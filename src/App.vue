<template>
  <div id="app">
    <top class="top" v-show="headerHide"></top>
    <router-view></router-view>
    <foot class="foot" v-show="footerHide"></foot>
  </div>
</template>

<script>
import Top from './components/common/muse/Header.vue'
import Foot from './components/common/muse/Footer.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  computed:{
    ...mapGetters(['headerHide','footerHide'])
  },
  components: {
    Top,
    Foot
  }
}
</script>

<style>
#app {
  text-align: center;
  overflow-y: auto;
}

::-webkit-scrollbar {
  display: none;
}
</style>
