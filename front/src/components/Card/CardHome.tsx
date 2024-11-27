/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/Interfaces/IProducts";
import styles from "@/app/product/[id]/Detail.module.css"
const CardHome: React.FC<IProducts> = ({ id, name, description, price, stock, image, isOnSale }) => {
    return (
        <div key={id}>
            <div className={styles["detail-header"]}>
                <h1>{name}</h1>

            </div>
            <img src={image} alt="Product image"  />
            <p>Description: {description}</p>
            <h4>Price: ${price}</h4>
            <h4>Stock: {stock}</h4>
            {isOnSale && <p>Sale!</p>}
        </div>
    );
};

export default CardHome;
