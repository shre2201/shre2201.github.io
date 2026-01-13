export default function Projects() {
    return (
        <div className="pt-24 min-h-screen px-4 container mx-auto">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Project Alpha</h2>
                    <p className="text-gray-400 mb-4">A cutting-edge web application built with React and Node.js to solve problems you didn't know you had.</p>
                    <div className="flex gap-2 text-xs font-mono text-gray-500">
                        <span className="bg-white/10 px-2 py-1 rounded">React</span>
                        <span className="bg-white/10 px-2 py-1 rounded">Node</span>
                    </div>
                </div>

                <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Neon Dashboard</h2>
                    <p className="text-gray-400 mb-4">An analytics dashboard so bright it requires sunglasses. Real-time data visualization.</p>
                    <div className="flex gap-2 text-xs font-mono text-gray-500">
                        <span className="bg-white/10 px-2 py-1 rounded">D3.js</span>
                        <span className="bg-white/10 px-2 py-1 rounded">Firebase</span>
                    </div>
                </div>

                <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">E-Commerce One</h2>
                    <p className="text-gray-400 mb-4">Full stack shopping experience. Because the world definitely needed another one.</p>
                    <div className="flex gap-2 text-xs font-mono text-gray-500">
                        <span className="bg-white/10 px-2 py-1 rounded">Next.js</span>
                        <span className="bg-white/10 px-2 py-1 rounded">Stripe</span>
                    </div>
                </div>

                <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Portfolio v1</h2>
                    <p className="text-gray-400 mb-4">The first iteration of this site. It was ugly, but it had a great personality.</p>
                    <div className="flex gap-2 text-xs font-mono text-gray-500">
                        <span className="bg-white/10 px-2 py-1 rounded">HTML</span>
                        <span className="bg-white/10 px-2 py-1 rounded">CSS</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
