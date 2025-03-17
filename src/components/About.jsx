import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "JavaScript", image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "Bootstrap", image: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
  { name: "Tailwind CSS", image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "React.js", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Typescript", image: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { name: "PHP", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
];

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="about-container min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-[#0a0f1a] relative" data-aos="fade-up">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-3xl"></div>

      {/* Left Side - Text Content */}
      <div className="md:w-1/2 grid place-items-center z-10" data-aos="fade-right">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-tight">
          About
          <TypeAnimation
            sequence={[" Me", 1200, "", 500]}
            wrapper="span"
            speed={50}
            className="text-yellow-400 font-bold"
            repeat={Infinity}
          />
        </h1>
        <p className="text-center text-xl text-white mt-5 w-3/4" data-aos="fade-left">
          Hi, I’m Tanveer, a Front-end Web Developer focused on building intuitive, responsive web apps.
          I specialize in React for dynamic UIs and use modern frameworks like Tailwind CSS for sleek designs.
          I love solving problems and building solutions that enhance user experience. Let's collaborate on something amazing!
        </p>
      </div>

      {/* Right Side - Skills Grid */}
      <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0 relative z-10" data-aos="zoom-in">
        <div className="grid grid-cols-3 gap-6 max-w-lg">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setSelectedSkill(skill.name)}
              className={`relative flex flex-col items-center justify-center p-6 h-28 w-28 rounded-2xl transition-all cursor-pointer`
                + (selectedSkill === skill.name
                  ? " bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 scale-105 border-2 border-transparent"
                  : " bg-black border-2 border-gray-600 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/50"
                )
              }
              data-aos="flip-left"
            >
              <img src={skill.image} alt={skill.name} className="w-12 h-12" />

              {/* Hover پر Show ہونے والا Text */}
              <span
                className={`absolute bottom-0 mb-2 text-white text-sm font-semibold px-2 py-1 bg-black bg-opacity-75 rounded transition-opacity duration-300 ${hoveredSkill === skill.name ? "opacity-100 translate-y-2" : "opacity-0"}`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Selected Skill Display */}
        {selectedSkill && (
          <div className="mt-6 text-lg font-semibold text-white px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg" data-aos="fade-up">
            Selected Skill: {selectedSkill}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
