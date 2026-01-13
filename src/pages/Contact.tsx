export default function Contact() {
    return (
        <div className="pt-32 min-h-screen px-4 container mx-auto max-w-4xl text-center">
            <h1 className="text-6xl font-bold mb-8">Let's Connect</h1>
            <p className="text-xl text-gray-400 mb-12">
                Whether you have a question, a job offer, or just want to discuss the best pizza toppings.
            </p>

            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 inline-block backdrop-blur-sm">
                <div className="flex flex-col gap-6 items-center">

                    {/* Email */}
                    <a href="mailto:shreshth@example.com" className="text-2xl md:text-4xl font-bold text-primary hover:text-white transition-colors">
                        shreshth@example.com
                    </a>

                    <div className="flex gap-8 mt-8">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all font-semibold"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-gray-800 transition-all font-semibold"
                        >
                            GitHub
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
