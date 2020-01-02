<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  mounted () {
    // if (this._isMobile()) {
    //   this.$router.replace('/m_index')
    // } else {
    //   this.$router.replace('/pc_index')
    // }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
*{
 font-family: "Microsoft YaHei";
}
#app {
  overflow-x: hidden;
}
.box{box-sizing: border-box;}

/*  */
</style>
