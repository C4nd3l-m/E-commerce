"use client"

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { IProducts } from "@/Interfaces/IProducts";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

interface AddToCartProps {
    product: IProducts; 
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const { addToCart, user } = useContext(UserContext);
    const router = useRouter();

    const handleRedirectToLogin = () => {
        router.push("/login");
    };

    /*const handleAdd = () =>{
        if(user){
            const cart = JSON.parse(localStorage.getItem("cart" || "[]"))
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart))
        }else{
            router.push("/login")
        }
    }*/


    return (
        <div>
            {user?.token ? (
                <button 
                    type="button" 
                    onClick={() => addToCart(product)} 
                    name="addToCart"
                    aria-label="Add to cart"
                >
                    <FaShoppingCart size={24} color="black" /> 
                </button>
            ) : (
                <button 
                    type="button" 
                    onClick={handleRedirectToLogin} 
                    name="redirectToLogin"
                    aria-label="Go to login"
                >
                    <FaShoppingCart size={24} color="white" />
                </button>
            )}
        </div>
    );
};

export default AddToCart;
