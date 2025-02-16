import React, { useRef } from "react";
import "./Gsap2.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Gsap2 = () => {

    const container  = useRef(); 

    // GSAP animation 
    useGSAP(() => {
        // gsap.from('.circle',{
        //     opacity: 0,
        //     rotate : -360,
        //     scale : 0,
        //     duration: 3,
        //     delay: 1,
        //     ease: "linear"
        // })
        gsap.from('.circle1',{
            x : 360,
            opacity: 0,
            rotate : -360,
            duration: 3,
            delay: 1,
            ease: "linear"
        })
        gsap.from('.box1',{
            opacity: 0,
            rotate : 360,
            scale : 0,
            duration: 3,
            delay: 1,
        })
        // gsap.from('.box2',{
        //     x : -360,
        //     opacity: 0,
        //     rotate : 360,
        //     duration: 3,
        //     delay: 1,
        //     ease: "linear"
        // })
    }, {scope : container})
  return (
    <div className="main">
      {/* GSAP Animation */}
      <div ref={container} className="gsap_container">
        <div  className="circle circle1">
          <h1> Circle 1!</h1>
        </div>
        <div   className=" box1">
          <h1>Gsap box 1!</h1>
        </div>
      </div>
      <div className="gsap_kuch ms-2">
      <div className="circle circle2">
        <h1> Circle 1!</h1>
      </div>
      <div className=" box2">
        <h1>Gsap box 2!</h1>
        {/* <img src="images/girl-img-hero-section.png" width="100px" height="220px" alt="" /> */}

      </div>

      </div>
    </div>
  );
};

export default Gsap2;
