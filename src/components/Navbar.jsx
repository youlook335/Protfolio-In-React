import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll"; // Import React Scroll

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0f1a] bg-opacity-90 backdrop-blur-lg shadow-lg px-6 py-4 z-50">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center space-x-2">
                    <img
                        src="https://miti-1st-project.netlify.app/T%20&%20S%20Logo.png"
                        alt="Logo"
                        className="w-28 h-auto transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
                    />
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-3xl md:hidden"
                >
                    <FaBars />
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white text-lg font-semibold">
                    {menuItems.map((item) => (
                        <li key={item.id} className="relative group cursor-pointer">
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={600}
                                offset={-70}
                                onClick={() => setActiveTab(item.id)}
                                onSetActive={() => setActiveTab(item.id)} // 👈 Scroll کے دوران بھی Active ہوگا
                                className={`cursor-pointer transition-all duration-300 ${activeTab === item.id ? "text-cyan-400" : "hover:text-cyan-400"
                                    }`}
                            >
                                {item.name}
                            </Link>

                            {/* Animated Underline */}
                            {activeTab === item.id && (
                                <motion.div
                                    className="absolute left-0 bottom-0 h-[2px] bg-cyan-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Animated Menu */}
            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="fixed top-0 left-0 h-screen w-64 bg-[#121826] shadow-xl py-8 px-6 rounded-r-lg"
                >
                    <ul className="text-white text-xl space-y-6">
                        {menuItems.map((item) => (
                            <li key={item.id} className="relative cursor-pointer">
                                <Link
                                    to={item.id}
                                    smooth={true}
                                    duration={600}
                                    offset={-70}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsOpen(false); // Close menu on selection
                                    }}
                                    onSetActive={() => setActiveTab(item.id)} // 👈 Scroll کے دوران بھی Active ہوگا
                                    className={`block transition-all duration-300 ${activeTab === item.id ? "text-cyan-400" : "hover:text-cyan-400"
                                        }`}
                                >
                                    {item.name}
                                </Link>

                                {/* Animated Underline */}
                                {activeTab === item.id && (
                                    <motion.div
                                        className="absolute left-0 bottom-0 h-[2px] bg-cyan-400"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}

export default Navbar;

