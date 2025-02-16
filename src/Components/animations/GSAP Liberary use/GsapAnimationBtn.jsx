import React, { useRef, useState } from "react";
import "./GsapAnimationBtn.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CleaningServices } from "@mui/icons-material";

const GsapAnimationBtn = () => {
  // const [circle, setCircle] = useState(0);
  // const random = gsap.utils.random(-500,500,100);

  // useGSAP(() => {
  //     gsap.to(".circle", {
  //         x: circle,
  //         duration: 2,
  //     });
  // }, [circle]);

//   Moving the circle on x axis with duration and random values;
  const [Xvalue, setXvalue] = useState(0);
  const randomX = gsap.utils.random(-500,500,100);
  
  const [yvalue, setYvalue] = useState(0);
  const randomY = gsap.utils.random(-200,200,30);


  // Rotating the circle with duration and random degrees
  const [roti, setRoti] = useState(0);
  const randomRoti = gsap.utils.random(-360,360,30);

  const imgRef = useRef();

  useGSAP(() => {
    gsap.to(imgRef.current, {
        x: Xvalue,
        y: yvalue,
        rotate: roti,
        duration: 2,
    })
  },{scope : ".containers",dependencies:[Xvalue, roti, yvalue]});

 

  return (
    <div className="main_container">
      <div className="containers">
        <button
          onClick={() => {
            setXvalue(randomX)
            setRoti(randomRoti)
            setYvalue(randomY)
            console.log(Xvalue); 
          }}
        >
          Animate
        </button>
        <img className="bea_img" onClick={() => {
            setXvalue(randomX)
            setRoti(randomRoti)
            setYvalue(randomY)
            console.log(Xvalue); 
          }} ref={imgRef} src="https://png.pngtree.com/png-vector/20240815/ourmid/pngtree-a-bee-in-transparent-background-png-image_13490947.png" alt="" />
      </div>
    </div>
  );
};

export default GsapAnimationBtn;
