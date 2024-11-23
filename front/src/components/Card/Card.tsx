import Link from "next/link";
import { getProducts } from "../../api/getProducts";
/* eslint-disable @next/next/no-img-element */
import AddToCart from "../AddToCart";

const Card: React.FC = async () => {
    const products = await getProducts();

    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="Product image" />
                        <h4>Price: ${product.price}</h4>
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
