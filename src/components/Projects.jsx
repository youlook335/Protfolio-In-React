import React from "react";

const Projects = () => {
    return (
        <div className="project-container flex flex-col items-center justify-center p-20 bg-[#0a0f1a] relative">

            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div> */}
            <h1 className="mb-10 mt-10 p-2 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                My Projects
            </h1>

            {/* This is a Second Project */}
            <div className="flex flex-col md:flex-row items-center mt-20 text-center md:text-left gap-20">
                <img
                    src="AI.jpg"
                    alt="Chat Application"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">AI Web Application</h2>
                    <p className="mt-2 text-gray-400">
                        Bootpress is a Web app I built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication for secure Google sign-in. It's one of my biggest projects, combining modern AI technologies with access control.

                        Soon, I'll integrate an AI system, allowing users to interact with AI-generated content directly within the app. Bootpress will be fully AI-driven, making it a unique experience.

                        I'm excited to keep improving and expanding its features
                    </p>
                </div>
            </div>
            {/* This is a 2nd project */}
            <div className="flex flex-col md:flex-row items-center mt-20 text-center md:text-left gap-10 mb-10">
                <div className="md:w-1/2">
                    <h2 className="text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">E-Commerce Platform - SkyMart</h2>
                    <p className="mt-2 text-gray-400">
                        One of the projects I worked on during my internship was SkyMart — an e-commerce website that I helped build with my team. I developed the frontend whereas React, Tailwind CSS and Bootstrap were used to build an aesthetic and interactive interface. This platform enables users to view a multitude of products, add them to their cart, and also heart the things they want. This project was an exciting experience.
                    </p>
                </div>
                <img
                    src="https://dev-muhammad.vercel.app/static/media/skymart.c52e55a85ec48b8d2704.JPG"
                    alt="E-Commerce Platform"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />
            </div>
            {/* This is a Third Project */}
            <div className="flex flex-col md:flex-row items-center mt-20 text-center md:text-left gap-20">
                <img
                    src="apartment.jpg"
                    alt="Apartment Management System"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">Apartmnt Website</h2>
                    <p className="mt-2 text-gray-400">
                        So I finished a website I design during my internship. This website was created with react, it was my first real-world project. This has been a memorable experience for me in that it has been an interesting experience in terms of using what I learnt and also new concepts in creating this website. I worked really hard to get this website functional and aesthetically pleasing as well.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Projects;