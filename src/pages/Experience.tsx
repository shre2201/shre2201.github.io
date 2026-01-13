export default function Experience() {
    return (
        <div className="pt-24 min-h-screen px-4 container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Experience</h1>

            <div className="border-l-2 border-white/10 pl-8 ml-4 space-y-12">

                <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-black" />
                    <h3 className="text-2xl font-bold">Senior Full Stack Developer</h3>
                    <p className="text-primary font-mono mb-2">Tech Corp / 2023 - Present</p>
                    <p className="text-gray-400 text-lg">Leading frontend initiatives, refactoring legacy codebases, and mentoring junior devs to survive the JavaScript fatigue.</p>
                </div>

                <div className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-600 border-4 border-black" />
                    <h3 className="text-2xl font-bold">Web Developer</h3>
                    <p className="text-primary font-mono mb-2">Creative Agency / 2021 - 2023</p>
                    <p className="text-gray-400 text-lg">Implemented pixel-perfect designs and optimized load times until the lighthouse score turned green.</p>
                </div>

            </div>
        </div>
    );
}
