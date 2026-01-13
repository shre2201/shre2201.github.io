import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-20 px-8">
            {/* Background Image Placeholder - In real app, user should replace with actual image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop")', // Sunrise/Scenic placeholder
                }}
            >
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

                {/* Left Column (Menu clone for aesthetics or slogan) */}
                <div className="hidden md:block">
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">Menu</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Work</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Center / Socials */}
                <div className="hidden md:block">
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">Socials</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Right / Resources */}
                <div className="hidden md:block">
                    <h3 className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">Resources</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Weekstack App</li>
                        <li>Newsletter</li>
                    </ul>
                    <button className="mt-8 border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                        Send a message
                    </button>
                </div>
            </div>

            {/* Big Title */}
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 w-full text-center md:text-left mt-10 md:mt-20 pointer-events-none select-none"
            >
                SUKOYA
            </motion.h1>

            {/* Top Right Slogan */}
            <div className="absolute top-8 right-8 z-10 text-right hidden md:block">
                <p className="text-sm font-bold tracking-wider text-orange-200">WORK FAST. LIVE SLOW.</p>
            </div>
        </div>
    );
}
