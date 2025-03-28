import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    reverse?: boolean;
}

const projects: ProjectItem[] = [
    {
        title: "AI Web Application",
        description:
            "Bootpress is a Web app built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication for secure Google sign-in. It combines modern AI technologies with access control. Soon, it will integrate an AI system allowing users to interact with AI-generated content directly within the app.",
        imageUrl: "AI.jpg",
        altText: "Chat Application",
    },
    {
        title: "E-Commerce Platform - SkyMart",
        description:
            "One of the projects I worked on during my internship was SkyMart—an e-commerce website built with React, Tailwind CSS, and Bootstrap. It enables users to browse products, add them to their cart, and save their favorites. It was an exciting experience developing the frontend.",
        imageUrl:
            "https://dev-muhammad.vercel.app/static/media/skymart.c52e55a85ec48b8d2704.JPG",
        altText: "E-Commerce Platform",
        reverse: true,
    },
    {
        title: "Apartment Management System",
        description:"During my internship, I built an apartment management website using React. It was my first real-world project, where I applied my knowledge and learned new concepts. I worked hard to make this website both functional and visually appealing.",
        imageUrl: "apartment.jpg",
        altText: "Apartment Management System",
    },
];

const Projects: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div className="project-container flex flex-col items-center justify-center p-20 bg-[#0a0f1a] relative">
            <h1
                data-aos="fade-up"
                className="mb-10 mt-10 p-2 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500"
            >
                My Projects
            </h1>

            {projects.map((project, index) => (
                <div
                    key={index}
                    data-aos="zoom-in"
                    className={`flex flex-col md:flex-row items-center mt-20 text-center md:text-left gap-20 ${
                        project.reverse ? "md:flex-row-reverse" : ""
                    }`}
                >
                    <img
                        src={project.imageUrl}
                        alt={project.altText}
                        data-aos="fade-right"
                        className="rounded-lg shadow-lg w-full md:w-1/2"
                    />
                    <div
                        className="md:w-1/2"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                    >
                        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">
                            {project.title}
                        </h2>
                        <p className="mt-2 text-gray-400">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;