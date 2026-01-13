import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-20 px-8">
            {/* Background removed, now in Layout.tsx */}

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pb-0 pt-20 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
                        SHRESHTHA
                    </h1>
                    <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-bold tracking-tighter text-gray-400/80 bg-clip-text mb-8">
                        AGARWAL
                    </h1>

                    <div className="max-w-2xl bg-black/20 backdrop-blur-md p-6 rounded-xl border-l-4 border-primary">
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                            "I write code so I don't have to talk to people, but somehow I ended up building things that connect them.
                            Part-time bug hunter, full-time coffee converter.
                            Let's build something chaotic yet beautiful."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Top Right Slogan */}
            {/* <div className="absolute top-8 right-8 z-10 text-right hidden md:block">
                <p className="text-sm font-bold tracking-wider text-orange-200">WORK FAST. LIVE SLOW.</p>
            </div> */}
        </div>
    );
}
