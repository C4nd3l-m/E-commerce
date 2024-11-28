import { IProducts } from "@/Interfaces/IProducts"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const getProducts = async(): Promise<IProducts[]> =>{
    const response = await fetch(`${APIURL}/products`, {
        next: {revalidate: 1200}})
    const products = await response.json()
    return products;
}


export const getProductById = async (id: string): Promise<IProducts> => {
    const response = await getProducts();
    const productDetail  =  response.find((product) => product.id.toString() === id)
    if(!productDetail) throw new Error("Product not found")
    return productDetail;
}

