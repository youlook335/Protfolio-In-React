import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a0f1a] text-gray-300 py-10 border-t border-gray-700 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 px-6">
                {/* Social Icons */}
                <div className="flex gap-6 text-2xl">
                    <a href="https://github.com/youlook335" target="_blank" className="text-gray-300 hover:text-white"><FaGithub /></a>
                    <a href="https://twitter.com/youloos477" target="_blank" className="text-blue-400 hover:text-white"><FaTwitter /></a>
                    <a href="https://instagram.com/youloos477" target="_blank" className="text-pink-400 hover:text-white"><FaInstagram /></a>
                    <a href="https://facebook.com/profile.php?id=61569362753063" target="_blank" className="text-blue-600 hover:text-white"><FaFacebookF /></a>
                    <a href="https://linkedin.com/in/malik-tanveer-342388349" target="_blank" className="text-cyan-400 hover:text-white"><FaLinkedin /></a>
                </div>

                {/* Name or Tagline */}
                <p className="text-lg font-semibold text-white">Malik Tanveer</p>

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    &copy; 2025 All rights reserved. Built with ❤️ by Tanveer.
                </p>
            </div>
    </footer>
    );
};

export default Footer;
