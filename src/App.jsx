import "./App.css";
import Container from "react-bootstrap/esm/Container";
// import Navbar from "./Components/Navbar/NavbarHeader";
// import Navbar2 from "./Components/Navbar/Navbar2";
// import HeroSection from "./Components/Hero Section/HeroSection";
import HeroSec from "./Components/Hero Section/HeroSec";
import NavbarHeader from "./Components/Navbar/NavbarHeader";
import Gsap from "./Components/animations/GSAP Liberary use/Gsap";
import Gsap2 from "./Components/animations/GSAP Liberary use/Gsap2";
import GsapAnimationBtn from "./Components/animations/GSAP Liberary use/GsapAnimationBtn";
import GsapContext from "./Components/animations/GSAP Liberary use/GsapContext";
import GsapAnimateWithUseEffect from "./Components/animations/typewritter animation/GsapAnimateWithUseEffect";
import Technologies from "./Components/Technologies/Technologies";
import Technology from "./Components/Technologies/Technology";
// import LazyLoadImage from "./Components/TestingComponents/LazyLoadImg";
// import LazyLoadImage from "./TestingComponents/LazyLoadImage";

function App() {
  return (
    <>
          <NavbarHeader />
      

      <Container>
        <HeroSec />
        {/* <Technologies /> */}
        <Technology />
        {/* <Gsap2 /> */}
        {/* <Gsap /> */}
        {/* <GsapAnimationBtn /> */}
        {/* <GsapContext /> */}
        {/* <GsapAnimateWithUseEffect /> */}
        {/* <LazyLoadImage /> */}
      </Container>
      {/* <Navbar2 /> */}
      {/* <HeroSection /> */}
    </>
  );
}

export default App;
