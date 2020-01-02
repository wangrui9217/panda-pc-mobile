<template>
    <div>
      <component :is="isPC() ? 'pcPage': 'mobilePage'"></component>
    </div>
</template>

<script>
import pcPage from '../pages/home/home'
import mobilePage from '../components/home'
export default {
  name: 'pageControl',
  components: {
    pcPage, mobilePage
  },
  methods: {
    isPC () {
      var userAgentInfo = navigator.userAgent.toLowerCase()
      var Agents = ['android', 'iphone', 'symbianOS', 'windows phone', 'ipad', 'ipod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
