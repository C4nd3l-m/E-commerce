import Link from "next/link";
import CardLanding from "@/components/CardLanding/CardLanding";
import logo from "@/components/NavBar/NextByte.png"
import Image from "next/image";
const Landing: React.FC = () => {
    const categories = [
        { id: 1, name: "Mac", image: "products/store-card-13-mac-nav-202410.png", desc: "Mind-blowing power. Built for work and play." },
        { id: 2, name: "iPhone", image: "products/store-card-13-iphone-nav-202409_GEO_US.png", desc: "Designed to be loved. High-performance, low-effort." },
        { id: 3, name: "iPad", image: "products/store-card-13-ipad-nav-202405-removebg-preview.png", desc: "Touch, draw, and type on one magical device." },
        { id: 4, name: "Watch", image: "products/store-card-13-watch-nav-202409-removebg-preview.png", desc: "The ultimate device for a healthy life." },
        { id: 5, name: "AirPods", image: "products/store-card-13-airpods-nav-202409-removebg-preview.png", desc: "Wireless. Effortless. Magical audio experience." },
        { id: 6, name: "HomePod", image: "products/store-card-13-homepod-nav-202301.png", desc: "The soul of your smart home. Immersive sound." }
    ];

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover opacity-40 scale-105 blur-sm"
                    >
                        <source src="videos/large_2x.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative z-20 max-w-4xl space-y-8 animate-slide-up">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-xs font-bold text-brand-primary uppercase tracking-widest">
                            Next-Gen Tech is Here
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Future Forward. <br />
                        <span className="text-brand-primary">Start Yours Today.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Experience the ultimate fusion of design and performance.
                        Join the next generation of digital mastery.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Link href="/home" className="pro-button text-lg px-10 py-4">
                            Explore Store
                        </Link>
                        <Link href="/register" className="glass-card px-10 py-4 rounded-full font-medium transition-all hover:bg-white/10 active:scale-95">
                            Join Community
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Grid Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
                <div className="space-y-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Product Showcase</h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                        Precision engineering meets breathtaking design. Explore the ecosystem that redefines everything.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <Link
                            key={cat.id}
                            href="/home"
                            className="group block"
                        >
                            <div className="relative glass-card rounded-3xl p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-brand-primary/50 overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

                                <div className="relative z-10 space-y-6">
                                    <div className="h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                        <CardLanding
                                            imageSrc={cat.image}
                                            altText={cat.name}
                                            imageWidth="w-full"
                                            imageHeight="h-auto"
                                            customClass="max-h-full transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">{cat.name}</h3>
                                        <p className="text-gray-400 text-sm">{cat.desc}</p>
                                    </div>
                                    <div className="pt-4 flex items-center text-brand-primary font-bold text-sm tracking-widest uppercase">
                                        Discover more
                                        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Section (Large Video) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-primary/10 group">
                    <CardLanding
                        isVideo
                        videoSrc="videos/large_2x (1).mp4"
                        imageWidth="w-full"
                        imageHeight="h-auto"
                        imageSrc=""
                        altText="AI Intelligence"
                        customClass="w-full scale-105 transition-transform duration-[2s] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12 space-y-4">
                        <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm">New Era</span>
                        <h2 className="text-4xl md:text-6xl font-black">Apple Intelligence</h2>
                        <p className="text-gray-300 text-lg max-w-xl">
                            The future is here. More personal, more powerful, more intelligent than ever before.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing