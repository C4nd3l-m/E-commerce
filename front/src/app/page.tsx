"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardLanding from "@/components/CardLanding/CardLanding";
import logo from "@/components/NavBar/NextByte.png";

const Landing: React.FC = () => {
    const products = [
        { id: 1, name: "Mac", image: "/products/store-card-13-mac-nav-202410.png" },
        { id: 2, name: "iPhone", image: "/products/store-card-13-iphone-nav-202409_GEO_US.png" },
        { id: 3, name: "iPad", image: "/products/store-card-13-ipad-nav-202405-removebg-preview.png" },
        { id: 4, name: "Apple Watch", image: "/products/store-card-13-watch-nav-202409-removebg-preview.png" },
        { id: 5, name: "AirPods", image: "/products/store-card-13-airpods-nav-202409-removebg-preview.png" },
        { id: 6, name: "HomePod", image: "/products/store-card-13-homepod-nav-202301.png" },
    ];

    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    };

    const cards = [
        {
            isVideo: true,
            videoSrc: "videos/large_2x.mp4",
            imageSrc: "",
            altText: "Header Video"
        },
        {
            isVideo: true,
            videoSrc: "videos/large_2x (1).mp4",
            imageSrc: "",
            altText: "Second Video"
        },
        {
            isVideo: false,
            imageSrc: "https://www.apple.com/v/iphone-16/c/images/overview/media-card/highlights_apple_intelligence_endframe__cb03eqws1r7m_large_2x.jpg",
            altText: "iPhone",
            description: "The latest iPhone with advanced features and exceptional performance."
        },
        {
            isVideo: false,
            imageSrc: "https://www.apple.com/v/airpods-4/b/images/overview/media-card/media_lifestyle__cyk4qt05xic2_small_2x.jpg",
            altText: "AirPods",
            description: "Experience the magic of effortless, all-day audio with AirPods."
        }
    ];

    return (
        <div className="bg-[#121212] text-white min-h-screen flex flex-col items-center">
            <div className="w-full flex flex-col items-center space-y-4 p-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        title="logo"
                        src={logo}
                        alt="NextByte Logo"
                        className="rounded-md"
                        width={120}
                        height={120}
                    />
                </motion.div>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold"
                >
                    Welcome to NextByte
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-400 text-center max-w-lg"
                >
                    Discover our latest products and experiences through interactive content.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center bg-[#1f1f1f] rounded-xl shadow-lg p-4"
                    >
                        <Link href="/home">
                            <CardLanding
                                imageSrc={product.image}
                                altText={product.name}
                                imageWidth="w-full"
                                imageHeight="h-auto"
                                customClass="rounded-xl"
                            />
                        </Link>
                        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                        <p className="text-gray-400 text-center mt-2">
                            Discover the {product.name} and explore its advanced features.
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 p-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        className="w-full md:w-1/2 lg:w-1/3 bg-[#1f1f1f] rounded-xl shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={transition}
                    >
                        <CardLanding
                            isVideo={card.isVideo}
                            videoSrc={card.videoSrc}
                            imageSrc={card.imageSrc}
                            altText={card.altText}
                            imageWidth="w-full"
                            imageHeight="h-auto"
                            customClass="rounded-xl"
                        />
                        {card.isVideo ? null : (
                            <>
                                <h2 className="text-xl font-semibold mt-4">{card.altText}</h2>
                                <p className="text-gray-400 text-center mt-2">{card.description}</p>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Landing;
