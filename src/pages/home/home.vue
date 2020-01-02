<template>
  <div class="content">
    <common-header></common-header>
    <div ref="login">
      <common-login id="componentLogin"></common-login>
    </div>
    <div ref="strify">
      <common-strify id="componentStrify"></common-strify>
    </div>
    <div ref="studentswork">
      <common-studentswork id="componentStudentswork"></common-studentswork>
    </div>
    <div ref="teachershow">
      <common-teachershow id="componentTeachershow"></common-teachershow>
    </div>
    <div ref="acquire">
      <common-acquire id="componentAcquire"></common-acquire>
    </div>
    <div ref="teachsystem">
      <common-teachsystem id="componentTeachsystem"></common-teachsystem>
    </div>
    <div ref="teachstyle">
      <common-teachstyle id="componentTeachstyle"></common-teachstyle>
    </div>
    <div ref="parentspraise">
      <common-parentspraise id="componentParentspraise"></common-parentspraise>
    </div>
    <div ref="childrenchange">
      <common-childrenchange id="componentChildrenchange"></common-childrenchange>
    </div>
    <common-footerget v-if="footerget_show"></common-footerget>
    <common-footer id="componentFooter"></common-footer>
    <!-- 侧边 -->
    <aside class="aside-list">
      <a
        v-bind:class="{active:aside_active===0}"
        @click="aside_active=0"
        href="#componentLogin"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===1}"
        @click="aside_active=1"
        href="#componentStrify"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===2}"
        @click="aside_active=2"
        href="#componentStudentswork"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===3}"
        @click="aside_active=3"
        href="#componentTeachershow"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===4}"
        @click="aside_active=4"
        href="#componentAcquire"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===5}"
        @click="aside_active=5"
        href="#componentTeachsystem"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===6}"
        @click="aside_active=6"
        href="#componentTeachstyle"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===7}"
        @click="aside_active=7"
        href="#componentParentspraise"
        class="aside-item"
      ></a>
      <a
        v-bind:class="{active:aside_active===8}"
        @click="aside_active=8"
        href="#componentChildrenchange"
        class="aside-item"
      ></a>
    </aside>
  </div>
</template>

<script>
import header from "../../components/header/header.vue";
import login from "../../components/login/login.vue";
import strify from "../../components/strify/strify.vue";
import studentswork from "../../components/studentswork/studentswork.vue";
import teachershow from "../../components/teachershow/teachershow.vue";
import acquire from "../../components/acquire/acquire.vue";
import teachsystem from "../../components/teachsystem/teachsystem";
import teachstyle from "../../components/teachstyle/teachstyle.vue";
import parentspraise from "../../components/parentspraise/parentspraise.vue";
import childrenchange from "../../components/childrenchange/childrenchange.vue";
import footer from "../../components/footer/footer.vue";
import footerget from "../../components/footerget/footerget.vue";
export default {
  components: {
    "common-header": header,
    "common-login": login,
    "common-strify": strify,
    "common-studentswork": studentswork,
    "common-teachershow": teachershow,
    "common-acquire": acquire,
    "common-teachsystem": teachsystem,
    "common-teachstyle": teachstyle,
    "common-parentspraise": parentspraise,
    "common-childrenchange": childrenchange,
    "common-footer": footer,
    "common-footerget": footerget
  },
  name: "home",
  data() {
    return {
      aside_active: 0,
      footerget_show:false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let _this = this;
      var logintop = this.$refs.login.getBoundingClientRect().top;
      var loginbottom = this.$refs.login.getBoundingClientRect().bottom;
      var strifytop = this.$refs.strify.getBoundingClientRect().top;
      var strifybottom = this.$refs.strify.getBoundingClientRect().bottom;
      var studentsworktop = this.$refs.studentswork.getBoundingClientRect().top;
      var studentsworkbottom = this.$refs.studentswork.getBoundingClientRect()
        .bottom;
      var teachershowtop = this.$refs.teachershow.getBoundingClientRect().top;
      var teachershowbottom = this.$refs.teachershow.getBoundingClientRect()
        .bottom;

      var acquiretop = this.$refs.acquire.getBoundingClientRect().top;
      var acquirebottom = this.$refs.acquire.getBoundingClientRect().bottom;

      var teachsystemtop = this.$refs.teachsystem.getBoundingClientRect().top;
      var teachsystembottom = this.$refs.teachsystem.getBoundingClientRect()
        .bottom;

      var teachstyletop = this.$refs.teachstyle.getBoundingClientRect().top;
      var teachstylebottom = this.$refs.teachstyle.getBoundingClientRect()
        .bottom;

      var parentspraisetop = this.$refs.parentspraise.getBoundingClientRect()
        .top;
      var parentspraisebottom = this.$refs.parentspraise.getBoundingClientRect()
        .bottom;

      var childrenchangetop = this.$refs.childrenchange.getBoundingClientRect()
        .top;
      var childrenchangebottom = this.$refs.childrenchange.getBoundingClientRect()
        .bottom;
      if (logintop < 0 && loginbottom < 80) {
          _this.footerget_show=true
      }else{
        _this.footerget_show=false
      }

      if (logintop == 80 && loginbottom > 0) {
        _this.aside_active = 0;
      } else if (strifytop <= 0 && strifybottom > 0) {
        _this.aside_active = 1;
      } else if (studentsworktop <= 0 && studentsworkbottom > 0) {
        _this.aside_active = 2;
      } else if (teachershowtop <= 0 && teachershowbottom > 0) {
        _this.aside_active = 3;
      } else if (acquiretop <= 0 && acquirebottom > 0) {
        _this.aside_active = 4;
      } else if (teachsystemtop <= 0 && teachsystembottom > 0) {
        _this.aside_active = 5;
      } else if (teachstyletop <= 0 && teachstylebottom > 0) {
        _this.aside_active = 6;
      } else if (parentspraisetop <= 0 && parentspraisebottom > 0) {
        _this.aside_active = 7;
      } else if (childrenchangetop <= 0 && childrenchangebottom > 0) {
        _this.aside_active = 8;
      }
    },
    asideActive(num) {
      this.aside_active = num;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  position: relative;
}

.aside-list {
  position: fixed;
  top: 50%;
  right: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  margin-top: -2rem;
}

.aside-item {
  display: block;
  width: 0.06rem;
  height: 0.4rem;
  background: rgba(0, 0, 0, 0.17);
  border-radius: 0.06rem;
  margin-bottom: 0.04rem;
}

.aside-item:hover,
.aside-item.active {
  height: 0.8rem;
  background-color: #fd5e01;
  transition: all 0.3s linear;
}

.aside-item:first-child.active {
  background-color: #ffffff;
  transition: all 0.3s linear;
}
</style>
