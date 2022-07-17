<template>
  <div class="home">
    <!-- 搜索框 -->
    <div class="search-box">
      <div class="search">
        <div class="location">
          <span class="name">深圳</span>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="form">
          <i class="iconfont icon-fangdajing"></i>
          <span class="text">请输入小区地址</span>
        </div>
      </div>
      <i class="iconfont icon-dingwei"></i>
    </div>
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="200"
    >
      <van-swipe-item v-for="item in swiperImages" :key="item.id">
        <img
          class="swiimage"
          :src="`http://liufusong.top:8080${item.imgSrc}`"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 租房导航 -->
    <div class="nav-flex">
      <div class="flexbox-item">
        <img src="../../assets/zhengzu.png" alt="" />
        <h2>整租</h2>
      </div>
      <div class="flexbox-item">
        <img src="../../assets/hezu.png" alt="" />
        <h2>合租</h2>
      </div>
      <div class="flexbox-item">
        <img src="../../assets/mapzhaofang.png" alt="" />
        <h2>地图找房</h2>
      </div>
      <div class="flexbox-item">
        <img src="../../assets/gorent.png" alt="" />
        <h2>去出租</h2>
      </div>
    </div>
    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group-title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <div class="am-grid"></div>
    </div>
  </div>
</template>

<script>
import { getSwiper } from '@/api'
export default {
  data() {
    return {
      swiperImages: []
    }
  },
  created() {
    this.showSwiper()
  },
  methods: {
    async showSwiper() {
      const {
        data: { body }
      } = await getSwiper()
      console.log(body)
      this.swiperImages = body
    }
  }
}
</script>

<style scoped lang="less">
.home {
  // 搜索框

  .search-box {
    align-items: center;
    position: absolute;
    top: 50px;
    width: 750px;
    padding: 0 10px;
    z-index: 2;
    display: flex;
    /deep/.search {
      display: flex;
      flex: 1 1;
      height: 56px;
      margin: 0 20px;
      padding: 10px 10px 10px 16px;
      border-radius: 6px;
      background-color: #fff;
      .location {
        .name {
          font-size: 32px;
        }
      }
      .form {
        text-align: left;
        border-left: 2px solid #e5e5e5;
        margin-left: 24px;
        margin-top: 20px;
        line-height: 16px;
        font-size: 32px;
        .text {
          padding-left: 8px;
          font-size: 26px;
          color: #9c9fa1;
        }
      }
    }
    .icon-dingwei {
      font-size: 50px;
      color: #fff;
      margin-right: 20px;
    }
  }
  // 轮播图
  /deep/.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    width: 375px;
    text-align: center;
    background-color: #39a9ed;
    vertical-align: top;
    background-size: cover;
    .swiimage {
      width: 750px;
    }
  }
  // 租房导航
  .nav-flex {
    display: flex;
    align-items: center;
    text-align: left;
    overflow: hidden;
    .flexbox-item {
      display: block;
      text-align: center;
      padding: 20px 0;
      flex: 1 1;
      img {
        width: 120px;
        height: 120px;
        text-align: center;
      }
      h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: #333;
      }
    }
  }
  // 租房小组
  .group {
    background-color: #f6f5f6;
    overflow: hidden;
    padding: 0 10px;
    display: block;
    font-size: 14px;
    .group-title {
      .more {
      }
    }
    .am-grid {
    }
  }
}
</style>
