import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// User requested: Home, experinece, About, projects and contact.
// Image has: Home, Services, Work, About, Contact.
// I will use User's list: Home, Experience, About, Projects, Contact.

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                {/* Logo removed */}
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`relative hover:text-white transition-colors ${location.pathname === link.path ? 'text-white' : 'text-gray-400'}`}
                    >
                        {link.name}
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="underline"
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                            />
                        )}
                    </Link>
                ))}
            </div>

            <div className="hidden md:block">
                <Link to="/contact" className="border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
                    Send a message
                </Link>
            </div>
        </nav>
    );
}
