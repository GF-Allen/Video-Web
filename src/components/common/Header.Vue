<template>
  <mt-header fixed title="电影">
    <router-link to="/" slot="left">
      <img src="/static/img/logo.png" alt="">
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'head',
  computed: {

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
  text-align: left;
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
    margin-top: 4px;
    height: 42px;
  }
}
</style>
