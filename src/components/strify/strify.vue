<template>
  <div class="box">
    <h2 class="strify-title">两分钟了解熊猫教写字</h2>
    <div class="video-box">
      <video
        class="strify-video"
        src="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/strify.mp4"
        :controls="controls"
        id="strify-video"
        poster="https://cdn.xiongmaolaoshi.com/panda/website_pc/comn/strify-video-bg.jpg"
      ></video>
      <img alt="熊猫老师"
        v-show="!controls"
        class="strify-video-play"
        src="https://cdn.xiongmaolaoshi.com/panda/website_pc/icon/video-play.png"
        @click="playAudio"
      />
    </div>
  </div>
</template>

<script src='./strify.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./strify.css" scoped></style>
