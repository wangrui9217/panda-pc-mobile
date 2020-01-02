<template>
  <div class="box">
    <div class="form-inform">
      <img alt="在线写字课" class="form-inform-img" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/inform.png" />
      <swiper
        class="form-inform-swiper swiper-no-swiping"
        :options="swiperOption"
        ref="loginSwiper"
      >
        <swiper-slide class="swiper-slide" v-for="(item,index) in form_inform" :key="index">
          <p class="text">{{item.phonenum}}</p>
          <p class="text">{{item.time}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <form class="form">
      <input
        @change="inputPhonenum"
        v-model="phonenum"
        class="form-input-phonenum"
        type="text"
        placeholder="输入手机号，免费注册领取试听课"
        maxlength="11"
      />
      <p class="input-tips">{{input_tips}}</p>
      <button class="form-btn-submit" type="button" @click="submit">立即免费领取</button>
      <p class="form-sub-text">领取后会有专属写字课程顾问联系您~</p>
      <div class="form-ewm">
        <img alt="在线写字课" class="form-ewm-img" src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/form-ewm.png" />
        <div class="form-ewm-text">
          <p class="form-ewm-title">微信小程序</p>
          <p class="form-ewm-sub">扫一扫立即体验</p>
        </div>
      </div>
    </form>
    <!--  -->
    <common-getsuccess v-if="getsuccess_show" @closepop="closePop"></common-getsuccess>
  </div>
</template>

<script src="./login.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./login.css' scoped></style>
