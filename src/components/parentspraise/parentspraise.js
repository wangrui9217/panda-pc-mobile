export default {
  data() {
    let _this = this;
    return {
      swiper_img: [
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise1.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise2.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise3.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise4.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise5.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise6.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise7.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise8.png',
        'https://cdn.xiongmaolaoshi.com/panda/website_pc/parentspraise/parentspraise9.png'
      ],
      swiperOption: {
         speed: 800,
         observer: true,
           observeParents: true,
        autoplay: {
        delay:3500,
        disableOnInteraction: false,
      },
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        on: {
          slideChangeTransitionEnd: function () {
            //alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            _this.paginationNum = this.activeIndex+1
          },
        },
      },
      paginationNum: 0,
      paginationActive: 1
    };
  },
  computed: {
    swiper() {
      return this.$refs.parentspraiseSwiper.swiper
    }
  },
  mounted() {
    let _this = this;

  },
  methods: {
    paginationClick(num) {
      console.log(num);
      this.swiper.slideTo(num, 1000, false);
      this.paginationNum = num+1;
    }
  },
  watch: {
    
  }
}
