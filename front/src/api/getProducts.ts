import { IProducts } from "@/Interfaces/IProducts"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const getProducts = async(): Promise<IProducts[]> =>{
    const response = await fetch(`${APIURL}/products`, {
        next: {revalidate: 1200}})
    const products = response.json()
    return products;
}


export const getProductById = async (id: string): Promise<IProducts> => {
    const response = await getProducts();
    const productDetail  = response.find((product) => product.id.toString() === id)
    if(!productDetail) throw new Error("Product not found")
    return productDetail;
}


export const fetchUserOrders = async (userId: number) => {
    try {
        const response = await fetch(`${APIURL}/orders/user/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch orders");
        const orders = await response.json();
        return orders;
    } catch (error) {
        console.error("Error fetching user orders:", error);
    }
};


export const fetchOrderDetails = async (orderId: number) => {
    try {
        const response = await fetch(`${APIURL}/orders/${orderId}`);
        if (!response.ok) throw new Error("Failed to fetch order details");
        const order = await response.json();
        return order.products;  // Los productos del carrito
    } catch (error) {
        console.error("Error fetching order details:", error);
    }
};
