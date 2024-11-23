export interface IProducts{
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
    isOnSale?: boolean;
}

export interface IProductDetailParam{
    params: {
        id: string;
    }
}
