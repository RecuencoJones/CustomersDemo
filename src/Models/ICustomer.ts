import { IOrder } from './IOrder'

export interface ICustomer {
  id: number
  firstName: string
  lastName: string
  address: string
  city: string
  orders: Array<IOrder>
}
