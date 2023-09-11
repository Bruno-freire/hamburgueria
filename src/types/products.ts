export interface IProducts {
  id: number
  name: string
  price: number
  category: string
  favorite?: boolean
  description: string
  observation?: string
  additional?: Array<object>
  quantity: number
}