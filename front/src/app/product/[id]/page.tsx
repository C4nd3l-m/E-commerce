import styles from "@/app/product/[id]/Detail.module.css";
import { getProductById } from "../../../api/getProducts";
import CardHome from "@/components/Card/CardHome";
import AddToCart from "@/components/AddToCart";

const Detail = async ({ params }: { params: { id: string } }) => {
    try {
        const product = await getProductById(params.id);

        return (
            <div className={styles["detail-container"]}>
                <div className={styles["detail-header"]}>
                    <h1>Product details</h1>
                </div>

                <div className={styles["card-container"]}>
                    <CardHome
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        image={product.image}
                        isOnSale={product.isOnSale}
                        price={product.price}
                        stock={product.stock}
                        description={product.description}
                        categoryId={product.categoryId}
                    />
                </div>

                <div className={styles["add-to-cart"]}>
                    <AddToCart product={product} />
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className={styles["detail-container"]}>
                <p>Error al cargar el producto</p>
            </div>
        );
    }
};

export default Detail;
