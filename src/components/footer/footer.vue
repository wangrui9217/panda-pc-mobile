<template>
  <div class="box">
    <div class="info">
      <div class="info-left">
        <p class="tel-title">客服热线</p>
        <p class="tel">182-0186-1034</p>
        <span class="sub-text">周一至周日 09:00-22:00</span>
        <span class="sub-text">上海市杨浦区长阳创谷C4区1楼A016室</span>
      </div>
      <div class="info-right">
        <div class="code">
          <h5 class="code-title">关注公众号</h5>
          <img alt="在线写字辅导"class="code-img" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/footer-code1.png" />
        </div>
        <div class="code">
          <h5 class="code-title">微信小程序</h5>
          <img alt="在线写字辅导"class="code-img" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/footer-code2.png" />
        </div>
      </div>
    </div>
    <p class="icp">
      上海畔哒教育科技有限公司 <a href="http://beian.miit.gov.cn" style="color:rgba(186, 186, 186, 1)">&nbsp;沪ICP备18029528号&nbsp;<img alt="在线写字辅导"class="license-img" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/license.png" /></a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style  scoped>
.box {
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.info {
  height: 4.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.24rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
  background-color: #4b4b4b;
}
.info-left {
  display: flex;
  flex-direction: column;
  margin-right: 3.8rem;
}
.tel-title {
  position: relative;
  padding-bottom: 0.1rem;
}
.tel-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.04rem;
  width: 0.48rem;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 0.02rem;
}
.tel {
  font-size: 0.6rem;
  margin-bottom: 0.35rem;
}
.sub-text {
  font-size: 0.2rem;
  line-height: 0.3rem;
  margin-bottom: 0.15rem;
}
.info-right {
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
}
.code {
  margin-right: 0.2rem;
}
.code-img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.2rem;
}
.icp {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.16rem;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(186, 186, 186, 1);
  background: rgba(102, 102, 102, 1);
  letter-spacing: 0.01rem;
}
.license-img {
  width: 0.24rem;
  height: 0.3rem;
}
</style>
