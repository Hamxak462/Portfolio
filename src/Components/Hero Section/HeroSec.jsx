import React, { useEffect, useRef, useState } from "react";
// import { Typed } from 'react-typed';

import { motion } from "framer-motion";

import "./HeroSec.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSec = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [text] = useTypewriter({
    words: ["Muhammad Hamza Shah", "Hamxa shah"],
    loop: {}, // Enable looping
    typeSpeed: 200, // Typing speed in milliseconds
    deleteSpeed: 50, // Deleting speed in milliseconds
    delaySpeed: 1000, // Delay between words in milliseconds
  });

  const heroImgRef = useRef();
  const heroTextRef = useRef();

  // GSAP animation here is
  useGSAP(() => {
    gsap.from(heroImgRef.current, {
      x: 360,
      duration: 2,
      // ease: "elastic.in",
    });

    gsap.from(heroTextRef.current, {
      x: -360,
      duration: 2,
      // ease: "elastic.in",
    });
  });

  return (
    <motion.section>
      <div
        className="row hero_section"
        style={{
          overflow: "hidden",
        }}
      >
        {/* Hero Text */}
        <div
          ref={heroTextRef}
          className="col-lg-7 col-md-12 col-sm-12"
          style={{
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={true ? {} : { opacity: 0, x: -360, y: -360 }}
            whileInView={true ? {} : { opacity: 1, x: 0, y: 0 }}
            transition={{ type: "linear", duration: 1 }}
          >
            <div className="hero_name col-lg-12 col-md-12 col-sm-12">
              <h1>
                Hi, I Am <br />
                <span>
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
              </h1>
            </div>
            <div className="info_details">
              <h3>Software Engineer</h3>
              <p className="mx-md-auto mx-lg-auto">
                Experienced MERN Stack Developer specializing in React JS, Next
                JS, and React Native, with a strong background in JavaScript,
                TypeScript, Three JS, and state management using Redux. Skilled
                in creating responsive web applications with modern styling
                frameworks like Sass, Scss, Tailwind, and Bootstrap. Proficient
                in back-end technologies such as NodeJS, Express JS, and
                database management with SQL, MongoDB, and PostgreSQL.
                Experienced with cloud services including Amplify and EC2. At
                Digital Lens, developed a robust platform for analyzing Twitter
                user interactions, utilizing Twitter OAuth for secure data
                access and generating multi-format reports. Passionate about
                innovative solutions and collaborating with cross-functional
                teams to enhance digital experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="border col-lg-4 col-md-12 col-sm-12">
          <motion.div
            initial={true ? {} : { opacity: 0, x: 360, y: -360 }}
            whileInView={true ? {} : { opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className="hero_img col-sm-6 col-md-6 col-lg-6 mx-auto"
            ref={heroImgRef}
            style={{ width: "250px", height: "250px", overflow : "hidden "}}
          >
            <img
              src="images/my_img.jpg"
              alt="Hero Image"
              style={{
                width: "100%",
                height: "300px",
                display: "block",
                objectFit: "cover",
              }}
              className="responsive-img"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSec;
