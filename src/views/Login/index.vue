<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" color="#21b97a"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await login(this.username, this.password)
      console.log(res)
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.navbar {
  margin-bottom: 20px;
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  .van-nav-bar__left {
    color: #fff;
  }
  /deep/.van-icon {
    color: #fff;
  }
}

.van-form {
  /deep/.van-cell {
    padding: 0.4rem 0.42667rem;
    font-size: 0.3999rem;
  }
}
</style>
