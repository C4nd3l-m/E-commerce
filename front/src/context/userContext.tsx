"use client"
import Cookies from "js-cookie";
import { createContext, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { apiRegisterUser, apiLoginUser } from "@/api/authUser";
import { getProductById, getProducts, fetchUserOrders, fetchOrderDetails } from "@/api/getProducts";
import { IUserLogin, IUserRegister } from "@/Interfaces/IUser";
import { IProducts } from "@/Interfaces/IProducts";
import { IOrder } from "@/Interfaces/IOrder";


interface IUserContext {
    user: { id: string; name: string } | null;
    loginUser: (userData: IUserLogin) => Promise<{ user: { id: string; name: string }; token: string } | null>;
    registerUser: (userData: IUserRegister) => Promise<void>;
    logOutUser: () => void;
    products: IProducts[];
    fetchProducts: () => Promise<void>;
    fetchProductById: (id: string) => Promise<IProducts | undefined>;
    cart: IProducts[];
    addToCart: (product: IProducts) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    fetchCartProducts: () => Promise<void>;
}



export const UserContext = createContext<IUserContext>({
    user: null,
    loginUser: async () => { },
    registerUser: async () => { },
    logOutUser: () => { },
    products: [],
    fetchProducts: async () => { },
    fetchProductById: async () => undefined,
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    fetchCartProducts: async () => { }
});



const getUserFromCookies = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
};


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<{ id: string, name: string } | null>(getUserFromCookies());
    const [products, setProducts] = useState<IProducts[]>([]);
    const [cart, setCart] = useState<IProducts[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedUser = getUserFromCookies();
        if (storedUser) {
            setUser(storedUser.user);
        }
    }, []);

    const loginUser = async (userData: IUserLogin): Promise<{ user: { id: string, name: string }; token: string } | null> => {
        const response = await apiLoginUser(userData);
        if (response?.token && response?.user) {
            setUser(response.user);
            return { user: response.user, token: response.token };
        }
        return null;
    };


    const registerUser = async (userData: IUserRegister): Promise<void> => {
        try {
            await apiRegisterUser(userData);
            alert("User created successfully");
            router.push("/login");
        } catch (error) {
            console.error("Register error", error);
            alert("An error occurred while registering");
        }
    };


    const logOutUser = () => {
        Cookies.remove("userData");
        setUser(null);
        router.push("/");
    };

    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const fetchProductById = async (id: string): Promise<IProducts | undefined> => {
        try {
            return await getProductById(id);
        } catch (error) {
            console.error("Error fetching product by ID", error);
        }
    };

    const fetchCartProducts = async () => {
        if (user) {
            const orders = await fetchUserOrders(Number(user.id));
            const pendingOrder = orders.find((order: IOrder) => order.status === "pending");
            if (pendingOrder) {
                const products = await fetchOrderDetails(pendingOrder.id);
                setCart(products);
            }
        }
    };


    const addToCart = (product: IProducts) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) =>
            prevCart.filter((product) => Number(product.id) !== Number(productId)));
    };

    const clearCart = () => {
        setCart([]);
    };

    const value = useMemo(
        () => ({
            user,
            loginUser,
            registerUser,
            logOutUser,
            products,
            fetchProducts,
            fetchProductById,
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            fetchCartProducts
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user, products, cart]
    );

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
