/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext, useEffect, useState } from "react";
import { IOrder } from "@/Interfaces/IOrder";
import { UserContext } from "@/context/userContext";
import { fetchUserOrders } from "@/api/getOrders";
import styles from "./Orders.module.css";

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) {
                return;
            }
            try {
                const ordersData = await fetchUserOrders(user.token);
                setOrders(ordersData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);


    if (loading) return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Accessing Orders...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen py-16 px-6 animate-fade-in max-w-7xl mx-auto space-y-12">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                    Order History
                </h1>
                <p className="text-gray-400 font-medium text-lg">Track your premium tech acquisitions and status.</p>
            </div>

            {orders.length ? (
                <div className="space-y-8">
                    {orders.map((order) => (
                        <div key={order.id} className="glass-card rounded-[2.5rem] overflow-hidden group">
                            {/* Order Header */}
                            <div className="p-8 border-b border-white/5 bg-white/5 flex flex-wrap items-center justify-between gap-6 transition-colors group-hover:bg-white/[0.07]">
                                <div className="space-y-1">
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Order ID</span>
                                    <p className="font-mono font-bold text-gray-300">#{order.id.toString().substring(0, 8).toUpperCase()}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Placement Date</span>
                                    <p className="font-bold text-gray-300">{new Date(order.date).toLocaleDateString(undefined, { dateStyle: 'long' })}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block">Status</span>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest border border-green-500/20">
                                        {order.status}
                                    </span>
                                </div>
                            </div>

                            {/* Order Products */}
                            <div className="p-8 space-y-6">
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Acquired Products</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {order.products.map((product) => (
                                        <div key={product.id} className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/5 transition-all hover:border-brand-primary/20 hover:bg-white/10">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-2 overflow-hidden shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold truncate leading-tight">{product.name}</p>
                                                <p className="text-brand-primary font-black text-xs pt-1">${product.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="glass-card rounded-[3rem] p-16 text-center space-y-6 max-w-xl mx-auto">
                    <p className="text-2xl font-bold text-gray-400">No purchase history found.</p>
                    <Link href="/home" className="block">
                        <span className="text-brand-primary font-bold hover:underline underline-offset-4 cursor-pointer">
                            Start your tech journey here
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Orders;
