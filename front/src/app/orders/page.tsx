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


    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1 className={styles["order-header"]}>Your Orders</h1>
            {orders.length ? (
                orders.map((order) => (
                    <div key={order.id} className={styles["order-container"]}>
                        <div className={styles["order-details-container"]}>
                            <p className={styles["order-info"]}>
                                <span>Order ID:</span> {order.id}
                            </p>
                            <p className={styles["order-info"]}>
                                <span>Status:</span> {order.status}
                            </p>
                            <p className={styles["order-info"]}>
                                <span>Date:</span> {new Date(order.date).toLocaleDateString()}
                            </p>
                            <h3 className={styles["order-info"]}>Products:</h3>
                            <div className={styles["products-container"]}>
                                {order.products.map((product) => (
                                    <div key={product.id} className={styles["product-item"]}>
                                        <div className={styles["product-image-container"]}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={styles["product-image"]}
                                            />
                                        </div>
                                        <div className={styles["product-details"]}>
                                            <p className={styles["product-name"]}>{product.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={styles["status-message"]}>
                    No orders found.
                </div>
            )}
        </div>
    );
};

export default Orders;
