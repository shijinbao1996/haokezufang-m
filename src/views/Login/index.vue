<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
      to="/layout"
    />
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="accountRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="passwordRules"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          color="#21b97a"
          @click="login1"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="am-flexbox-item">
      <a href="#/registe">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
import { accountRules, passwordRules } from './rules'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      accountRules,
      passwordRules
    }
  },
  methods: {
    async login1() {
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true
      // })
      try {
        const res = await login(this.username, this.password)
        console.log(this.username, this.password)
        const status = res.data.status
        console.log(status)
        // const description = res.data.description
        if (status !== 200) {
          this.$toast.fail('登陆失败,请刷新')
        } else {
          this.$toast.success('登录成功')
          // console.log('login', values) // 用户输入的用户名和密码
          this.$store.commit('setUser', res.data.body.token)
          console.log(res.data.body)
          // console.log(this.$router)
          this.$router.push({
            path: '/layout/my'
          })
        }
      } catch (err) {
        console.log(err)
      }
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

.am-flexbox-item {
  box-sizing: border-box;
  flex: 1 1;
  margin-left: 8px;
  min-width: 10px;
  text-align: center;
  a {
    color: #666;
    font-size: 14px;
  }
}
</style>
