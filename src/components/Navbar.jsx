import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#0b3681] fixed top-0 left-0 w-full text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold">MyLogo</a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#" className="hover:text-gray-200">Home</a></li>
                        <li><a href="#" className="hover:text-gray-200">About</a></li>
                        <li><a href="#" className="hover:text-gray-200">Skills</a></li>
                        <li><a href="#" className="hover:text-gray-200">Project</a></li>
                        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden mt-4 space-y-2 text-center">
                        <li><a href="#" className="block py-2 hover:bg-blue-700">Home</a></li>
                        <li><a href="#" className="block py-2 hover:bg-blue-700">About</a></li>
                        <li><a href="#" className="block py-2 hover:bg-blue-700">Services</a></li>
                        <li><a href="#" className="block py-2 hover:bg-blue-700">Contact</a></li>
                    </ul>
                )}
            </nav>
        </>
    )
}
export default Navbar;






// https://dev-muhammad.vercel.app/#contact
// Refrence: https://dev-muhammad.vercel.app/#contact