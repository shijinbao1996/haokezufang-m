import request from '@/utils/request'

export const getHouseInfo = (id) => {
  return request({
    url: `/houses/${id}`,
    id
  })
}
