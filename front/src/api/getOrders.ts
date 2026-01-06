"use client"
import { IOrder } from "@/Interfaces/IOrder";

const APIURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const fetchUserOrders = async (token: string): Promise<IOrder[]> => {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });

        const orders = await response.json();
        return orders;

    } catch (error) {
        console.error("Error fetching user orders:", error);
        return [];
    }
};



export const confirmOrder = async (order: number[], token: string) => {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({ products: order }),

        });

        if (!response.ok) {
            throw new Error(`Failed to confirm order: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in confirmOrder:", error);
        throw error;
    }
};






