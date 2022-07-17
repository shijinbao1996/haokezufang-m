<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#ecc8a3"
      inactive-color="#8f918f"
      route
    >
      <van-tabbar-item to="/layout/home">
        <template #icon>
          <span class="iconfont icon-shouye"></span>
          <span class="text">首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/find">
        <template #icon>
          <span class="iconfont icon-FIND"></span>
          <span class="text">找房</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/info">
        <template #icon>
          <span class="iconfont icon-zixun"></span>
          <span class="text">资讯</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/my">
        <template #icon>
          <span class="iconfont icon-wode"></span>
          <span class="text">我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'my'
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-tabbar-item__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin-bottom: 0;
  .iconfont {
    font-size: 0.53333rem;
  }
  .text {
    font-size: 0.32rem;
  }
}
</style>
