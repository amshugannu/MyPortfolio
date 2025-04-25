import React from "react";
import Image from "next/image";

const skillsByCategory = {
  Languages: [
    { name: "Java", icon: "/skills/java.svg" },
    { name: "C++", icon: "/skills/cpp.svg" },
    { name: "C", icon: "/skills/c.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "Kotlin", icon: "/skills/kotlin.svg" },
    { name: "JavaScript", icon: "/skills/javascript.svg" },
    { name: "HTML", icon: "/skills/html5.svg" },
    { name: "PHP", icon: "/skills/php.svg" },
    { name: "XML", icon: "/skills/xml.svg" },
  ],
  Frameworks: [
    { name: "ReactJS", icon: "/skills/react.svg" },
    { name: "CSS", icon: "/skills/css3.svg" },
    { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
    { name: "jQuery", icon: "/skills/jquery.svg" },
  ],
  "Tools/Platforms": [
    { name: "Android Studio", icon: "/skills/androidstudio.svg" },
    { name: "VS Code", icon: "/skills/vscode.svg" },
    { name: "MySQL", icon: "/skills/mysql.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "Firebase", icon: "/skills/firebase.svg" },
  ],
};

const SkillsSection = () => {
  // Define fixed width for each skill card + gap to calculate max width of grid container
  // Card width ~ 96px (p-4 + content), gap 24px (gap-6)
  // For 6 columns: (96 * 6) + (24 * 5) = 576 + 120 = 696px approx

  // We'll use Tailwind's max-w-[696px] for md screens and smaller max widths for smaller screens

  return (
    <section id="skills" className="py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Skills
      </h2>
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <div key={category} className="mb-10">
          {/* Center the heading */}
          <h3 className="text-2xl font-semibold text-white mb-6 text-center max-w-xl mx-auto">
            {category}
          </h3>

          {/* Flex container centers the grid */}
          <div className="flex justify-center">
            {/* Grid container with fixed max-width to fit exact columns */}
            <div
              className="
                grid 
                grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
                gap-6 
                max-w-[calc(6*96px+5*24px)] sm:max-w-[calc(4*96px+3*24px)] md:max-w-[calc(6*96px+5*24px)]
                w-full
              "
              style={{ justifyItems: "center" }} // center content inside each cell
            >
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-[#181818] rounded-xl p-4 cursor-pointer transition-shadow duration-300 ease-in-out
                    hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.75)]"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="text-white text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
