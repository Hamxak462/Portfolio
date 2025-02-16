import React, { useEffect, useRef } from 'react'
import "./Gsap.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Gsap = () => {

    const gsapRef = useRef();

    // GSAP Animation Code here
   useGSAP(()=>{
    // gsap.to('.box',{
    //     x: 1000,
    //     duration: 2,
    //     delay: 1,
    //     ease: "elastic.inOut(1, 1)"
  
    // }),
    gsap.to(gsapRef.current, {
        x: 2,
        y: 3,
        loop: true,
        duration: 3,
        delay: 1,
        rotate: 360,
    })
   
   })

   useEffect(() => {
    gsap.to(".moving-img", {
      y: 50, // Moves 50px down
      duration: 1.5, // Animation speed
      repeat: -1, // Infinite loop
      yoyo: true, // Moves back up (-y)
      ease: "power1.inOut", // Smooth effect
    });
  }, []);


  return (
    <div>
      {/* GSAP Animation goes here! */}
      <div ref={gsapRef} className="box mb-3">
        <h1>Hello, GSAP! </h1>
        {/* <img src="images/girl-img-hero-section.png" alt="" /> */}
      </div>

      <div className="image-container">
      <img src="/images/my_img.jpg" alt="Moving" className="moving-img" width="250px" height="250px" />
    </div>
    </div>
  )
}

export default Gsap;
