"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TicketBookmark",
    description: "TicketBookmark is a simple platform to book movie and event tickets online. Users can browse shows, pick seats, and pay securely. It offers real-time updates and smart suggestions for a smooth experience.",
    image: "/images/project_1.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/amshugannu/TicketBookmark",
    previewUrl: "https://amshugannu.github.io/TicketBookmark/2.html",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking System",
    description: "The future of secure healthcare, our blockchain-powered system is revolutionizing medical prescription management, eliminating fraud and ensuring patient safety with unparalleled transparency and accountability.",
    image: "/images/project_2.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/amshugannu/lifelinehospitalonlinebooking",
    previewUrl: "https://lifelinehospitalonlinebooking.onrender.com/",
  },
  {
    id: 3,
    title: "Library Management System",
    description: "The Library Management System using DSA is a console-based project that manages tasks like adding, issuing, returning, and searching books. It uses data structures such as arrays, linked lists, stacks, and queues to handle records efficiently. The project showcases how core DSA concepts can be applied to solve real-world problems.",
    image: "/images/project_3.png",
    tag: ["All Projects"],
    gitUrl: "https://github.com/kazekunal/buzz_job",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "School Result Management System",
    description: "The School Result Management System is a PHP-based web app that manages student records and exam results. It allows admins to add, update, and publish results easily. The system ensures efficient result handling and secure data management.",
    image: "/images/project_4.png",
    tag: ["All Projects", "Web Projects"],
    gitUrl: "https://github.com/amshugannu/School-Result-Management-System",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "SnapFine",
    description: "SnapFine is an Android application designed to help citizens report traffic violations by capturing photos and submitting detailed reports. It allows users to input vehicle details, select violation types, add descriptions, specify the date, time, and location, and upload evidence seamlessly. The app integrates Firebase services for real-time data storage, user identification, and efficient case tracking.",
    image: "/images/project_5.png",
    tag: ["All Projects", "Android Projects"],
    gitUrl: "https://github.com/amshugannu/SnapFine/tree/main/app/src/main",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "TracknTally",
    description: "TracknTally is an Android app that helps users record and manage their expenses. It uses a database to store and retrieve data efficiently. The app demonstrates practical implementation of user-friendly features and data management in Android.",
    image: "/images/project_7.png",
    tag: ["All Projects", "Android Projects"],
    gitUrl: "https://github.com/amshugannu/ExpenseTracker",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Projects"
          isSelected={tag === "Web Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Android Projects"
          isSelected={tag === "Android Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;