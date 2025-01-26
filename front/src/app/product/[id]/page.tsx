import { getProductById } from "../../../api/getProducts";
import CardHome from "@/components/Card/CardHome";
import AddToCart from "@/components/AddToCart";

// Asegúrate de que params sea un Promise
export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;  // Resuelve el Promise

    try {
        const product = await getProductById(id);  // Llamamos directamente a la API
        return (
            <div>
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
    } catch (error) {
        console.log(error)
        return (
            
            <div>
                <p>Error: No se pudo obtener el producto</p>
            </div>
        );
    }
}
