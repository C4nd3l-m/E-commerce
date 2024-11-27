// AddToCart.tsx

"use client"

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { IProducts } from "@/Interfaces/IProducts";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import toast from 'react-hot-toast'; 

interface AddToCartProps {
    product: IProducts; 
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const { addToCart, user } = useContext(UserContext);
    const router = useRouter();

    const handleRedirectToLogin = () => {
        router.push("/login");
        toast.error("You need to log in to add items to your cart."); 
    };

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} has been added to your cart!`); 
    };

    return (
        <div>
            {user?.token ? (
                <button 
                    type="button" 
                    onClick={handleAddToCart} 
                    name="addToCart"
                    aria-label="Add to cart"
                >
                    <FaShoppingCart size={24} color="white" /> 
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
