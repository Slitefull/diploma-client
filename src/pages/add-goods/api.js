import wretch from 'wretch'


const createGoods = body => wretch(`api/goods/good`).post(body).res()

export const goodsApi = {
  createGoods
}