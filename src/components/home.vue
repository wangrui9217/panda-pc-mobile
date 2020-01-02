<template>
  <div class="container">
    <div class="top-bg">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/banner.png">
      <!--      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/logo.png" class="logo">-->
      <!--      <p class="text-1">0元领取</p>-->
      <!--      <div class="text-3">-->
      <!--        三天写字指导课-->
      <!--        <p class="text-4">原价199元</p>-->
      <!--      </div>-->
      <!--      <div class="text-5">-->
      <!--        <div>小学语文课本生字视频</div>-->
      <!--        <div>书法名师1对1点评辅导</div>-->
      <!--        <div>每天15分钟 轻松写好字</div>-->
      <!--      </div>-->
    </div>
    <div class="notice">
      <div class="tips">
        <swiper :options="swiperOption" class="swiper-no-swiping">
          <swiper-slide>
            <div class="lunbo">
              <img src="../assets/tongzhi.png" class="tz">
              <span class="text-1">
              截止目前已有<span class="num">160,000 +</span>孩子领取课程
            </span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="receive">
      <input placeholder="输入手机号，立即免费领取" type="number" v-model="mobile" id="get-receive">
      <mt-button type="default" @click="receive">免费领取</mt-button>
      <p>领取后会有专属写字课程顾问联系您</p>
    </div>
    <div class="notice-2">
      <swiper :options="swiperOption2" class="swiper-no-swiping">
        <swiper-slide v-for="(item, index) in tipList" :key="index">
          <div class="lunbo">
            <img src="../assets/fire.png" class="text-1">
            <span>{{item.name}}</span>
            <span>{{item.tel}}</span>
            <span>{{item.time}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt1.png" class="biaoti bt-1" id="page1">
    <div class="video-box">
      <video class="video-1"  poster="https://cdn.xiongmaolaoshi.com/panda/website_mob/video1.png" :src="videoUrl" v-if="playShow">
      </video>
      <video class="video-1"  poster="https://cdn.xiongmaolaoshi.com/panda/website_mob/video1.png" :src="videoUrl" controls="controls" v-else>
      </video>
      <img src="../assets/play.png" class="play" @click="play" v-if="playShow">
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt2.png" class="biaoti bt-2">
    <div class="works">
      <swiper :options="swiperOption3">
        <swiper-slide>
          <div class="box">
            <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/banner01.png">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/banner02.png">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/banner03.png">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt3.png" class="biaoti bt-3">
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/intro1.png" class="intro-1">
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/intro2.png" class="intro-2">
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt4.png" class="biaoti bt-4">
    <div class="receive-box">
      <div>
        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive01.png">
      </div>
      <div>
        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive02.png">
      </div>
      <div>
        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive03.png">
      </div>
      <div>
        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive04.png">
      </div>
<!--      <div>-->
<!--        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive1.png">-->
<!--        <div>3天在线写字指导课</div>-->
<!--        <div>专业教研团队研制教学</div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive2.png">-->
<!--        <div>书法教师1对1点评</div>-->
<!--        <div>视频点评辅导，针对练习</div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive3.png">-->
<!--        <div>高效三步练字法</div>-->
<!--        <div>科学有效，进步看得见</div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/receive4.png">-->
<!--        <div>易错汉字笔顺讲解</div>-->
<!--        <div>笔顺不会错，考试不丢分</div>-->
<!--      </div>-->
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt5.png" class="biaoti bt-5">
    <div class="bottom-text">各阶段孩子都能有效提升写字水平</div>
    <div class="step-box">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/step1.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/step2.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/step3.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/step4.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/step5.png">
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt6.png" class="biaoti bt-6">
    <div class="way-box">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/way1.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/way2.png">
      <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/way3.png">
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt7.png" class="biaoti bt-7">
    <div class="change-box">
      <img src="../assets/change.png">
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bt8.png" class="biaoti bt-8">
    <div class="judge-box">
      <swiper :options="swiperOption4">
        <swiper-slide>
          <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/judge1.png">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/judge2.png">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/judge3.png">
        </swiper-slide>
        <div class="swiper-pagination2" slot="pagination"></div>
      </swiper>
    </div>
    <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bottom-banner.png" class="bottom-banner">
    <div class="kefu-box">
      <div class="text-1">客服热线</div>
      <div class="text-2">
        <span>18210861034</span>
        <a href="tel:18210861034">
          <img src="../assets/phone.png">
        </a>
      </div>
      <div class="text-3">周一至周日9:00-22:00</div>
      <div class="line"></div>
      <div class="text-4">上海市杨浦区长阳创谷C4区A016室  上海畔哒教育科技有限公司</div>
      <a href="http://beian.miit.gov.cn">
        <div class="text-4">沪ICP备18029528号</div>
      </a>

    </div>
    <div class="fixed" v-show="modalShow">
      <div class="bottoom-box">
        <img src="https://cdn.xiongmaolaoshi.com/panda/website_mob/bottom-logo.png" class="img">
<!--        <div class="container-inner">-->
<!--          <div>免费领取</div>-->
<!--          <div>199元写字大礼包</div>-->
<!--        </div>-->
        <img src="../assets/bottom-text.png" class="img2">
        <mt-button @click="goReceive">立即领取</mt-button>
      </div>
    </div>
    <div class="modal-bg" v-show="modal">
      <div class="modal-box">
        <div class="text-1">领取成功</div>
        <div class="text-2">稍后会有班主任联系您 <br>请注意接听电话哦</div>
        <mt-button @click="modal=false">知道啦</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
// import {receive} from '../api/index'
// import 'lib-flexible/flexible'
export default {
  name: 'home',
  data () {
    return {
      mobile: '',
      modal: false,
      url: 'https://cdn.xiongmaolaoshi.com/panda/website_mob/',
      modalShow: false,
      tipList: [{name: '李**', tel: '139****2787', time: '5分钟前'}, {name: '赵**', tel: '154****2353', time: '8分钟前'}, {
        name: '王**', tel: '136****5702', time: '21分钟前'}, {name: '周**', tel: '156****4623', time: '15分钟前'}, {
        name: '姚**', tel: '139****2554', time: '2分钟前'}, {name: '任**', tel: '139****5714', time: '24分钟前'}, {
        name: '吴**', tel: '139****3354', time: '4分钟前'}, {name: '马**', tel: '139****6649', time: '16分钟前'}, {
        name: '孙**', tel: '139****6438', time: '7分钟前'}, {name: '刘**', tel: '139****4366', time: '8分钟前'}],
      playShow: true,
      videoUrl: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/strify.mp4',
      swiperOption: {
        // loop: true,
        direction: 'vertical',
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        }
      },
      swiperOption2: {
        loop: true,
        direction: 'vertical',
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        }
      },
      swiperOption3: {
        loop: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption4: {
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination2',
          clickable: true
        }
      }
    }
  },
  methods: {
    play () {
      this.playShow = false
      var video = document.querySelector('video')
      video.play()
    },
    receive () {
      if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.mobile))) {
        this.$toast('请输入正确的手机号')
        return
      }
      let data = {
        phonenum: this.mobile,
        type: 'mobile'
      }
      this.axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        url: 'https://online.xiongmaolaoshi.com/goods/collectphonenums',
        data: this.qs.stringify(data)
      }).then(res => {
        // console.log(res)
        if (res.data.errorCode === 0) {
          this.modal = true
        }
      })
      // receive(data).then(res => {
      //   console.log(res, 666)
      //   if (res.errorCode === 0) {
      //     this.modal = true
      //     // this.$toast('领取成功')
      //   } else {
      //     this.$toast(res.msg)
      //   }
      // })
    },
    goReceive () {
      document.getElementById('get-receive').scrollIntoView({block: 'end', behavior: 'smooth'})
    },
    addListen () {
      let that = this
      window.onscroll = function () {
        let t = document.documentElement.scrollTop || document.body.scrollTop
        if (!document.getElementById('page1')) {
          return
        }
        let page1 = document.getElementById('page1').offsetTop
        if (t > page1) {
          that.modalShow = true
        } else {
          that.modalShow = false
        }
      }
    },
    pageScroll () {
      let that = this
      let t = document.documentElement.scrollTop || document.body.scrollTop
      // if (!document.getElementById('page1')) {
      //   return
      // }
      let page1 = document.getElementById('page1').offsetTop
      if (t > page1) {
        that.modalShow = true
      } else {
        that.modalShow = false
      }
      console.log(this.modalShow)
    },
    initpage() {
    },
    bindControl() {
      this.initpage()
      window.resize(() => {
        this.initpage()
      })
    }
  },
  mounted () {
    this.addListen()
  }
  // beforeDestroy () {
  //   window.removeEventListener('scroll', this.pageScroll)
  // }
}
</script>

