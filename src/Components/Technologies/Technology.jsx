import React, { useEffect, useRef } from "react";

// import css files : : ;
import "./Technology.css";

// Import GSAP ;
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {motion} from "framer-motion";
import { Opacity } from "@mui/icons-material";
import { span } from "motion/react-client";

const skillImages = [
  "/svg folder/html_icon.png",
  "/svg folder/html_icon.png",
  "/svg folder/html_icon.png",
  "/svg folder/html_icon.png",
  "/svg folder/html_icon.png",
  "/svg folder/html_icon.png",
];

const skillImagesTwoRow = [
  " /svg folder/css_icon.png",
  " /svg folder/css_icon.png",
  " /svg folder/css_icon.png",
  " /svg folder/css_icon.png",
  " /svg folder/css_icon.png",
  " /svg folder/css_icon.png",
]
const skillImagesThreeRow = [
  " /svg folder/react-3-removebg-preview.png",
  " /svg folder/react-3-removebg-preview.png",
  " /svg folder/react-3-removebg-preview.png",
  " /svg folder/react-3-removebg-preview.png",
  " /svg folder/react-3-removebg-preview.png",
  " /svg folder/react-3-removebg-preview.png",
]
const Technology = () => {
  

  useEffect(() => {
    gsap.utils.toArray('.html_icon').forEach((item) =>(
      gsap.to(item , {
        // x : 0,
        y : gsap.utils.random(-8, 20),
        duration : gsap.utils.random(1, 3),
        repeat : -1, 
        yoyo : true,
        ease : "power1.inOut",
        delay : gsap.utils.random(0, 2),
      })
    ))
  },[])


  useEffect(() => {
    gsap.utils.toArray('.css_icon').forEach((item) =>(
      gsap.to(item , {
        // x : 0,
        y : gsap.utils.random(-8, 20),
        duration : gsap.utils.random(1, 3),
        repeat : -1, 
        yoyo : true,
        ease : "power1.inOut",
        delay : gsap.utils.random(0, 2),
      })
    ))
  },[])
  useEffect(() => {
    gsap.utils.toArray('.react_icon').forEach((item) =>(
      gsap.to(item , {
        // x : 0,
        y : gsap.utils.random(-8, 20),
        duration : gsap.utils.random(1, 3),
        repeat : -1, 
        yoyo : true,
        ease : "power1.inOut",
        delay : gsap.utils.random(0, 2),
      })
    ))
  },[])


  return (
    <>
      <div className="row technoly_section">
        <div className="col-md-12 mx-auto mb-lg-5 ">

          <h3 className="bg-dark text-center p-2">Technologies</h3>


          <motion.div
            initial={{Opacity : 0 , x : -360}}
            whileInView={{opacity : 1, x : 0}}
            transition={{duration : 2 , ease : 'linear'}}
            className="d-flex flex-wrap justify-content-center"
            
            >
            {skillImages.map((skillImage, index) => (
              
              <img
                key={index}
                className="html_icon"
                src={skillImage}
                alt="html_icon"
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "8px 0",
                  
                }}
              />
             
            ))}
          </motion.div>


          {/* Second Row */}
          <motion.div 
          initial = {{opacity: 0 , x : 360}}
          whileInView={{opacity: 1 , x : 0}}
          transition={{duration : 2 , ease : 'linear'}}
          className="d-flex flex-wrap justify-content-center mt-2">
            {
              skillImagesTwoRow.map((skillImageTwoRow, index) => (
                <img
                  className="css_icon"
                  src={skillImageTwoRow}
                  alt="css_icon"
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "12px 10px",
                    marginTop : "20px",
                  }}
                />
              ))
            }
          </motion.div>

          {/* Third Row */}
          <motion.div
            initial = {{opacity: 0, x: -360}}
            whileInView={{opacity: 1, x : 0}}
            transition={{duration : 2, ease : 'linear'}}
           className="d-flex flex-wrap justify-content-center">
            {
              skillImagesThreeRow.map((skillImageThreeRow, index) => (
               <img
                 className="react_icon"
                 src={skillImageThreeRow}
                 alt="react_icon"
                 style={{
                   width: "150px",
                   height: "150px",
                   padding: "14px 12px",
                   marginTop : "20px",
                 }}
               />
             ))
            }
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Technology;
