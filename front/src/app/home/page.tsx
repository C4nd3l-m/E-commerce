import Card from "@/components/Card/Card";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen py-20 px-6 flex flex-col items-center">
            <header className="max-w-4xl text-center space-y-6 mb-16 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    The NextByte Store.
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-medium">
                    The best way to buy the products you love.
                </p>
            </header>

            <div className="w-full max-w-7xl mx-auto">
                <Card />
            </div>
        </div>
    );
}

export default Home;
