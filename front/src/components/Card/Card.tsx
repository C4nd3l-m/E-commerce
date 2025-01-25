
import Link from "next/link";
import { getProducts } from "../../api/getProducts";
/* eslint-disable @next/next/no-img-element */
import AddToCart from "../AddToCart";
import styles from "@/components/Card/Card.module.css";

const Card: React.FC = async () => {
    const products = await getProducts();

    return (
        <div className={styles['cards-container']}>
            {products.map((product) => {
                return (
                    <div key={product.id} className={styles['card-item']}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt="Product image" />
                        <p>Price: ${product.price}</p>
                        <Link href={`/product/${product.id}`}>
                            <button name="details" type="button">Details</button>
                        </Link>
                        <AddToCart product={product} />
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
