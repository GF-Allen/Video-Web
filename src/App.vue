<template>
  <div id="app">
    <top></top>
    <!-- <router-view></router-view> -->
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
  }
}
</script>

<style>
#app {
  text-align: center;
}

.footer {
  padding: 20px 0;
  text-align: center;
}
</style>
