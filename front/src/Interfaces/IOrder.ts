import { IProducts } from "./IProducts"

export interface IOrder{
    id: number
    status: string
    date: Date
    products: IProducts[]
}