import Link from "next/link";
import CardLanding from "@/components/CardLanding/CardLanding";

const Landing: React.FC = () => {

    const products = [
        {
            id: 1,
            name: "Mac",
            image: "products/store-card-13-mac-nav-202410.png",
        },
        {
            id: 2,
            name: "iPhone",
            image: "products/store-card-13-iphone-nav-202409_GEO_US.png",
        },
        {
            id: 3,
            name: "iPad",
            image: "products/store-card-13-ipad-nav-202405-removebg-preview.png",
        },
        {
            id: 4,
            name: "Apple Watch",
            image: "products/store-card-13-watch-nav-202409-removebg-preview.png",
        },
        {
            id: 5,
            name: "AirPods",
            image: "products/store-card-13-airpods-nav-202409-removebg-preview.png",
        },
        {
            id: 6,
            name: "HomePod",
            image: "products/store-card-13-homepod-nav-202301.png",
        }
    ];

    return (
        <>
            
            <div className="w-full flex flex-col items-center space-y-4 p-4">
                <h2 className="text-lg text-white-700 mt-2">Welcome to NextByte</h2>
                <p className="text-center text-gray-400">
                    Discover our latest products and experiences through interactive content.
                </p>
                <CardLanding
                    isVideo
                    videoSrc="videos/large_2x (1).mp4"
                    imageWidth="w-full"
                    imageHeight="h-auto"
                    imageSrc=""
                    altText="Header Video"
                    customClass="rounded-xl shadow-xl"
                />
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                
                <div className="flex flex-col items-center space-y-4">
                    <CardLanding
                        imageSrc="https://www.apple.com/v/iphone-16/c/images/overview/media-card/highlights_apple_intelligence_endframe__cb03eqws1r7m_large_2x.jpg"
                        altText="iPhone"
                        imageWidth="w-full"
                        imageHeight="h-auto"
                        customClass="rounded-xl shadow-md"
                    />
                    <h2 className="text-lg text-white-700 mt-2">iPhone</h2>
                    <p className="text-center text-gray-400">
                        The latest iPhone with advanced features and exceptional performance.
                    </p>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                    <CardLanding
                        imageSrc="https://www.apple.com/v/airpods-4/b/images/overview/media-card/media_lifestyle__cyk4qt05xic2_small_2x.jpg"
                        altText="AirPods"
                        imageWidth="w-full"
                        imageHeight="h-auto"
                        customClass="rounded-xl shadow-md"
                    />
                    <h2 className="text-lg text-white-700 mt-2">AirPods</h2>
                    <p className="text-center text-gray-400">
                        Experience the magic of effortless, all-day audio with AirPods.
                    </p>
                </div>

                
                <div className="flex flex-col items-center space-y-4 col-span-2">
                    <CardLanding
                        isVideo
                        videoSrc="videos/large_2x.mp4"
                        imageWidth="w-full"
                        imageHeight="h-auto"
                        imageSrc=""
                        altText="Product Showcase Video"
                        customClass="rounded-xl shadow-xl"
                    />
                    <h2 className="text-lg text-white-700 mt-2">Product Showcase</h2>
                    <p className="text-center text-gray-400">
                        Get a closer look at our innovative products in this showcase.
                    </p>
                </div>

                
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-center space-y-4">
                        <Link href="/home">
                            <CardLanding
                                imageSrc={product.image}
                                altText={product.name}
                                imageWidth="w-full"
                                imageHeight="h-auto"
                                customClass="rounded-xl shadow-md"
                            />
                        </Link>
                        <h2 className="text-lg text-white-700 mt-2">{product.name}</h2>
                        <p className="text-center text-gray-400">
                            Discover the {product.name} and explore its advanced features.
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Landing;
