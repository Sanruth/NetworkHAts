// import React from "react";
// import "./About.css";
// import about_img from "../../assets/vision1.jpg";
// import about1_img from "../../assets/mission112.avif";
// import play_icon from "../../assets/play-icon.png";
// import Footer from "../Footer/Footer.jsx";

// const About = ({ setPlayState }) => {
//   return (
//     <>
//       <div className="about">
//         <div className="about-left">
//           <img src={about_img} alt="" className="about-img" />
//           <img
//             src={play_icon}
//             alt=""
//             className="play-icon"
//             onClick={() => {
//               setPlayState(true);
//             }}
//           />
//         </div>
//         <h2>OUR VISION</h2>
//         <div className="about-right">
//           <p>
//             {" "}
//             Our vision is to be a leading force in shaping the future of digital
//             transformation. We aim to be the trusted partner of choice for
//             businesses seeking to thrive in the rapidly evolving digital
//             landscape.
//           </p>
//         </div>
//       </div>
//       <div className="about">
//         <div className="about-left">
//           <img src={about_img} alt="" className="about-img" />
//           <img
//             src={play_icon}
//             alt=""
//             className="play-icon"
//             onClick={() => {
//               setPlayState(true);
//             }}
//           />
//         </div>
//         <h2>OUR VISION</h2>
//         <div className="about-right">
//           <p>
//             {" "}
//             Our vision is to be a leading force in shaping the future of digital
//             transformation. We aim to be the trusted partner of choice for
//             businesses seeking to thrive in the rapidly evolving digital
//             landscape.
//           </p>
//         </div>
//       </div>
//       <div className="about">
//         <div className="about-left">
//           <img src={about_img} alt="" className="about-img" />

//         </div>
//         <h2>OUR VISION</h2>
//         <div className="about-right">
//           <p>
//             {" "}
//             Our vision is to be a leading force in shaping the future of digital
//             transformation. We aim to be the trusted partner of choice for
//             businesses seeking to thrive in the rapidly evolving digital
//             landscape.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default About;

import React from "react";
import "./About.css";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <h4>WELCOME TO OUR WEBSITE</h4>

      <div className="path">
        <div className="path-box">
          <img src="src/assets/mission1.avif" alt="" />
          {/* <img src="src/assets/vission10.png" alt="" /> */}

          <h3>OUR VISSION</h3>
          <p>
            Our vision is to be a leading force in shaping the future of digital
            transformation. We aim to be the trusted partner of choice for
            businesses seeking to thrive in the rapidly evolving digital
            landscape.
          </p>
        </div>
        <div className="path-box">
          <img src="src/assets/vision1.jpg" alt="" />
          {/* <img src="src/assets/mission20.png" alt="" /> */}
          <img
            src={play_icon}
            alt=""
            className="play-icon"
            onClick={() => {
              setPlayState(true);
            }}
          />
          <h3>OUR MISSION</h3>
          <p>
            Our mission is to empower businesses and individuals to thrive in
            the digital world. We strive to deliver innovative solutions that
            exceed expectations, drive growth, and make a positive impact on our
            clients' success.
          </p>
        </div>
        <div className="path-box">
          <img src="src/assets/value1.avif" alt="" />
          {/* <img src="src/assets/values10.png" alt="" /> */}
          {/* <img src="src/assets/values20.png" alt="" /> */}
          <h3>OUR VALUES</h3>
          <p>
            Our values are the foundation of everything we do. Integrity,
            Innovation, Collaboration, and Customer Success are at the core of
            our identity and guide our actions every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
