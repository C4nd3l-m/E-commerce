import { IProducts } from "@/Interfaces/IProducts"
import { productsToPreLoad } from "@/helpers/products";

export const getProducts = async (): Promise<IProducts[]> => {
    return productsToPreLoad;
  };
  
  export const getProductById = async (id: string): Promise<IProducts> => {
    const productDetail = productsToPreLoad.find(
      (product) => product.id === id
    );
    if (!productDetail) throw new Error("Product not found");
    return productDetail;
  };