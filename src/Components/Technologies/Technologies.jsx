import React, { useEffect, useRef } from "react";

import "./technologies.css";


// Animations libraries 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {motion} from "framer-motion"


const Technologies = () => {

    const animat_technologies1  = useRef();
    const animat_technologies2 = useRef();
    const animat_technologies3 = useRef();

    useGSAP(() => {
        gsap.from(animat_technologies1.current, 1, {
          opacity: 0,
          x: -360,
          duration : 3,
        });
    })
    
/*========================================================== */
  useEffect(() => {
    gsap.utils.toArray(".all_imgs").forEach((item, index) => {
      gsap.to(item, {
        y: gsap.utils.random(-10, 25), // Random Y movement (10px to 40px)
        duration: gsap.utils.random(1, 5), // Random duration (1s to 2s)
        repeat: -1, // Infinite animation
        yoyo: true, // Moves back
        ease: "power1.inOut", // Smooth movement
        delay: index * 0.2, // Creates a snake effect (each image starts later)
      });
    });
  }, []);

  //   // second images row animation starts
  // useEffect(() => {
  //   gsap.utils.toArray(".list_img").forEach((item, index) => {
  //     gsap.to(item, {
  //       y: gsap.utils.random(-5, 10), // Random Y movement (10px to 40px)
  //       duration: gsap.utils.random(1, 5), // Random duration (1s to 2s)
  //       repeat: -1, // Infinite animation
  //       yoyo: true, // Moves back
  //       ease: "power1.inOut", // Smooth movement
  //       delay: index * 0.2, // Creates a snake effect (each image starts later)
  //     });
  //   });
  // }, []);

  return (
    <section className="overflow-hidden ">
    {/* Technology Section */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-sm-12">
          <h3 className="bg-dark text-center p-2">Technologies</h3>
          {/* <div className="list_items"> */}
          {/* first row */}
            <motion.div
              initial={{ opacity: 0, x: -360}}
              whileInView={{opacity: 1, x: 0}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="images-list" ref={animat_technologies1}>
              
                <div className=" col-md-2 list_img1 all_imgs">
                    <img src="images/html_icon.png" alt="img1" className="mx-2 my-2" />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2">
                    <img src="svg folder/JS_img-Rem_bg.png" alt="JS_img" />
                </div>

                <div className="col-md-2  list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/bootstrap2-removebg-preview.png" alt="list_img1" style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                    margin : "8px 15px",                    
                    }}/>
                </div>

                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/react-3-removebg-preview.png" alt="list_img1" style={{width : "75px", height : "78px"}} />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/nodejs-removebg-preview.png" alt="list_img1" style={{width: "75px" , height: "75px", margin: "2px 13px"}} />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center" >
                    <img src="svg folder/gsap-removebg-preview.png" alt="list_img1" style={{
                      width : "75px" , 
                    }} />
                </div>

            </motion.div>
        </div>
      </div>

      {/* ========================================= */}
      <div className="row  d-flex justify-content-center">
        <div className="col-md-10 list_img1">
          {/* first row */}
            <motion.div
            initial={{ opacity: 0, x: -360}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
             className="images-list" ref={animat_technologies1}>

                <div className="col-sm-12 col-xs-12 d-flex justify-content-center ">

                  <div className=" col-sm-3 col-md-2 all_imgs">
                      <img src="images/html_icon.png" alt="img1" className="mx-2 my-2" />
                  </div>
                  <div className="col-sm-3 col-md-2 all_imgs py-2">
                      <img src="svg folder/JS_img-Rem_bg.png" alt="JS_img" />
                  </div>

                </div>


                <div className="col-sm-12 col-xs-12 list_img1 d-flex">  

                  <div className="col-md-2 all_imgs py-2 d-flex justify-content-center">
                      <img src="svg folder/bootstrap2-removebg-preview.png" alt="list_img1" style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                      margin : "8px 15px",                    
                      }}/>
                  </div>
                  <div className="col-md-2 all_imgs py-2 d-flex justify-content-center">
                      <img src="svg folder/react-3-removebg-preview.png" alt="list_img1" style={{width : "75px", height : "78px"}} />
                  </div>

                </div>

                <div className="col-sm-12 col-xs-12 list_img1 d-flex">

                  <div className="col-md-2 all_imgs py-2 d-flex justify-content-center">
                      <img src="svg folder/nodejs-removebg-preview.png" alt="list_img1" style={{width: "75px" , height: "75px", margin: "2px 13px"}} />
                  </div>
                  <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center" >
                      <img src="svg folder/gsap-removebg-preview.png" alt="list_img1" style={{
                        width : "75px" , 
                      }} />
                  </div>

                </div>
            </motion.div>
        </div>
      </div>





      {/* =============================================== */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          {/* first row */}
            <motion.div
            initial={{ opacity: 0, x: -360}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
             className="images-list" ref={animat_technologies1}>
                <div className=" col-md-2 list_img1 all_imgs">
                    <img src="images/html_icon.png" alt="img1" className="mx-2 my-2" />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2">
                    <img src="svg folder/JS_img-Rem_bg.png" alt="JS_img" />
                </div>
                <div className="col-md-2  list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/bootstrap2-removebg-preview.png" alt="list_img1" style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                    margin : "8px 15px",                    
                    }}/>
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/react-3-removebg-preview.png" alt="list_img1" style={{width : "75px", height : "78px"}} />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center">
                    <img src="svg folder/nodejs-removebg-preview.png" alt="list_img1" style={{width: "75px" , height: "75px", margin: "2px 13px"}} />
                </div>
                <div className="col-md-2 list_img1 all_imgs py-2 d-flex justify-content-center" >
                    <img src="svg folder/gsap-removebg-preview.png" alt="list_img1" style={{
                      width : "75px" , 
                    }} />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
