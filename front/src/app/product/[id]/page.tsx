import { IProductDetailParam} from "@/Interfaces/IProducts";
import { getProductById } from "../../../api/getProducts";
import CardHome from "@/components/Card/CardHome";
import Link from "next/link";
import AddToCart from "@/components/AddToCart";


const Detail: React.FC<IProductDetailParam> = async ({ params }) => {
    
    const productId = await getProductById(params.id)

    return (
        <div>
            <CardHome
                key={productId.id}
                id={productId.id}
                name={productId.name}
                image={productId.image}
                isOnSale={productId.isOnSale}
                price={productId.price}
                stock={productId.stock}
                description={productId.description}
                categoryId={productId.categoryId}
            />

            <Link href={"/product/id"}></Link>
            <AddToCart product={productId} />
        </div>
    );
}

export default Detail;