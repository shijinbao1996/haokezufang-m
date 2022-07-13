<template>
  <div>
    <router-view> </router-view>
    <van-tabbar
      v-model="active"
      active-color="#ecc8a3"
      inactive-color="#8f918f"
    >
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/find">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/layout/info">资讯</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/layout/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