<style scoped lang="less">
  .modal-bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0,0,0,.48);
    .modal-box{
      width: 335px;
      height: 390px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("https://cdn.xiongmaolaoshi.com/panda/website_mob/success.png");
      background-size: 100% 100%;
      text-align: center;
      .text-1{
        font-size:26px;
        font-weight:bold;
        color:rgba(250,84,15,1);
        line-height:1;
        padding: 34px 0 14px;
      }
      .text-2{
        font-size:16px;
        font-weight:bold;
        color:rgba(21,21,21,1);
        line-height:24px;
      }
      button{
        width:260px;
        height:50px;
        background:linear-gradient(90deg,rgba(255,111,51,1) 0%,rgba(255,75,0,1) 100%);
        border-radius:10px;
        font-size:20px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
      }
    }
  }
  @font-face{
    font-family: 'SourceHanSansCN';
    /*src: url('../../static/SourceHanSansCN-Regular.otf');*/
  }
  .container {
    padding-bottom: 60px;
    /*font-family: 'SourceHanSansCN';*/
    .top-bg {
      img {
        width: 100%;
        display: block;
      }
    }

    .notice {
      height: 50px;
      background: linear-gradient(90deg, rgba(46, 117, 255, 1) 0%, rgba(30, 102, 240, 1) 100%);
      display: flex;
      align-items: center;
      padding: 0 30px;

      .tz {
        height: 16px;
        margin-right: 11px;
      }

      .lunbo {
        height: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
        .text-1 {
          font-size: 16px;
          line-height: 50px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        .num {
          font-size: 16px;
          font-weight: bold;
          color: rgba(255, 245, 21, 1);
          line-height: 24px;
        }
      }
    }
  }
  .receive {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ::-webkit-input-placeholder { /* WebKit browsers */
      color: #8393B5;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #8393B5;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #8393B5;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: #8393B5;
    }

    input {
      height: 60px;
      width: 335px;
      margin: 20px auto 10px;
      border-radius: 10px;
      border: 2px solid rgba(185, 197, 223, 1);
      padding: 0 20px;
      font-size: 16px;
      color: #8393B5;
    }

    button {
      height: 60px;
      line-height: 60px;
      width: 335px;
      margin: 0 auto;
      background: linear-gradient(90deg, rgba(255, 111, 51, 1) 0%, rgba(255, 75, 0, 1) 100%);
      border-radius: 10px;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    p {
      color: #8393B5;
      font-size: 16px;
      text-align: center;
      padding: 10px 0 40px;
    }
  }
  .notice-2 {
    height: 50px;
    background: linear-gradient(180deg, rgba(254, 245, 204, 1) 0%, rgba(254, 245, 204, 1) 100%);
    font-size: 16px;
    color: #303030;
    .lunbo{
      height: 50px;
      display: flex;
      align-items: center;
    }

    span {
      margin-right: 20px;
    }

    .text-1 {
      width: 19px;
      margin-right: 21px;
    }
  }
  .biaoti {
    height: 33px;
    display: block;
    margin: 0 auto;
  }
  .bt-1 {
    margin: 30px auto 40px;
  }
  .video-box{
    position: relative;
    width: 335px;
    margin: 0 auto;
    height: 188px;
    .play{
      width: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .video-1 {
    width: 100%;
    height: 100%;
  }
  .bt-2 {
    margin: 60px auto 40px;
  }
  .works {
    .box {
      padding: 10px;

      img {
        width: 100%;
      }
    }
  }
  .bt-3 {
    margin: 60px auto 35px;
  }
  .intro-1 {
    width: 350px;
    margin: 0 auto;
    display: block;
  }
  .intro-2 {
    width: 318px;
    margin: 18px auto 60px;
    display: block;
  }
  .bt-4 {
    margin-bottom: 36px;
  }
  .receive-box {
    display: flex;
    flex-wrap: wrap;

    & > div {
      width: 50%;
      text-align: center;
      margin-bottom: 30px;

      img {
        width: 100%;
      }

      & > div:nth-child(2) {
        font-size: 18px;
        font-weight: bold;
        color: rgba(21, 21, 21, 1);
        line-height: 27px;
        color: #151515;
      }

      & > div:nth-child(3) {
        font-size: 14px;
        font-weight: 400;
        color: rgba(80, 80, 80, 1);
        line-height: 21px;
        color: #505050;
      }
    }
  }
  .bt-5{
    margin-top: 30px;
  }
  .bottom-text{
    color: #505050;
    text-align: center;
    font-size:14px;
    font-weight:400;
    color:rgba(80,80,80,1);
    line-height:21px;
    margin-bottom: 40px;
    margin-top: 10px;
  }
  .step-box{
    padding: 0 10px;
    img{
      width: 100%;
    }
  }
  .bt-6{
    margin: 60px auto 32px;
  }
  .way-box{
    padding: 0 22px;
    text-align: center;
    img{
      width: 100%;
    }
    &>img:nth-child(1){
      width: 70%;
    }
  }
  .bt-7{
    margin: 52px auto 36px;
  }
  .change-box{
    padding: 0 12px;
    img{
      width: 100%;
    }
  }
  .bt-8{
    margin: 57px auto 40px;
  }
  .judge-box{
    text-align: center;
  }
  .bottom-banner{
    margin: 40px 0;
    width: 100%;
  }
  .fixed{
    position: fixed;
    width: 100%;
    z-index: 9;
    bottom: 0;
  }
  .bottoom-box{
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    /*background: url("https://cdn.xiongmaolaoshi.com/panda/website_mob/bottom-bg.png");*/
    background-size: 100% 100%;
    background:linear-gradient(90deg,rgba(255,111,51,0.86) 0%,rgba(255,75,0,0.86) 100%);
    .img{
      width: 100px;
      position: absolute;
      left: 0px;
      bottom: 0;
    }
    .img2{
      width: 125px;
      margin-left: 108px;
    }
    .container-inner{
      padding-left: 104px;
      font-size:16px;
      font-weight:bold;
      color:rgba(255,247,74,1);
      line-height:24px;
      margin-right: 26px;
      &>div:nth-child(2){
        font-size:16px;

        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:24px;
      }
    }
    button{
      width:100px;
      height:36px;
      background:rgba(255,255,255,1);
      border-radius:20px;
      font-size:18px;
      font-weight:bold;
      color:rgba(255,91,23,1);
      line-height:36px;
      position: absolute;
      right: 16px;
    }
  }
  .kefu-box{
    background:rgba(75,75,75,1);
    padding: 22px 18px 36px;
    .text-1{
      font-size:18px;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:27px;
    }
    .text-2{
      font-size:30px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:45px;
      display: flex;
      align-items: center;
      a{
        width: 30px;
        margin-left: 12px;
        display: flex;
        align-items: center;
      }
      img{
        width: 100%;
      }
    }
   .text-3{
      font-size:14px;

      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:21px;
    }
    .text-4{
      font-size:12px;
      font-weight:400;
      color:#c5c5c5;
      line-height:18px;
    }

    .line{
      width:56px;
      height:1px;
      background:rgba(255,255,255,0.2);
      border-radius:1px;
      margin: 24px 0 24px;
    }
  }
</style>
<style lang="less">
  .tips {
    .swiper-slide {
      line-height: 55px;
    }
  }
  .notice{
    .swiper-container{
      height: 50px;
    }
  }

  .notice-2 {
    .swiper-container{
      height: 50px;
    }
    .swiper-slide {
      display: flex;
      align-items: center;
      height: 50px;
      justify-content: center;
    }
  }

  .works {
    .swiper-pagination-bullet-active {
      background-color: #FA540F;
    }
    .swiper-container{
      padding-bottom: 10px;
    }
  }
  .judge-box {
    .swiper-pagination-bullet-active {
      background-color: #FA540F;
    }
    .swiper-slide {
      width: 86%;
      img{
        width: 100%;
      }
    }
  }
</style>
