import getsuccess from "../../components/getsuccess/getsuccess.vue";
export default {
  components: {
    "common-getsuccess": getsuccess
  },
  data() {
    return {
      getsuccess_show: false,
      form_inform: [],
      phonenum: '',
      input_tips: '',
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        delay: 1000,
        loop: true,
        speed: 500,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        centeredSlides: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        observeSlideChildren: true
      },
    }
  },
  created() {
    this.informData()
  },
  mounted() {

  },
  methods: {
    submit() {
      if (this.input_tips == '' && this.phonenum != '') {
        let data = {
          phonenum: this.phonenum,
          type: 'pc'
        }
        this.axios({
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          url: 'https://online.xiongmaolaoshi.com/goods/collectphonenums',
          data: this.qs.stringify(data)
        }).then(res => {
          console.log(res)
          if (res.data.errorCode === 0) {
            this.getsuccess_show = true
          }
        })
      } else {
        this.input_tips = '请输入正确的手机号'
      }
    },
    //验证手机号
    inputPhonenum() {
      let str = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (str.test(this.phonenum)) {
        this.input_tips = ''
      } else {
        this.input_tips = '请输入正确的手机号'
      }
    },
    // 生成滚动数据
    informData() {
      let _this = this;
      for (let index = 0; index < 20; index++) {
        _this.form_inform.push({
          phonenum: _this.getMoble(),
          time: _this.getTime() + "分钟前"
        })
      }
    },
    closePop() {
      this.getsuccess_show = false
    },
    // 随机号码
    getMoble() {
      // eslint-disable-next-line no-array-constructor
      var prefixArray = new Array(
        "130",
        "131",
        "132",
        "133",
        "135",
        "137",
        "138",
        "170",
        "187",
        "189"
      );
      var i = parseInt(10 * Math.random());
      var prefix = prefixArray[i] + "****";
      for (var j = 0; j < 4; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
      }
      return prefix;
    },
    //随机时间
    getTime() {
      var num = Math.floor(Math.random() * 15);
      return num == 0 ? 1 : num;
    }
  }
}
