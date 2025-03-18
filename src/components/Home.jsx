import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/tanveer.pdf"; // Ensure your file is in the public folder
        link.download = "tanveer.pdf"; // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-container min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-[#0a0f1a] relative">
            
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div>

            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-center z-10" data-aos="fade-right">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">
                    Hi, I'm
                    <TypeAnimation
                        sequence={[" Tanveer", 1200, "", 500]}
                        wrapper="span"
                        speed={50}
                        className="text-yellow-400 font-bold"
                        repeat={Infinity}
                    />
                    <br />
                    A
                    <TypeAnimation
                        sequence={[" Front-End", 1200, "", 500]}
                        wrapper="span"
                        speed={50}
                        className="text-purple-400 font-bold"
                        repeat={Infinity}
                    />
                    Web Developer
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Elevating Web Experiences with Innovation & Aesthetics
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center items-center">
                    <button
                        onClick={handleDownload}
                        className="relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110"
                        data-aos="zoom-in"
                    >
                        Download Resume
                    </button>
                    <button
                        className="relative px-6 py-3 font-semibold text-white border-2 border-teal-400 rounded-lg shadow-md transition-all duration-300 hover:bg-teal-400 hover:text-black"
                        data-aos="zoom-in"
                    >
                        <a href="#contact">Contact Me</a>
                    </button>
                </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10" data-aos="fade-left">
                <div className="mb-5 relative w-80 h-80 rounded-full overflow-hidden shadow-2xl shadow-cyan-500 border-4 border-transparent hover:border-pink-500 transition-all duration-300">
                    <img
                        src="https://avatars.githubusercontent.com/u/197722550?v=4"
                        alt="Profile"
                        className="w-full h-full "
                    />
                    {/* Glowing Border Animation */}
                    <div className="absolute inset-0 w-full h-full border-4 border-transparent rounded-full animate-pulse"></div>
                </div>
            </div>

        </div>
    );
}

export default Home;
