import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Services from "./Components/Services/Services";
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />

      <Hero />
      <div className="container">
        <Title title="Welcome To Our Website" />

        <About setPlayState={setPlayState} />

        <Programs />

        <Title title="Why choose Us?" />

        <Title subTitle="TESTIMONIALS" title="What Student Say" />
        <Title title="What Student Say" />

        <Services />
        <Testimonials />
        <Title title="Get In Touch" />

        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
