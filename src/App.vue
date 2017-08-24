<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Top from './components/common/Header.vue'
import Foot from './components/common/Footer.vue'
export default {
  name: 'app',
  components: {
    Top,
    Foot
  },
  methods: {
    routerChange() {
      this.$store.dispatch('ROUTER_CHANGE', this.$route.path)
      console.log('----');
    }
  },
  created() {
    this.routerChange()
  },
  watch: {
    '$route': function() {
      this.routerChange()
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
