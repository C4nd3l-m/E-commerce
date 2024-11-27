import { getProductById } from "../../../api/getProducts";
import CardHome from "@/components/Card/CardHome";
import AddToCart from "@/components/AddToCart";

const Detail = async ({ params }: { params: { id: string } }) => {
    try {
        const product = await getProductById(params.id);

        return (
            <div >

                <div>
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

                <div className="flex justify-center mt-4">
                    <AddToCart product={product} />
                </div>

            </div>
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return (
            <div >
                <p>Error</p>
            </div>
        );

    }
};

export default Detail;
