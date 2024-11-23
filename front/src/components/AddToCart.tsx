"use client";

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { IProducts } from "@/Interfaces/IProducts";

interface AddToCartProps {
    product: IProducts; 
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const { addToCart, cart } = useContext(UserContext);

    const handleAddToCart = () => {

        const isProductInCart = cart.some(item => item.id === product.id)
        if(!isProductInCart){
            addToCart(product);
        }else{
            alert("This product is already in the cart.");
        }
    };

    return (
        <button type="button" onClick={handleAddToCart} name="addToCart">
            Add to cart
        </button>
    );
};

export default AddToCart;
