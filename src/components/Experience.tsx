import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
    name: string;
    details: string;
}

interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    description: string;
    projects: Project[];
    icon: string;
}

const Experience: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);
    const experiences: ExperienceItem[] = [
        {
            company: "Skytech Internship",
            role: "Frontend Developer Intern",
            duration: "Dec 2024 - Feb 2025",
            description:
                "Built 3 real-world projects while interning at Skytech using React, Tailwind CSS, and Bootstrap. Gained experience in UI design and component-based development.",
            projects: [
                {
                    name: "SkyMart",
                    details:
                        "Developed a modern e-commerce UI with cart, filters, and search functionality.",
                },
                {
                    name: "Apartment Management System",
                    details:
                        "Created a portal for managing tenant and rental information.",
                },
                {
                    name: "Skytech Company Website",
                    details:
                        "Designed and built a responsive website for showcasing the company.",
                },
            ],
            icon: "Skytech."
        },
        {
            company: "Bootpress Project",
            role: "Frontend Developer",
            duration: "Feb 2025 - Apr 2025",
            description:
                "Led the frontend of an AI-powered platform using React, Firebase Auth, and Tailwind. Integrated AI interaction features and responsive layouts.",
            projects: [
                {
                    name: "Bootpress AI Platform",
                    details:
                        "Built an AI-integrated interface where users can interact with generated content in real-time.",
                },
            ],
            icon: "Bootpress."
        },
        {
            company: "Personal Projects",
            role: "Full-Stack Developer",
            duration: "May 2025 - July 2025",
            description:
                "Worked independently on full-stack and frontend projects to apply core development skills, solve real-world problems, and enhance UI/UX.",
            projects: [
                {
                    name: "LMS - Learning Management System",
                    details: "Built a full-stack LMS using React, Node.js, MongoDB, and JWT Auth, including roles, courses, and secure routing.",
                },
                {
                    name: "Blog App (Frontend)",
                    details: "A React-based blog UI that fetches data from a public API, featuring dynamic routing, search, and filtering.",
                },
            ],
            icon: "Projects."
        }
    ];


    return (
        <>
            <div className="min-h-screen text-white bg-[#0a0f1a] p-12 flex flex-col items-center">
                <h1 className="mb-10 mt-10 p-2 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                    My Experience
                </h1>

                {/* Grid for first two experiences */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    {experiences.slice(0, 2).map((exp, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-blue-400"
                            data-aos="fade-up"
                        >
                            <h2 className="text-3xl font-bold text-blue-400">{exp.company}</h2>
                            <h3 className="text-xl text-blue-300 font-semibold">{exp.role}</h3>
                            <p className="text-sm text-gray-400 italic">{exp.duration}</p>
                            <p className="mt-4 text-md text-gray-300 leading-relaxed">{exp.description}</p>
                            <ul className="mt-4 space-y-2">
                                {exp.projects.map((project, projIndex) => (
                                    <li
                                        key={projIndex}
                                        className="bg-gray-700 p-4 rounded-xl shadow-md hover:bg-gray-600 transition duration-300"
                                        data-aos="fade-right"
                                    >
                                        <span className="font-bold text-blue-300">{project.name}:</span> {project.details}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center mt-6 space-x-3" data-aos="zoom-in">
                                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                                    {exp.icon.charAt(0)}
                                </div>
                                <span className="text-lg font-semibold text-gray-300">{exp.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered card for personal projects */}
                <div className="w-full max-w-3xl mt-10 mx-auto">
                    <div
                        className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-blue-400"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl font-bold text-blue-400">{experiences[2].company}</h2>
                        <h3 className="text-xl text-blue-300 font-semibold">{experiences[2].role}</h3>
                        <p className="text-sm text-gray-400 italic">{experiences[2].duration}</p>
                        <p className="mt-4 text-md text-gray-300 leading-relaxed">{experiences[2].description}</p>
                        <ul className="mt-4 space-y-2">
                            {experiences[2].projects.map((project, projIndex) => (
                                <li
                                    key={projIndex}
                                    className="bg-gray-700 p-4 rounded-xl shadow-md hover:bg-gray-600 transition duration-300"
                                    data-aos="fade-right"
                                >
                                    <span className="font-bold text-blue-300">{project.name}:</span> {project.details}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center mt-6 space-x-3" data-aos="zoom-in">
                            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                                {experiences[2].icon.charAt(0)}
                            </div>
                            <span className="text-lg font-semibold text-gray-300">{experiences[2].icon}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Experience;