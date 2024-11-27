/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/Interfaces/IProducts";
import styles from "@/components/Card/detailCard.module.css";



const CardHome: React.FC<IProducts> = ({ id, name, description, price, stock, image }) => {
    return (
        <div key={id} className={styles["card-container"]}>
            <div className={styles["image-container"]}>
                <img src={image} alt={`${name} image`} className={styles["product-image"]} />
            </div>

            <div className={styles["details-container"]}>
                <h1 className={styles["detail-header"]}>{name}</h1>
                <p className={styles["description"]}>Description: {description}</p>
                <h4 className={styles["price"]}>Price: ${price}</h4>
                <h4 className={styles["stock"]}>Stock: {stock}</h4>
            </div>
        </div>
    );
};

export default CardHome;
