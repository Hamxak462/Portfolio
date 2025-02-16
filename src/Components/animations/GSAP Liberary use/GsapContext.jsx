import React, { useRef, useState } from "react";
import "./GsapContext.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapContext = () => {
  // useRef hook for the box element reference
  const boxRef = useRef();

  // contextSafe is cleaning up the cache for performance reasons
  // contextSafe hook for the animation function to avoid memory leaks
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    // Reset rotation to 0 before animating
    gsap.set(boxRef.current, { rotate: 0 });
    
    // GSAP animation code here
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default GsapContext;
