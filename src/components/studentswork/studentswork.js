export default {
  data() {
    let _this = this;
    return {
      swiper_img: [{
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/1.png',
        name: '陈张睿',
        grade: '大班',
        teacher: '糖糖老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tt.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/2.png',
        name: '徐晓莹',
        grade: '一年级',
        teacher: '兔子老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tz.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/3.png',
        name: '小小',
        grade: '二年级',
        teacher: '月月老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/yy.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/4.png',
        name: '张子豪',
        grade: '一年级',
        teacher: '楠楠老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/nn.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/5.png',
        name: '韦子凡',
        grade: '三年级',
        teacher: '糖糖老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tt.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/6.png',
        name: '徐晓涵',
        grade: '一年级',
        teacher: '兔子老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tz.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/7.png',
        name: '苏宣元',
        grade: '大班',
        teacher: '楠楠老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/nn.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/8.png',
        name: '多宝',
        grade: '一年级',
        teacher: '兔子老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tz.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/9.png',
        name: '陈张睿',
        grade: '大班',
        teacher: '糖糖老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tt.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/10.png',
        name: '顾萌萌',
        grade: '二年级',
        teacher: '兔子老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tz.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/11.png',
        name: '齐齐',
        grade: '三年级',
        teacher: '楠楠老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/nn.png'
      }, {
        jobsrc: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/12.png',
        name: '何炳呈',
        grade: '一年级',
        teacher: '兔子老师',
        teacherhead: 'https://cdn.xiongmaolaoshi.com/panda/website_pc/studentswork/tz.png'
      }],
      swiperOption: {
        speed: 800,
        observer: true,
          observeParents: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        on: {
          slideChangeTransitionEnd: function () {
            //alert(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            _this.paginationNum = this.activeIndex + 1
          },
        },
      },
      paginationNum: 0,
      paginationActive: 1
    };
  },
  computed: {
    swiper() {
      return this.$refs.studentsworkSwiper.swiper
    }
  },
  mounted() {
    
  },
  methods: {
    paginationClick(num) {
      console.log(num);
      this.swiper.slideTo(num, 1000, false);
      this.paginationNum = num + 1;
    }
  }
}

