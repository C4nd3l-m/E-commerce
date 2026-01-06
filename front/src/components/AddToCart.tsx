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
        <div className="flex items-center justify-center">
            {user?.token ? (
                <button
                    type="button"
                    onClick={handleAddToCart}
                    name="addToCart"
                    aria-label="Add to cart"
                    className="p-3 bg-brand-primary rounded-xl text-white shadow-lg shadow-brand-primary/20 hover:scale-110 active:scale-95 transition-all"
                >
                    <FaShoppingCart size={20} />
                </button>
            ) : (
                <button
                    type="button"
                    onClick={handleRedirectToLogin}
                    name="redirectToLogin"
                    aria-label="Go to login"
                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all"
                >
                    <FaShoppingCart size={20} />
                </button>
            )}
        </div>
    );
};

export default AddToCart;
