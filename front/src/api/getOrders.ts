import { IOrder } from "@/Interfaces/IOrder";

export const fetchUserOrders = async (): Promise<IOrder[]> => {
    console.warn("Using mock data. No orders available.");
    return [];
  };
  
  export const confirmOrder = async (order: number[]): Promise<void> => {
    console.log("Order confirmed:", order);
  };
  
 