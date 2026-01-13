import Hero from '../components/Hero';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold mb-8">Selected Works</h2>
                {/* Preview of projects could go here */}
            </div>
        </div>
    );
}
