<template>
  <div class="box" ref="teachershow">
    <h2 class="teachershow-title">全国著名书法家教学</h2>
    <p class="teachershow-subtitle">原中国书法家协会副主席邵秉仁先生发起设立的秉仁书院，提供教研支持</p>
    <p class="teachershow-subtitle">
      目前已有超过
      <span class="num">600000</span>名小朋友跟熊猫老师在线学写字
    </p>
    <div class="swiper-box">
      <div class="swiper-arrows swiper-prev"></div>
      <swiper class="swiper" :options="swiperOption" ref="teachershowSwiper">
        <swiper-slide v-for="(item,index) in swiper_img" :key="index">
          <img alt="熊猫教写字" class="swiper-item-img"  :src="item.img" width="100%" />
          <p class="swiper-item-name">
            {{item.name}}
            <span class="swiper-item-sign" v-bind:class="{type:item.type=='主讲名师'}">{{item.type}}</span>
          </p>
          <p class="swiper-item-intro">{{item.intro}}</p>
        </swiper-slide>
      </swiper>
      <div class="swiper-arrows swiper-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper_img: [
        {
          img:
            "https://cdn.xiongmaolaoshi.com/panda/website_pc/teachershow/x.png",
          name: "高凯强",
          type: "主讲名师",
          intro:
            "11年少儿硬笔书法教学经验，中国硬笔书法协会会员，全国规范字书写注册教师"
        },
        {
          img:
            "https://cdn.xiongmaolaoshi.com/panda/website_pc/teachershow/nn.png",
          name: "楠楠老师",
          type: "班主任",
          intro: "毕业于哈尔滨师范大学书法专业"
        },
        {
          img:
            "https://cdn.xiongmaolaoshi.com/panda/website_pc/teachershow/yy.png",
          name: "月月老师",
          type: "班主任",
          intro: "毕业于河南大学书法专业"
        },
        {
          img:
            "https://cdn.xiongmaolaoshi.com/panda/website_pc/teachershow/tt.png",
          name: "糖糖老师",
          type: "班主任",
          intro: "毕业于上海师范大学书法专业"
        }
      ],
      swiperOption: {
        watchSlidesProgress: true,
        observer: true,
          observeParents: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev"
        },
        on: {
          progress: function(progress) {
            for (let i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              var translate = slideProgress * modify * 1.4 + "rem";
              var scale = 1 - Math.abs(slideProgress) / 5;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.addClass = "active";
              //slide.css('width','380px')
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        }
      },
      paginationNum: 0,
      paginationActive: 1
    };
  },
  computed: {
    swiper() {
      return this.$refs.teachershowSwiper.swiper;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./teachershow.css" scoped></style>
