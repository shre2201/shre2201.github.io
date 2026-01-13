import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import bgImage from '../assets/bg.png';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white relative">
            {/* Global Background */}
            <div className="fixed inset-0 z-0">
                <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
                {/* Overlay: Lighter on Home (Hero handles its own gradient), Darker on other pages */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHome ? 'bg-black/30' : 'bg-black/80'}`} />
                {!isHome && <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />}
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
                    <p>© {new Date().getFullYear()} Shreshth Agarwal. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
