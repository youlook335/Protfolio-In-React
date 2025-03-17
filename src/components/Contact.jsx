import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20 flex flex-col md:flex-row justify-between items-center min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-white" data-aos="fade-down">Contact <span className="text-blue-500">Me</span></h2>
        <p className="mt-3 text-gray-300 w-3/4" data-aos="fade-up">
          Let's Work Together. Feel free to reach out if you have any questions, opportunities, or just want to connect.
        </p>
        <div className="mt-5" data-aos="fade-up">
          <p className="flex items-center gap-2" data-aos="fade-right"><span className="text-blue-500 text-xl"><MdEmail /></span> <a href="mailto:Youloos477@gmail.com">Youloos477@gmail.com</a></p>
          <p className="flex items-center gap-2" data-aos="fade-right"><span className="text-blue-500 text-xl"><BsGithub /></span><a href="https://github.com/youlook335">youlook335</a></p>
        </div>
        <div className="flex gap-4 mt-4" data-aos="fade-up">
          <a href="#" className="text-blue-400 text-2xl hover:text-white transition duration-300"><FaTwitter /></a>
          <a href="#" className="text-pink-400 text-2xl hover:text-white transition duration-300"><FaInstagram /></a>
          <a href="#" className="text-blue-500 text-2xl hover:text-white transition duration-300"><FaFacebookF /></a>
          <a href="#" className="text-cyan-400 text-2xl hover:text-white transition duration-300"><FaLinkedin /></a>
        </div>
      </div>

      {/* Right Section - Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg" data-aos="fade-left">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <input type="text" name="subject" placeholder="Your Subject" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none h-32" data-aos="fade-up"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md" data-aos="zoom-in">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
