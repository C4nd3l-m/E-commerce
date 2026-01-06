import { IProducts } from "@/Interfaces/IProducts"

const APIURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getProducts = async (): Promise<IProducts[]> => {
    try {
        const response = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200 }
        });
        if (!response.ok) return [];
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}


export const getProductById = async (id: string): Promise<IProducts> => {
    const response = await getProducts();
    const productDetail = response.find((product) => product.id.toString() === id)
    if (!productDetail) throw new Error("Product not found")
    return productDetail;
}

