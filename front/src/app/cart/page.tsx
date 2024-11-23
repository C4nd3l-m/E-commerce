/* eslint-disable @next/next/no-img-element */
"use client";

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useContext(UserContext);

    const handleCheckout = () => {
        clearCart(); 
        alert("Purchase successful! Your cart is now empty.");
    };

    return (
        <div>
            {!cart.length ? (
                <h1>Your cart is empty</h1>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button type="button" onClick={() => removeFromCart(product.id.toString())}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={clearCart}>Clear Cart</button>
                </div>
            )}
            <Link href={"/home"}>
                <button type="button" title="Continue Shopping">
                    Continue shopping 🛍️
                </button>
            </Link>
            {!!cart.length && (
                <button type="button" onClick={handleCheckout}>
                    Complete Purchase
                </button>
            )}
        </div>
    );
};

export default Cart;
