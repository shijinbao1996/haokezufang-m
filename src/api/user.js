import request from '@/utils/request'
import store from '@/store'

// 登录
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

// 用户信息
export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: { Authorization: store.state.user }
  })
}

// 查看收藏列表
export const getFavoriteList = () => {
  return request({
    url: '/user/favorites',
    headers: { Authorization: store.state.user }
  })
}

// 我的出租
export const getHouseList = () => {
  return request({
    url: '/user/houses',
    headers: { Authorization: store.state.user }
  })
}
