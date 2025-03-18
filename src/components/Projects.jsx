import React from "react";

const Projects = () => {
    return (
        <div className="project-container flex flex-col items-center justify-center px-8 bg-[#0a0f1a] relative">

            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div> */}
            <h1 className="mb-5 mt-5 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">
                My Projects
            </h1>

            {/* E-Commerce Platform */}

            <div className="flex flex-col md:flex-row items-center text-center mt-4 md:text-left gap-10 mb-10">
                <img
                    src="AI.jpg"
                    alt="E-Commerce Platform"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold">E-Commerce Platform - SkyMart</h2>
                    <p className="mt-2 text-gray-400">
                        SkyMart is an e-commerce platform I built during my internship. I
                        developed the frontend using React.js, Tailwind CSS, and Bootstrap
                        to create a clean, responsive, and user-friendly interface for
                        browsing products and managing the shopping cart.
                    </p>
                </div>
            </div>

            {/* Chat Application */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold">Chat Application</h2>
                    <p className="mt-2 text-gray-400">
                        TalkSky is a real-time chat application built using Next.js for both
                        the frontend and backend. It uses MySQL for database storage and
                        Firebase for real-time messaging. The UI is styled with Tailwind
                        CSS, ensuring a clean and responsive user experience.
                    </p>
                </div>
                <img
                    src="AI.jpg"
                    alt="Chat Application"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />

            </div>
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10 mb-10">
                <img
                    src="https://dev-muhammad.vercel.app/static/media/skymart.c52e55a85ec48b8d2704.JPG"
                    alt="E-Commerce Platform"
                    className="rounded-lg shadow-lg w-full md:w-1/2"
                />
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold">E-Commerce Platform - SkyMart</h2>
                    <p className="mt-2 text-gray-400">
                        SkyMart is an e-commerce platform I built during my internship. I
                        developed the frontend using React.js, Tailwind CSS, and Bootstrap
                        to create a clean, responsive, and user-friendly interface for
                        browsing products and managing the shopping cart.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;