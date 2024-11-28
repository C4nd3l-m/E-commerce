"use client"
import React, { createContext, useState, useMemo, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { apiLoginUser, apiRegisterUser } from "@/api/authUser";
import { getProducts } from "@/api/getProducts";
import { confirmOrder } from "@/api/getOrders";
import { IProducts } from "@/Interfaces/IProducts";
import { IUserContext } from "@/Interfaces/IUserContext";
import { IUserLogin, IUserRegister, IUserSession2 } from "@/Interfaces/IUser";

export const UserContext = createContext<IUserContext>({
    user: null,
    cart: [],
    loginUser: async (): Promise<IUserSession2 | null> => { return null; },
    registerUser: async () => { },
    logOutUser: () => { },
    fetchProducts: async () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    confirmUserOrder: async () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ id: string; name: string; token: string } | null>(null);
    const [token, setToken] = useState<string | null>(Cookies.get("token") || null);
    const [products, setProducts] = useState<IProducts[]>([]);
    const [cart, setCart] = useState<IProducts[]>([]);
    const router = useRouter();


    useEffect(() =>{
        const dataCookie = Cookies.get("userData")
        if(dataCookie){
            const parsedData = JSON.parse(dataCookie)
            setUser(parsedData)
        }else{
            setUser(null)
        }
    }, [])



    const loginUser = async (userData: IUserLogin): Promise<IUserSession2 | null> => {
        const response = await apiLoginUser(userData);
        if (response) {
            const { user, token } = response;
            setUser({ ...user, token });  
            setToken(token);  
            Cookies.set("userData", JSON.stringify({ ...user, token }));
            Cookies.set("token", token);
            return { user: response.user, token: response.token };
        }
        return null;
    };


    const registerUser = async (userData: IUserRegister) => {
        await apiRegisterUser(userData);
        router.push("/login");
    };

    const logOutUser = () => {
        Cookies.remove("userData");
        Cookies.remove("token");
        setUser(null);
        setToken(null);
        setCart([]);
        router.push("/");
    };

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const addToCart = (product: IProducts) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((product) => product.id.toString() !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const confirmUserOrder = async (order: number[], token: string) => {
        
            try {
                const result = await confirmOrder(order, token); 
                clearCart();
                return result;
            } catch (error) {
                console.error("Error confirming the order:", error);
                throw error;
            }
        
    };
    

    const value = useMemo(() => ({
        user,
        products,
        cart,
        loginUser,
        registerUser,
        logOutUser,
        fetchProducts,
        addToCart,
        removeFromCart,
        clearCart,
        confirmUserOrder,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [user, products, cart, token]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
