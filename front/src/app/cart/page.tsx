"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { IProducts } from "@/Interfaces/IProducts";
import { useRouter } from "next/navigation";



const Cart: React.FC = () => {
    const router = useRouter();
    const { cart, removeFromCart, clearCart, confirmUserOrder, user } = useContext(UserContext);

    const handleCheckout = async () => {

        if (!user?.token) {
            return
        }
        const productIds: number[] = cart.map((product) => product.id);
        const response = await confirmUserOrder(productIds, user.token);
        router.push("/orders")
        console.log("Order confirmation response:", response);
    };

    if (!cart.length) return <h1>Your cart is empty</h1>;

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map((product: IProducts) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button onClick={() => removeFromCart(product.id.toString())}>Remove</button>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
            <Link href="/home">
                <button>Continue Shopping</button>
            </Link>
        </div>
    );
};

export default Cart;
