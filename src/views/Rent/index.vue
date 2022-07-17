<template>
  <div>
    <van-nav-bar
      class="navBar"
      title="房屋管理"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="Rent_houses">
      <div
        class="HouseItem_house"
        v-for="(item, index) in houseInfo"
        :key="index"
      >
        <div class="HouseItem_imgWrap">
          <img
            class="HouseItem_img"
            src="http://liufusong.top:8080/uploads/upload_2ea57ac079baaf77debaa1090aaa6555.jpg "
            alt=""
          />
        </div>
        <div class="HouseItem_content">
          <h3 class="HouseItem_title">{{ item.title }}</h3>
          <div class="HouseItem_desc">{{ item.desc }}</div>
          <div>
            <span class="HouseItem_tag">{{ item.tags[0] }}</span>
          </div>
          <div class="HouseItem_price">
            <span class="HouseItem_priceNum">{{ item.price }}</span>
            元/月
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHouseList } from '@/api'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      houseInfo: {}
    }
  },
  created() {
    if (this.user) {
      this.loadHouseList()
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async loadHouseList() {
      //   const res = await getHouseList()
      //   console.log(res)
      try {
        const {
          data: { body }
        } = await getHouseList()
        this.houseInfo = body
        console.log(body)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
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
.Rent_houses {
  padding: 0 10px;
  background-color: #fff;
  .HouseItem_house {
    height: 240px;
    position: relative;
    box-sizing: border-box;
    justify-content: space-around;
    padding-top: 36px;
    border-bottom: 2px solid #e5e5e5;
    .HouseItem_imgWrap {
      float: left;
      width: 212px;
      height: 160px;
      .HouseItem_img {
        width: 212px;
        height: 160px;
      }
    }
    .HouseItem_content {
      overflow: hidden;
      line-height: 44px;
      padding-left: 24px;

      .HouseItem_title {
        margin: 0;
        font-size: 30px;
        color: #394043;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      .HouseItem_desc {
        font-size: 12px;
        color: #afb2b3;
      }
      .HouseItem_tag {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
      .HouseItem_price {
        font-size: 12px;
        color: #fa5741;
        .HouseItem_priceNum {
          font-size: 16px;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
