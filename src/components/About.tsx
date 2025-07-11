import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5 } from "react-icons/fa";

interface Skill {
    name: string;
    image: string;
}

const skills: Skill[] = [
    { name: "HTML", image: "html-1.svg" },
    { name: "CSS", image: "css-3.svg" },
    { name: "JavaScript", image: "javascript-1.svg" },
    { name: "Git", image: "git-icon.svg" },
    { name: "React.js", image: "react-2.svg" },
    { name: "Bootstrap", image: "bootstrap-5-1.svg" },
    { name: "TypeScript", image: "typescript.svg" },
    { name: "Tailwind CSS", image: "tailwindcss.svg" },
    { name: "PHP", image: "PHP-logo.svg" },
    { name: "Node.js", image: "nodejs-icon.svg" },
    { name: "Express.js", image: "expresspng.png" },
    { name: "MongoDB", image: "mongodb-icon-1.svg" },
    { name: "Postman", image: "postman.svg" },
    { name: "JWT Auth", image: "pic_logo.svg" },
];
// imports remain same

const About: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div
            className="about-container min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-[#0a0f1a] relative"
            data-aos="fade-up"
        >

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div>

            {/* Left Side - Text Content */}
            <div
                className="md:w-1/2 grid place-items-center z-10"
                data-aos="fade-right"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">
                    About
                    <TypeAnimation
                        sequence={[" Me", 1200, "", 500]}
                        wrapper="span"
                        speed={50}
                        className="text-yellow-400 font-bold"
                        repeat={Infinity}
                    />
                </h1>
                <p
                    className="text-center text-xl text-white mt-5 w-3/4"
                    data-aos="fade-left"
                >
                    Hi, I’m Tanveer, a MERN Stack Developer skilled in building full-stack
                    web apps using MongoDB, Express, React, and Node.js. I create
                    responsive UIs, build powerful APIs, and design scalable databases. I
                    enjoy solving problems and delivering smooth user experiences.
                </p>
            </div>

            {/* Right Side - Skills Grid */}
            <div
                className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0 relative z-10"
                data-aos="zoom-in"
            >
                {/* 🔥 Wrapper added to center last row */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl px-4 justify-items-center">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                onClick={() => setSelectedSkill(skill.name)}
                                className={`relative flex flex-col items-center justify-center p-6 h-28 w-28 rounded-2xl transition-all cursor-pointer ${selectedSkill === skill.name
                                    ? " bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 scale-105 border-2 border-transparent"
                                    : " bg-black border-2 border-gray-600 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/50"
                                    }`}
                                data-aos="flip-left"
                            >
                                <img src={skill.image} alt={skill.name} className="w-12 h-12" />

                                {/* Hover Text */}
                                <span
                                    className={`absolute bottom-0 mb-2 text-white text-sm font-semibold px-2 py-1 bg-black bg-opacity-75 rounded transition-opacity duration-300 ${hoveredSkill === skill.name
                                        ? "opacity-100 translate-y-2"
                                        : "opacity-0"
                                        }`}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Selected Skill Display */}
                {selectedSkill && (
                    <div
                        className="mt-6 text-lg font-semibold text-white px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg"
                        data-aos="fade-up"
                    >
                        Selected Skill: {selectedSkill}
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
