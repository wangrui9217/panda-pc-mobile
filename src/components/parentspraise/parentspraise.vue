<template>
  <div class="box">
    <h2 class="title">家长真实好评</h2>
    <swiper class="swiper" :options="swiperOption" ref="parentspraiseSwiper">
      <swiper-slide v-for="(item,index) in swiper_img" :key="index">
        <img alt="熊猫教写字" class="swiper-item-img" :src="item" />
      </swiper-slide>
    </swiper>
    <ul class="pagination">
      <li class="pagination-item" @click="paginationClick(0)" v-bind:class="{active:paginationNum<4}"></li>
      <li class="pagination-item" @click="paginationClick(3)" v-bind:class="{active:paginationNum>3&&paginationNum<7}"></li>
      <li class="pagination-item" @click="paginationClick(6)" v-bind:class="{active:paginationNum>6&&paginationNum<10}"></li>
    </ul>
  </div>
</template>

<script src='./parentspraise.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./parentspraise.css' scoped></style>
