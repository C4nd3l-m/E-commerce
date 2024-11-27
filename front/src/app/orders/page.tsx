"use client"

import React, { useContext, useEffect, useState } from "react";
import { IOrder } from "@/Interfaces/IOrder";
import { UserContext } from "@/context/userContext";
import { fetchUserOrders } from "@/api/getOrders";

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchOrders = async () => {
            if(!user){
                return;
            }
                try {
                    const ordersData = await fetchUserOrders(user.token);
                    setOrders(ordersData);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                } finally {
                    setLoading(false);
                }
        };

        fetchOrders();
    }, [user]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Your Orders</h1>
            {orders.length ? (
                orders.map((order) => (
                    <div key={order.id}>
                        <p>Order ID: {order.id}</p>
                        <p>Status: {order.status}</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                        <h3>Products:</h3>
                        {order.products.map((product) => (
                            <p key={product.id}>{product.name}</p>
                        ))}
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
