<template>
  <div>
    <div>
      <!-- 头部1 -->
      <div class="My_title unlogin" v-if="!isLogin">
        <img
          class="My_bg"
          src="http://liufusong.top:8080/img/profile/bg.png"
          alt=""
        />
        <div class="My_info">
          <div class="My_myIcon">
            <img
              class="My_avatar"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <div class="My_user">
            <div class="My_name">游客</div>
            <div class="My_edit">
              <van-button size="small" round type="primary" @click="goLogin"
                >去登录</van-button
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 头部2 -->
      <div class="My_title logined" v-else>
        <img
          class="My_bg"
          src="http://liufusong.top:8080/img/avatar.png"
          alt=""
        />
        <div class="My_info">
          <div class="My_myIcon">
            <img
              class="My_avatar"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <div class="My_user">
            <div class="My_name">{{ userInfo.nickname }}</div>
            <van-button size="small" round type="primary" @click="goLogout"
              >退出</van-button
            >
            <div class="My_edit">编辑个人资料</div>
          </div>
        </div>
      </div>

      <!-- 宫格 -->
      <van-grid :column-num="3" class="grid" clickable>
        <van-grid-item @click="favLogin">
          <span><van-icon name="star-o" /></span>
          <p class="txt">我的收藏</p>
        </van-grid-item>
        <van-grid-item to="/rent">
          <span><van-icon name="wap-home-o" /></span>
          <p class="txt">我的出租</p>
        </van-grid-item>
        <van-grid-item>
          <span><van-icon name="underway-o" /></span>
          <p class="txt">看房记录</p>
        </van-grid-item>
        <van-grid-item>
          <span><van-icon name="balance-list-o" /></span>
          <p class="txt">成为房主</p>
        </van-grid-item>
        <van-grid-item>
          <span><van-icon name="friends-o" /></span>
          <p class="txt">个人资料</p>
        </van-grid-item>
        <van-grid-item>
          <span><van-icon name="service-o" /></span>
          <p class="txt">联系我们</p>
        </van-grid-item>
      </van-grid>
      <div class="My_ad">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  data() {
    return {
      userInfo: {},
      routeTo: '/favorite'
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    async login() {
      // const res = await login()
      // console.log(res)
      // this.userInfo = res.data.body
    },
    goLogout() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出?'
        })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {})
    },
    async loadUserInfo() {
      try {
        // console.log(this.$store.state.user) // token
        const { data } = await getUserInfo()
        console.log(data)
        this.userInfo = data.body
      } catch (err) {
        console.log(err)
      }
    },
    favLogin() {
      if (this.user) {
        this.$router.push('/favorite')
      } else {
        this.$router.push('/login')
      }
    }
  },
  created() {
    this.login()
    if (this.user) {
      this.loadUserInfo()
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user
    },
    ...mapState(['user'])
  }
}
</script>

<style scoped lang="less">
.My_title {
  min-height: 600px;
  position: relative;
  .My_bg {
    width: 100%;
  }
  .My_info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 20px 6px #ddd;
    margin: 100px auto 0;
    padding: 0 40px;
    text-align: center;
    font-size: 26px;
    .My_myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 4px 4px #bdbdbd;
      .My_avatar {
        width: 100%;
        border-radius: 50%;
      }
    }
    .My_user {
      padding-top: 30px;
      .My_name {
        margin-top: -60px;
        margin-bottom: 20px;
      }
      .My_edit {
        color: #999;
        font-size: 24px;
        margin-top: 40px;
      }
    }
  }
}

.grid {
  margin-top: 20px;

  height: 380px;
  color: #333;
  font-size: 24px;
  .van-grid-item {
    height: 130px;
  }
  .van-icon {
    font-size: 40px;
  }
  // p标签文字
  .txt {
    font-size: 13px;
  }
}

.My_ad {
  text-align: center;
  margin-top: 20px;
  img {
    width: 92%;
  }
}
</style>
