<template>
  <div class="box">
    <h2 class="title">1个月后&nbsp;孩子的变化</h2>
    <ul class="list">
      <li class="list-item">
        <img class="img" alt="熊猫老师教写字" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange1.png"  />
        <p class="text">明显感觉孩子写字更好看</p>
      </li>
      <li class="list-item">
        <img class="img" alt="熊猫老师教写字" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange2.png"  />
        <p class="text">作业可以写得又快又好</p>
      </li>
      <li class="list-item">
        <img class="img" alt="熊猫老师教写字" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange3.png"  />
        <p class="text">每天进步一点点，孩子更加自信</p>
      </li>
      <li class="list-item">
        <img class="img" alt="熊猫老师教写字" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange4.png"  />
        <p class="text">持之以恒，孩子注意力更加集中</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.box {
  background: url("https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange-bg.png") no-repeat;
  background-size: 19.2rem 10.55rem;
  height: 10.55rem;
  padding-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  background: url("https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/childrenchange-title-bg.png") no-repeat;
  background-size: 5.53rem 0.6rem;
  margin: 0 auto;
  width: 5.53rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.4rem;
  font-family: SourceHanSansCN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 0.02rem;
}
.list {
  display: flex;
  flex-wrap: wrap;
  width: 12rem;
  margin-left: -0.2rem;
  margin-top: 0.7rem;
}
.list-item {
  position: relative;
  width: 5.8rem;
  height: 3.12rem;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.list-item .img {
  width: 100%;
}
.list-item .text {
  position: absolute;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  bottom: 0;
  left: 0;
  color: #fff;
  background-color: rgba(51, 51, 51, 0.7);
  padding-left: 0.2rem;
  font-size: 0.24rem;
  letter-spacing: 0.01rem;
}
</style>