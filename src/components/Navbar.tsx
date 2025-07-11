import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  // 🔁 ScrollSpy register
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0f1a] bg-opacity-90 backdrop-blur-lg shadow-lg px-6 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="T & S Logo.png"
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
                spy={true} // 👈 enables active detection
                smooth={true}
                duration={600}
                offset={-70}
                activeClass="text-cyan-400"
                className={`cursor-pointer transition-all duration-300 ${
                  activeTab === item.id ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
                onSetActive={() => setActiveTab(item.id)} // 👈 set on scroll
              >
                {item.name}
              </Link>

              {/* Underline */}
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
          className="fixed top-0 left-0 h-screen w-64 bg-[#121826] shadow-xl py-8 px-6 rounded-r-lg z-50"
        >
          <ul className="text-white text-xl space-y-6">
            {menuItems.map((item) => (
              <li key={item.id} className="relative cursor-pointer">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  activeClass="text-cyan-400"
                  className={`block transition-all duration-300 ${
                    activeTab === item.id ? "text-cyan-400" : "hover:text-cyan-400"
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  onSetActive={() => setActiveTab(item.id)}
                >
                  {item.name}
                </Link>

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
};

export default Navbar;
