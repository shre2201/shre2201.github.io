import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
                <p>© {new Date().getFullYear()} Shreshth. All rights reserved.</p>
            </footer>
        </div>
    );
}
