import { IProducts } from "./IProducts";

export interface IUserContext {
    user: { id: string; name: string; token: string} | null;
    cart: IProducts[];
    loginUser: (userData: { email: string; password: string; token: string}) => Promise<{ user: { id: string; name: string }; token: string } | null>;
    registerUser: (userData: { name: string; email: string; password: string, address: string, phone: string }) => Promise<void>;
    logOutUser: () => void;
    fetchProducts: () => Promise<void>;
    addToCart: (product: IProducts) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    confirmUserOrder: (order: number[], token: string) => Promise<void>;
}

