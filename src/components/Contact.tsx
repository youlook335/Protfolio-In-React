import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { BiPhone } from "react-icons/bi";

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
        "service_yvmnabr",
        "template_59c1u8i",
        formData,
        "KGCAozw0toGIzG0tq"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#0a0f1a] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-12 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl z-0"></div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 z-10 bg-[#121826] p-8 rounded-xl shadow-lg w-full max-w-xl space-y-5"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-center">Send a Message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg text-lg font-semibold shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Info Section */}
      <div className="md:w-1/2 text-center md:text-left z-10" data-aos="fade-right">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
          Have a question or want to collaborate? Drop a message — I’ll get back as soon as possible!
        </p>

        <p className="flex justify-center md:justify-start items-center gap-2 text-white mb-4">
          <MdEmail className="text-2xl text-blue-400" />
          <a href="mailto:Youloos477@gmail.com" className="hover:underline">Youloos477@gmail.com</a>
        </p>
        <p className="flex justify-center md:justify-start items-center gap-2 text-white mb-4">
          <BiPhone className="text-2xl text-blue-400" />
          {/* <phon className="text-2xl text-blue-400" /> */}
          <a href="phone:+92 357048768" className="hover:underline">+92 357048 768</a>
        </p>

        
      </div>
    </div>
  );
};

export default Contact;
