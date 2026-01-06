/* eslint-disable @next/next/no-img-element */
import { IProducts } from "@/Interfaces/IProducts";

const CardHome: React.FC<IProducts> = ({ id, name, description, price, stock, image }) => {
    return (
        <div key={id} className="max-w-5xl mx-auto w-full glass-card rounded-[3rem] p-8 md:p-12 animate-fade-in my-12">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Image Section */}
                <div className="md:w-1/2 flex items-center justify-center bg-white/5 rounded-[2rem] p-8 overflow-hidden">
                    <img
                        src={image}
                        alt={`${name} image`}
                        className="max-h-[400px] w-auto object-contain transition-transform duration-700 hover:scale-105"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 space-y-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                            Premium Technology
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
                            {name}
                        </h1>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        <div className="space-y-1">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Price</span>
                            <div className="text-3xl font-black text-brand-primary tracking-tighter">
                                ${price}
                            </div>
                        </div>
                        <div className="space-y-1 text-right">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Availability</span>
                            <div className="text-xl font-bold text-white tracking-tight">
                                {stock > 0 ? `${stock} in Stock` : "Out of Stock"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHome;
