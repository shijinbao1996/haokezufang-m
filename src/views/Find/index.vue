<template>
  <div>
    <van-nav-bar
      class="navBar"
      title="找房"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.navBar {
  background-color: #21b97a;
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.van-icon-arrow-left {
    color: #fff;
  }
}
</style>
