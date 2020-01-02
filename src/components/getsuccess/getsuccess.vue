<template>
  <div class="box1">
    <div class="pop-box">
      <div class="close-btn" @click="closePop"></div>
      <h2 class="title">领取成功</h2>
      <p class="content-text">请保持手机畅通,课程老师稍后会与您取得联系,并为孩子安排写字试听课</p>
      <button class="confirm-btn" type="button" @click="closePop">知道啦</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closePop() {
      this.$emit("closepop");
    }
  }
};
</script>
<style scoped>
.box1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.48);
}
.pop-box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -3.9rem;
  margin-top: -1.825rem;
  z-index: 100;
  width: 7.8rem;
  height: 3.65rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.01rem;
  overflow: hidden;
}
.title {
  height: 0.4rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.6rem;
  margin-top: 0.2rem;
}
.content-text {
  font-size: 0.28rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.49rem;
  padding: 0.53rem;
  padding-top: 0;
}
.confirm-btn {
  width: 7.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgba(255, 238, 60, 1);
  text-align: center;
  font-size: 0.28rem;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.confirm-btn:hover{
  background-color: #FFF58C;
}
.close-btn {
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
  width: 0.48rem;
  height: 0.48rem;
  background: url("https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/close.png") no-repeat;
  background-size: 100%;
}
.close-btn:hover {
  background: url("https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/close-hover.png") no-repeat;
  background-size: 100%;
}
</style>