<template>
  <div id="app">
    <titleBar></titleBar>
    <router-view></router-view>
    <div class="footer">
      Video Lines ©2017 Created by Richard Liu
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/common/TitleBar'
export default {
  name: 'app',
  components: {
    titleBar
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
