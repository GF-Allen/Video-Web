<template>
  <mt-header fixed title="电影" v-if="headerHide">
    <router-link to="/" slot="left">
      <img src="/static/img/logo.png" alt="">
    </router-link>
  </mt-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'head',
  computed: {
    ...mapGetters([
      'headerHide'
    ])
  }
}
</script>

<style lang="less" scoped>
.mint-header {
  background-color: #FFF;
  height: 48px;
  line-height: 48px;
  color: #333;
  box-shadow: 0px 2px 3px #EAEAEA;
  font-size: 16px;
  color: #666;

  .mint-header-button a {
    display: block;
    height: 48px;
  }
  .mint-header-button.is-left a {
    padding-left: 10px;
  }
  img {
    margin-top: 8px;
    height: 32px;
  }
}
</style>
