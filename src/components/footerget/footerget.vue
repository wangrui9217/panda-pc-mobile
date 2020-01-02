<template>
  <div class="box">
    <img alt="在线写字辅导" class="logo" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/panda.png" />
    <p class="tips">免费领取价值<span style="color:#FEA800">199</span>元试听课</p>
    <form class="form">
      <input
        class="form-input"
        type="text"
        placeholder="请输入您的手机号"
        maxlength="11"
        v-model="phonenum"
        @change="inputPhonenum"
      />
      <button type="button" class="form-submit" @click="submit">立即领取</button>
      <div class="form-tips" v-if="form_tips">
        <p class="form-tips-text">手机号无效,请重新输入</p>
      </div>
    </form>
    <!--  -->
    <common-getsuccess v-if="getsuccess_show" @closepop="closePop"></common-getsuccess>
  </div>
</template>
<script>
import getsuccess from "../../components/getsuccess/getsuccess.vue";
export default {
  components: {
    "common-getsuccess": getsuccess
  },
  data() {
    return {
      getsuccess_show: false,
      phonenum: "",
      form_tips: false
    };
  },
  methods: {
    submit() {
      if (this.form_tips == false && this.phonenum != "") {
        let data = {
          phonenum: this.phonenum,
          type: "pc"
        };
        this.axios({
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          url: "https://online.xiongmaolaoshi.com/goods/collectphonenums",
          data: this.qs.stringify(data)
        }).then(res => {
          console.log(res);
          if (res.data.errorCode === 0) {
            this.getsuccess_show = true;
          }
        });
      } else {
        this.form_tips = true;
      }
    },
    //验证手机号
    inputPhonenum() {
      let str = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (str.test(this.phonenum)) {
        this.form_tips = false;
      } else {
        this.form_tips = true;
      }
    },
    closePop() {
      this.getsuccess_show = false;
    }
  }
};
</script>
<style scoped>
.box {
  position: fixed;
  z-index: 20;
  width:100%;
  height: 1rem;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 1.62rem;
  height: 1.45rem;
  margin-top: -0.45rem;
}
.tips {
  height: 0.26rem;
  font-size: 0.26rem;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 0.39rem;
}
.form {
  position: relative;
  width: 4rem;
  height: 0.6rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  margin-left: 0.7rem;
  letter-spacing: 0.01rem;
}
.form-input {
  flex: 1;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.form-submit {
  width: 1.5rem;
  min-width: 1.5rem;
  height: 0.6rem;
  background: rgba(253, 94, 1, 1);
  border-radius: 0.28rem;
  font-size: 0.26rem;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.56rem;
  text-align: center;
}
.form-tips {
  position: absolute;
  background: url("https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/footerget-tips.png") no-repeat;
  background-size: 100%;
  top: -1rem;
  width: 2.8rem;
  height: 0.75rem;
}
.form-tips-text {
  text-align: center;
  padding-top: 0.16rem;
  font-size: 0.2rem;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(218, 35, 35, 1);
  line-height: 0.3rem;
}
</style>
