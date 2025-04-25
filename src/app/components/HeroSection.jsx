"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Gannu Amshu",
                2000,
                "Full Stack Web Developer", 
                2000,
                "Android Developer",
                2000,
                "Software Developer",
                2000,
              ]}

              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Driven Android and Web Developer crafting dynamic mobile and web applications . Proficient in Kotlin, ReactJS, and associated technologies. Delivers scalable and user-friendly solutions. Proven ability to develop projects with efficient system and a commitment to continuous learning.
          </p>
          <div>
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              My Projects
            </Link>
            <Link
              href="ARCV(specialized).pdf"  target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[420px] lg:h-[420px] relative shadow-[0_0_25px_#3B82F6] overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="hero image"
              fill
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
