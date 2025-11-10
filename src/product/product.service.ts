import type { Product } from "./product.model.js"

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calcStock = (): number => {

  let total: number = 0

  products.forEach(el => {
    total += el.stock
  })

  return total
}

