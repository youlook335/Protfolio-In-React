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
                "Developed 3 projects during my internship at Skytech, gaining hands-on experience in React, Tailwind CSS, and Bootstrap.",
            projects: [
                {
                    name: "SkyMart",
                    details:
                        "An e-commerce platform built using React and Tailwind CSS.",
                },
                {
                    name: "Apartment Management System",
                    details:
                        "A web application for managing apartment rentals.",
                },
                {
                    name: "Skytech Company Website",
                    details:
                        "A responsive portfolio website for Skytech.",
                },
            ],
            icon: "Skytech.",
        },
        {
            company: "Bootpress Project",
            role: "Frontend Developer",
            duration: "Feb 2025 - Present",
            description:
                "Developed an AI-powered web application using React, Tailwind CSS, and Firebase Authentication.",
            projects: [
                {
                    name: "Bootpress AI Platform",
                    details:
                        "An AI-integrated web application that allows users to interact with AI-generated content.",
                },
            ],
            icon: "Bootpress.",
        },
    ];

    return (
        <div className="min-h-screen text-white bg-[#0a0f1a] p-12 flex flex-col items-center">
            <h1 className="mb-10 mt-10 p-2 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                My Experience
            </h1>

            <div className="w-full max-w-5xl space-y-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-blue-400"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl font-bold text-blue-400">{exp.company}</h2>
                        <h3 className="text-xl text-blue-300 font-semibold">{exp.role}</h3>
                        <p className="text-md text-gray-400 italic">{exp.duration}</p>
                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">{exp.description}</p>
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
        </div>
    );
};

export default Experience;
