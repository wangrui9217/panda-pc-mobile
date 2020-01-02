<template>
  <div>
    <header class="header">
      <img alt="熊猫老师" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/logo.png" class="logo-img" />
      <ul class="nav-menu">
        <li class="item active">首页</li>
        <a href="#componentFooter" class="item">联系我们</a>
      </ul>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  min-width: 10.24rem;
  display: flex;
  align-items: flex-end;
  padding: 0.14rem 0 0.14rem 3.7rem;
}

.header .logo-img {
  width: 0.8rem;
  height: 0.53rem;
  margin-right: 0.45rem;
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-menu .item {
  font-size: 0.18rem;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: #333;
  line-height: 0.27rem;
  margin-right: 0.5rem;
  position: relative;
  padding-bottom: 0.1rem;
}

.nav-menu .item.active:after {
  content: "";
  position: absolute;
  width: 90%;
  left: 5%;
  bottom: 0;
  height: 0.03rem;
  margin-top: 0.1rem;
  border-radius: 0.05rem;
  background-color: #fa540f;
}

.nav-menu .item:hover,
.nav-menu .item.active {
  color: #fa540f;
}
</style>
