"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { IProducts } from "@/Interfaces/IProducts";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import styles from "@/app/cart/Cart.module.css";
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";

const Cart: React.FC = () => {
    const router = useRouter();
    const { cart, removeFromCart, clearCart, confirmUserOrder, user } = useContext(UserContext);

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    const handleCheckout = async () => {
        if (!user?.token) {
            toast.error("Please log in to proceed with the checkout!");
            return
        }
        const productIds = cart.map((product) => Number(product.id)); // Convierte el ID a número
        await confirmUserOrder(productIds, user.token);
                await confirmUserOrder(productIds, user.token);

        toast.success("Your order has been placed successfully!");
        router.push("/home");
    };

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
        toast.success("Item removed from the cart!");
    };

    const handleClearCart = () => {
        clearCart();
        toast.success("Cart has been cleared!");
    };

    if (!cart.length)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mt-10">
                    Your cart is empty
                </h1>
                <Link href="/home">
                    <button className="mt-6 py-2 px-6 text-white font-semibold bg-[#4c1d95] rounded-lg shadow-md hover:bg-[#5b21b6] focus:outline-none focus:ring-2 focus:ring-[#ddd6fe] transition-colors w-full sm:w-auto mx-auto">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        );

    return (
        <div className={styles["cart-container"]}>
            <h2 className={styles["cart-header"]}>Your Cart</h2>
            {cart.map((product: IProducts) => (
                <div key={product.id} className={styles["cart-item"]}>
                    <p className={styles["cart-item-name"]}>{product.name}</p>
                    <Image src={product.image} alt={product.name} />
                    <button
                        className={styles["cart-item-button"]}
                        onClick={() => handleRemoveFromCart(product.id.toString())}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className={styles["cart-total"]}>
                <p className="text-lg font-semibold">
                    Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                </p>
            </div>

            <div className={styles["cart-actions"]}>
                <div>
                    <button className={styles["clear-button"]} onClick={handleClearCart}>
                        <FaTrash />
                    </button>
                </div>
                <button
                    className={styles["checkout-button"]}
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
            <Link href="/home">
                <button className={styles["cart-actions"]}>Continue Shopping</button>
            </Link>
            <Toaster />
        </div>
    );
};

export default Cart;
