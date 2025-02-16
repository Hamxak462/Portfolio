import React, { useEffect, useRef } from "react";
import './GsapAnimateWithUseEffect.css';
import { gsap } from "gsap";
import { duration } from "@mui/material";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const GsapAnimateWithUseEffect = () => {
  

  const [ text ] = useTypewriter({
    words: ["Developer", "Designer", "Animations", "Photography"],
    loop: {}, // Enable looping
    typeSpeed:200, // Typing speed in milliseconds
    deleteSpeed: 50, // Deleting speed in milliseconds
    delaySpeed: 1000, // Delay between words in milliseconds
  });

  return (
    <div className="text_container col-md-6">
      <h1>
        I am a{" "}
        <span className="fs-3 text-dark fw-bold">
          {text} {/* Render the typewriter text */}
        </span> 
          <Cursor cursorStyle="|" /> {/* Add the cursor */}
      </h1>
    </div>
  );
};

export default GsapAnimateWithUseEffect;
