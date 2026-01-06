import Link from "next/link";
import { getProducts } from "../../api/getProducts";
/* eslint-disable @next/next/no-img-element */
import AddToCart from "../AddToCart";

const Card: React.FC = async () => {
    const products = await getProducts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-6 py-12">
            {products.map((product) => {
                return (
                    <div key={product.id} className="group relative glass-card rounded-[2rem] p-6 flex flex-col transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand-primary/10">
                        {/* Image Container */}
                        <div className="relative h-64 w-full mb-6 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
                                <span className="text-brand-primary font-black text-lg">${product.price}</span>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2">Premium performance and stunning design in every detail.</p>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex items-center gap-3">
                            <Link href={`/product/${product.id}`} className="flex-1">
                                <button
                                    name="details"
                                    type="button"
                                    className="w-full py-3 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 transition-colors"
                                >
                                    Details
                                </button>
                            </Link>
                            <AddToCart product={product} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
