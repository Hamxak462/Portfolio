import React, { useRef } from 'react';

// Css File import : 
import "./HeroSection.css"

// React bootstrap styles import:
import { Button, Col, Container, Row } from 'react-bootstrap'

// All are animations related imports : 
import { motion } from "motion/react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {

    const heroSectRef = useRef(null);
     
    // GSAP animation 
    useGSAP(() => {
        // if('.hero_img'){
        gsap.from('.hero_img',{
            x : 360,
            opacity: 9,
            rotate : -360,
            duration: 2,
            delay: 2,
            ease: "linear"
        })
    // }
        
       
    },{scope : heroSectRef});

  return (
    <>
        <Container>
            <Row>
                <Col>
                    <motion.div 
                    // animate={{ opacity: isVisible ? 1 : 0 }}

                    className=' d-flex justify-content-around mx-auto' id='hero-sction'>
                        <Col   md="6" sm="12">
                            <h2 className='hero_h2'>Unlock your potential with the limitless possibilities of IT skills</h2>
                            <p className='hero_p'>
                            Our agency specializes in delivering a diverse spectrum of IT skills, from cutting-edge software development and cybersecurity expertise to seamless network infrastructure management, empowering businesses to thrive in the digital era.
                            </p>
                            <div className='col-md-8 col-sm-12'>
                                <Button variant='success' className='hero_btn py-2'>Get a Qoute</Button>
                                <Button  className='px-4 ms-4 ms-sm-2 px-sm-2  explore-btn'><img src="images/hero-explore-icon-btn.png" alt="hero-explore-icon-btn" width="30px" height="30px"/><span className='hero-explore ms-2 fw-bold'>Explore</span></Button>
                            </div>
                        </Col>
                        <Col md="4" className='border hero_images'>
                            <div ref={heroSectRef} className='hero_img'>
                                <img className='hero_img'  src="images/girl-img-hero-section.png" alt="Girl_hero_img" width="230px" height="270px" />
                            </div>
                            {/* <img src="images/pseudo-border-over-hero-image.png" alt="" className="pseudo-border" width="200px" height="260px"/>
                            <img src="images/full-hero-image.png" alt="Ellipse 342"  className='Ellipse-342'/> */}
                        </Col>
                    </motion.div>
                </Col>
            </Row>
        </Container>
      
    </>
  )
}

export default HeroSection
