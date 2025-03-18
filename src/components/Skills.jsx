import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const frontendSkills = [
    { name: "HTML", percent: 70, icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", percent: 60, icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", percent: 55, icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "Git", percent: 40, icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "React.js", percent: 60, icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Bootstrap", percent: 70, icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
    { name: "TypeScript", percent:  30, icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Tailwind CSS", percent:  60, icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "PHP", percent:  40, icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  
];

const softSkills = [
    { name: "Problem-Solving", percent: 70 },
    { name: "Communication", percent: 75 },
    { name: "Teamwork", percent: 60 },
    { name: "Time Management", percent: 50 },
];

const Skills = () => {
    const ref = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div ref={ref} className="min-h-screen bg-[#0a0f1a] text-white flex flex-col items-center py-20">

            <h1 data-aos="fade-down" className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-10">
                My Skills
            </h1>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
                {/* Frontend Skills */}
                <motion.div
                    data-aos="fade-right"
                    className="glassmorphism p-8 rounded-lg shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-blue-400 mb-6">Frontend Skills</h2>
                    {frontendSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 mb-4"
                            whileHover={{ scale: 1.05 }}
                            data-aos="zoom-in"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                            <span className="font-semibold">{skill.name}</span>
                            <div className="w-full h-2 bg-gray-700 rounded-lg overflow-hidden relative">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${skill.percent}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                ></motion.div>
                            </div>
                            <span className="text-sm">{skill.percent}%</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    data-aos="fade-left"
                    className="glassmorphism p-8 rounded-lg shadow-lg flex flex-col items-center"
                >
                    <h2 className="text-3xl font-bold text-pink-400 mb-6">Soft Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                data-aos="flip-left"
                            >
                                <div className="relative w-32 h-32">
                                    <svg className="absolute inset-0 w-full h-full">
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="40%"
                                            stroke="gray"
                                            strokeWidth="6"
                                            fill="transparent"
                                        />
                                        <motion.circle
                                            cx="50%"
                                            cy="50%"
                                            r="40%"
                                            stroke="cyan"
                                            strokeWidth="6"
                                            fill="transparent"
                                            strokeDasharray="100"
                                            strokeDashoffset="100"
                                            animate={{ strokeDashoffset: 100 - skill.percent }}
                                            transition={{ duration: 1 }}
                                            strokeLinecap="round"
                                            viewport={{ once: false, amount: 0.3 }}
                                        />
                                    </svg>
                                </div>
                                <span className="mt-3 text-sm font-semibold text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;