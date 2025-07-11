import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    click: string;
}
const projects: ProjectItem[] = [
    {
        title: "AI Web Application",
        description:
            "Bootpress is a Web app built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication for secure Google sign-in. It combines modern AI technologies with access control. Soon, it will integrate an AI system allowing users to interact with AI-generated content directly within the app.",
        imageUrl: "AI.jpg",
        altText: "AI Web Application",
        click: "https://bootpress-ai.vercel.app/"
    },
    {
        title: "E-Commerce Platform - SkyMart",
        description:
            "One of the projects I worked on during my internship was SkyMart—an e-commerce website built with React, Tailwind CSS, and Bootstrap. It enables users to browse products, add them to their cart, and save their favorites.",
        imageUrl: "skymart.png",
        altText: "E-Commerce Platform",
        click: "https://skytechmart.netlify.app/"
    },
    {
        title: "Apartment Management System",
        description:
            "During my internship, I built an apartment management website using React. It was my first real-world project, where I applied my knowledge and learned new concepts. I worked hard to make this website both functional and visually appealing.",
        imageUrl: "apartment.jpg",
        altText: "Apartment Management System",
        click: "https://website-apartment-project.netlify.app/"

    },
    {
        title: "Data Converter Table",
        description:
            "A React app where users can fill out a form and see the submitted data appear in a live-updating table. Helpful for learning state management and form handling.",
        imageUrl: "D_Convertpng.png",
        altText: "Form to Table App",
        click: "https://firestore-crud-ts.web.app/"

    },
    {
        title: "GNews Blog App",
        description:
            "A modern blog interface built using React and Axios. It fetches the latest headlines using the GNews API. Optimized for responsiveness and clean UI design.",
        imageUrl: "GNews.png",
        altText: "GNews Blog",
        click: "https://blog-app-100-project.vercel.app/"
    },

    {
        title: "Mini LMS (Learning Platform)",
        description:
            "This mini LMS displays YouTube course listings. On click, users are taken to the course page. Built with React, ideal for learners to organize their resources.",
        imageUrl: "LMS.png",
        altText: "Mini LMS",
        click: "https://protfolio-personal.vercel.app/"
    },

];


const Projects: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div className="bg-[#0a0f1a] py-20 px-6 text-white">
            <h1
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-center mb-12"
            >
                My Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        className="bg-[#111827] rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <a href={project.click} target="_blank" rel="noopener noreferrer">

                            <img
                                src={project.imageUrl}
                                alt={project.altText}
                                className="rounded-md w-full h-40 object-cover mb-4"
                            />
                        </a>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
