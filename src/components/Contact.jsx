import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

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

    emailjs
      .send(
        "service_yvmnabr", // YOUR_SERVICE_ID
        "template_59c1u8i", // YOUR_TEMPLATE_ID
        formData,
        "KGCAozw0toGIzG0tq"   //YOUR_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#0a0f1a] text-white py-20 px-5 md:px-20 flex flex-col md:flex-row justify-between items-center min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div>

      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-white" data-aos="fade-down">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="mt-3 text-gray-300 w-3/4" data-aos="fade-up">
          Let's Work Together. Feel free to reach out if you have any questions, opportunities, or just want to connect.
        </p>
        <div className="mt-5" data-aos="fade-up">
          <p className="flex items-center gap-2" data-aos="fade-right">
            <span className="text-blue-500 text-2xl"><MdEmail /></span>
            <a href="mailto:Youloos477@gmail.com">Youloos477@gmail.com</a>
          </p>
        </div>
        <div className="flex gap-4 mt-4" data-aos="fade-up">
          <a target="_blank" href="https://github.com/youlook335" className="text-black text-3xl hover:text-white transition duration-300"><FaGithub /></a>
          <a target="_blank" href="@youloos477" className="text-blue-400 text-3xl hover:text-white transition duration-300"><FaTwitter /></a>
          <a target="_blank" href="youloos477" className="text-pink-400 text-3xl hover:text-white transition duration-300"><FaInstagram /></a>
          <a target="_blank" href="profile.php?id=61569362753063" className="text-blue-500 text-3xl hover:text-white transition duration-300"><FaFacebookF /></a>
          <a target="_blank" href="in/malik-tanveer-342388349" className="text-cyan-400 text-3xl hover:text-white transition duration-300"><FaLinkedin /></a>
        </div>
      </div>

      {/* Right Section - Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <input type="email" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <input type="text" name="subject" value={formData.subject} placeholder="Your Subject" onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none" data-aos="fade-up" />
        <textarea name="message" value={formData.message} placeholder="Your Message" style={{ resize: 'none' }} onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none h-32" data-aos="fade-up"></textarea>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-md" data-aos="zoom-in">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
