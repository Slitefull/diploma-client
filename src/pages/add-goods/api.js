import wretch from 'wretch'

const createGoods = body => wretch(`api/goods/goods`).post(body).res()
const getAllGoods = () => wretch(`api/goods/goods`).get().json()
const getAllCategories = () => wretch(`api/goods/category`).get().json()
const createCategory = name => wretch(`api/goods/category`).post({ name }).res()

export const goodsApi = { createGoods, getAllGoods, createCategory, getAllCategories }
