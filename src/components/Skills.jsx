import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const frontendSkills = [
    { name: "HTML", percent: 80, icon: "html-1.svg" },
    { name: "CSS", percent: 70, icon: "css-3.svg" },
    { name: "JavaScript", percent: 70, icon: "javascript-1.svg" },
    { name: "Git", percent: 80, icon: "git-icon.svg" },
    { name: "React.js", percent: 70, icon: "react-2.svg" },
    { name: "Bootstrap", percent: 70, icon: "bootstrap-5-1.svg" },
    { name: "TypeScript", percent: 60, icon: "typescript.svg" },
    { name: "Tailwind CSS", percent: 70, icon: "tailwindcss.svg" },
    { name: "PHP", percent: 30, icon: "PHP-logo.svg" },
];

const backendSkills = [
    { name: "Node.js", percent: 65, icon: "nodejs-icon.svg" },
    { name: "Express.js", percent: 60, icon: "expresspng.png" },
    { name: "MongoDB", percent: 70, icon: "mongodb-icon-1.svg" },
    { name: "Postman", percent: 70, icon: "postman.svg" },
    { name: "JWT Auth", percent: 60, icon: "pic_logo.svg" },
];

const softSkills = [
    { name: "Problem-Solving", percent: 80 },
    { name: "Communication", percent: 80 },
    { name: "Teamwork", percent: 70 },
    { name: "Time Management", percent: 70 },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white py-16 px-4">
            <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                My Skills
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {/* Frontend */}
                <motion.div data-aos="fade-up" className="glassmorphism p-6 rounded-xl shadow-xl">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">Frontend Skills</h2>
                    {frontendSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 mb-4">
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                            <span className="w-24 text-sm">{skill.name}</span>
                            <div className="w-full h-2 bg-gray-700 rounded">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percent}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span className="text-xs">{skill.percent}%</span>
                        </div>
                    ))}
                </motion.div>

                {/* Backend */}
                <motion.div data-aos="fade-up" className="glassmorphism p-6 rounded-xl shadow-xl">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">Backend Skills</h2>
                    {backendSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 mb-4">
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                            <span className="w-24 text-sm">{skill.name}</span>
                            <div className="w-full h-2 bg-gray-700 rounded">
                                <motion.div
                                    className="h-full bg-green-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percent}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span className="text-xs">{skill.percent}%</span>
                        </div>
                    ))}
                </motion.div>

                {/* Soft Skills */}
                <motion.div data-aos="fade-up" className="glassmorphism p-6 rounded-xl shadow-xl text-center">
                    <h2 className="text-2xl font-bold text-pink-400 mb-6">Soft Skills</h2>
                    <div className="grid grid-cols-2 gap-6 justify-center">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative w-24 h-24">
                                    <svg className="absolute inset-0 w-full h-full">
                                        <circle cx="50%" cy="50%" r="40%" stroke="gray" strokeWidth="6" fill="transparent" />
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
                                        />
                                    </svg>
                                </div>
                                <span className="mt-3 text-xs font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
