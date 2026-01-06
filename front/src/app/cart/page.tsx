"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import { IProducts } from "@/Interfaces/IProducts";
import { useRouter } from "next/navigation";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Cart: React.FC = () => {
    const router = useRouter();
    const { cart, removeFromCart, clearCart, confirmUserOrder, user } = useContext(UserContext);

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    const handleCheckout = async () => {
        if (!user?.token) {
            toast.error("Please log in to proceed with the checkout!");
            return;
        }
        const productIds: number[] = cart.map((product) => product.id);
        await confirmUserOrder(productIds, user.token);

        toast.success("Your order has been placed successfully!");
        router.push("/orders");
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
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 animate-fade-in">
                <div className="glass-card rounded-[3rem] p-12 md:p-16 text-center space-y-8 max-w-xl w-full">
                    <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <FaShoppingCart className="text-brand-primary text-4xl" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black uppercase tracking-tight">Your cart is empty</h1>
                        <p className="text-gray-400 font-medium">Looks like you haven't added any premium tech to your collection yet.</p>
                    </div>
                    <Link href="/home" className="block">
                        <button className="pro-button w-full py-4 text-lg font-bold shadow-xl shadow-brand-primary/20">
                            Explore Store
                        </button>
                    </Link>
                </div>
            </div>
        );

    return (
        <div className="min-h-screen py-16 px-6 animate-fade-in max-w-7xl mx-auto">
            <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                            Shopping Cart
                        </h1>
                        <p className="text-gray-400 font-medium text-lg">Review and finalize your next-generation setup.</p>
                    </div>

                    <button
                        onClick={handleClearCart}
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-400 transition-colors uppercase tracking-widest px-4 py-2 rounded-xl border border-white/5 hover:border-red-500/20 active:scale-95"
                    >
                        <FaTrash size={14} /> Clear Cart
                    </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
                    {/* Cart Items List */}
                    <div className="xl:col-span-2 space-y-6">
                        {cart.map((product: IProducts) => (
                            <div key={product.id} className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-8 group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5">
                                <div className="w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-4 overflow-hidden shrink-0">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 space-y-1 text-center sm:text-left">
                                    <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
                                    <p className="text-brand-primary font-black text-lg">${product.price}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(product.id.toString())}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-500 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all active:scale-90"
                                    title="Remove item"
                                >
                                    <FaTrash size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="glass-card rounded-[2.5rem] p-8 space-y-8 sticky top-32">
                        <h3 className="text-2xl font-bold tracking-tight border-b border-white/5 pb-6">Order Summary</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-400 font-medium">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400 font-medium">
                                <span>Shipping</span>
                                <span className="text-green-500 uppercase text-xs font-bold tracking-widest pt-1">Free Shipping</span>
                            </div>
                            <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                <span className="text-xl font-bold">Total</span>
                                <span className="text-3xl font-black text-brand-primary tracking-tighter">${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full pro-button py-5 text-lg font-bold shadow-2xl shadow-brand-primary/20 transition-transform active:scale-95"
                        >
                            Complete Checkout
                        </button>

                        <Link href="/home" className="block text-center">
                            <span className="text-sm font-bold text-gray-500 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                                ← Continue Shopping
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Cart;
