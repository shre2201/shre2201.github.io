export default function Projects() {
    return (
        <div className="pt-24 min-h-screen px-4 container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-2xl font-semibold mb-2">Project Alpha</h2>
                    <p className="text-gray-400">A cutting-edge web application built with React and Node.js.</p>
                </div>
            </div>
        </div>
    );
}
