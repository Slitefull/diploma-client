import wretch from 'wretch'

const createGoods = body => wretch(`api/goods/good`).post(body)

export const goodsApi = {
  createGoods
}