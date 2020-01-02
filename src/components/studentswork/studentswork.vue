<template>
  <div class="box">
    <h2 class="studentswork-title">熊猫学员作品</h2>
    <swiper class="swiper" :options="swiperOption" ref="studentsworkSwiper">
      <swiper-slide v-for="(item,index) in swiper_img" :key="index">
        <img class="swiper-item-img" alt="在线写字" :src="item.jobsrc" width="100%" />
        <p class="swiper-item-name">
        {{item.name}}
          <span class="swiper-item-grade">{{item.grade}}</span>
        </p>
        <p class="swiper-item-teacher">
          <img alt="老师教写字" class="swiper-item-head" :src="item.teacherhead" />
          <span class="swiper-item-teachername">{{item.teacher}}指导</span>
        </p>
      </swiper-slide>
    </swiper>
    <!-- 如果需要分页器 -->
<ul class="pagination">
      <li class="pagination-item" @click="paginationClick(0)" v-bind:class="{active:paginationNum<5}"></li>
      <li class="pagination-item" @click="paginationClick(4)" v-bind:class="{active:paginationNum>4&&paginationNum<8}"></li>
      <li class="pagination-item" @click="paginationClick(7)" v-bind:class="{active:paginationNum>7&&paginationNum<11}"></li>
    </ul>
  </div>
</template>

<script src='./studentswork.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./studentswork.css' scoped></style>
