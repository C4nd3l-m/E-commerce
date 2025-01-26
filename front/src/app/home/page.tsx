import Card from "@/components/Card/Card";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-6 sm:mb-8">
                Hello, Apple intelligence.
            </h1>
            <div className="w-full max-w-3xl">
                <Card />
            </div>
        </div>
    );
}

export default Home;
