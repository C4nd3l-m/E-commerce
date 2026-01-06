import { In } from "typeorm";
import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { CreateOrderDto } from "../dtos/createOrderDto";
import { Order } from "../entities/Order";
import { OrderRepository } from "../repositories/order.repository";
import { ProductRepository } from "../repositories/product.repository";
import { UserRepository } from "../repositories/user.repository";

export const createOrderService = async (
  createOrderDto: CreateOrderDto
): Promise<Order> => {
  return await AppDataSource.manager.transaction(async (entityManager: any) => {
    const orderRepository = entityManager.getRepository(Order);
    const userRepository = entityManager.getRepository(User);
    const productRepository = entityManager.getRepository(Product);

    const user = await userRepository.findOneBy({ id: createOrderDto.userId });
    if (!user) throw new Error("User not found");

    const products = await productRepository.findBy({
      id: In(createOrderDto.products)
    });

    if (products.length !== createOrderDto.products.length) {
      throw new Error("One or more products not found");
    }

    const newOrder = orderRepository.create();
    newOrder.status = "approved";
    newOrder.date = new Date();
    newOrder.user = user;
    newOrder.products = products;

    await orderRepository.save(newOrder);
    return newOrder;
  });
};
