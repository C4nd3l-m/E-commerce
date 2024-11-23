/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/Interfaces/IProducts";

const CardHome: React.FC<IProducts> = ({ id, name, description, price, stock, image, isOnSale }) => {
    return (
        <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt="Product image" />
            <p>Description: {description}</p>
            <h4>Price: ${price}</h4>
            <h4>Stock: {stock}</h4>
            {isOnSale && <p>Sale!</p>}
        </div>
    );
};

export default CardHome;
