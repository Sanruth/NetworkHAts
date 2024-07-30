// import React from "react";
// import "./Services.css";

// const Services = () => {
//   function toggleContent(event, dotsId, moreId) {
//     const dots = document.getElementById(dotsId);
//     const moreText = document.getElementById(moreId);

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       moreText.style.display = "none";
//       event.target.innerText = "Read more";
//     } else {
//       dots.style.display = "none";
//       moreText.style.display = "inline";
//       event.target.innerText = "Read less";
//     }
//   }

//   return (
//     <div className="service-container">
//       <h1>OUR SERVICES</h1>
//       <div className="services-programs">
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Web Development</h2>
//             <p>
//               Create stunning websites tailored to your needs, blending
//               creativity and functionality seamlessly. Our expert team ensures
//               your online presence stands out, providing an immersive experience
//               across all devices.
//             </p>
//           </div>
//         </div>
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Network Solutions</h2>
//             <p>
//               From seamless connectivity and optimized performance to advanced
//               security measures, we ensure your network infrastructure is
//               reliable, efficient, and scalable.
//             </p>
//           </div>
//         </div>
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Penetration Testing</h2>
//             <p>
//               Through meticulous testing and analysis, we provide actionable
//               insights to strengthen your defenses and safeguard your
//               organization against potential threats. With our penetration
//               testing solutions<span id="dots3">...</span>
//               <span id="more3">
//                 {" "}
//                 you can proactively mitigate risks, enhance security posture,
//                 and maintain the integrity of your critical assets.
//               </span>
//             </p>
//             <button onClick={(event) => toggleContent(event, "dots3", "more3")}>
//               Read more
//             </button>
//           </div>
//         </div>
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Digital Marketing</h2>
//             <p>
//               Elevate your online presence and reach your target audience
//               effectively with our comprehensive digital marketing solutions.
//               Our tailored strategies are designed to enhance brand visibility,
//               build customer loyalty, and accelerate <span id="dots4">...</span>
//               <span id="more4">
//                 business growth in today's competitive digital landscape
//               </span>
//               .
//             </p>
//             <button onClick={(event) => toggleContent(event, "dots4", "more4")}>
//               Read more
//             </button>
//           </div>
//         </div>
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Mobile App Development</h2>
//             <p>
//               Transform your innovative ideas into powerful mobile experiences
//               with our expert mobile app development services. Whether you need
//               a native iOS, Android, or cross-platform solution, our dedicated
//               team of developers crafts customized<span id="dots5">...</span>
//               <span id="more5">
//                 mobile applications tailored to your specific requirements.
//               </span>
//             </p>
//             <button onClick={(event) => toggleContent(event, "dots5", "more5")}>
//               Read more
//             </button>
//           </div>
//         </div>
//         <div className="service-program">
//           <div className="service-caption">
//             <h2>Hosting Services</h2>
//             <p>
//               Our hosting services offer secure and high-performance
//               infrastructure to ensure your website remains accessible and
//               responsive at all times. From shared hosting for small businesses
//               to dedicated servers for enterprise-level applications
//               <span id="dots6">...</span>
//               <span id="more6">
//                 , we provide flexible options to accommodate your growth and
//                 requirements.
//               </span>
//             </p>
//             <button onClick={(event) => toggleContent(event, "dots6", "more6")}>
//               Read more
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [showPrograms, setShowPrograms] = useState(false);

  function toggleContent(event, dotsId, moreId) {
    const dots = document.getElementById(dotsId);
    const moreText = document.getElementById(moreId);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      event.target.innerText = "Read more";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      event.target.innerText = "Read less";
    }
  }

  return (
    <div className="service-container">
      <h5 onClick={() => setShowPrograms(!showPrograms)}>
        OUR SERVICES 
      </h5>
      <button onClick={() => setShowPrograms(!showPrograms)}> Explore More</button>
      <h3 onClick={() => setShowPrograms(!showPrograms)}> Explore Our Courses</h3>
      {showPrograms && (
        <div className="services-programs">
          <div className="service-program">
            <div className="service-caption">
              <h2>Web Development</h2>
              <p>
                Create stunning websites tailored to your needs, blending
                creativity and functionality seamlessly. Our expert team ensures
                your online presence stands out, providing an immersive experience
                across all devices.
              </p>
            </div>
          </div>
          <div className="service-program">
            <div className="service-caption">
              <h2>Network Solutions</h2>
              <p>
                From seamless connectivity and optimized performance to advanced
                security measures, we ensure your network infrastructure is
                reliable, efficient, and scalable.
              </p>
            </div>
          </div>
          <div className="service-program">
            <div className="service-caption">
              <h2>Penetration Testing</h2>
              <p>
                Through meticulous testing and analysis, we provide actionable
                insights to strengthen your defenses and safeguard your
                organization against potential threats. With our penetration
                testing solutions<span id="dots3">...</span>
                <span id="more3">
                  {" "}
                  you can proactively mitigate risks, enhance security posture,
                  and maintain the integrity of your critical assets.
                </span>
              </p>
              <button onClick={(event) => toggleContent(event, "dots3", "more3")}>
                Read more
              </button>
            </div>
          </div>
          <div className="service-program">
            <div className="service-caption">
              <h2>Digital Marketing</h2>
              <p>
                Elevate your online presence and reach your target audience
                effectively with our comprehensive digital marketing solutions.
                Our tailored strategies are designed to enhance brand visibility,
                build customer loyalty, and accelerate <span id="dots4">...</span>
                <span id="more4">
                  business growth in today's competitive digital landscape
                </span>
                .
              </p>
              <button onClick={(event) => toggleContent(event, "dots4", "more4")}>
                Read more
              </button>
            </div>
          </div>
          <div className="service-program">
            <div className="service-caption">
              <h2>Mobile App Development</h2>
              <p>
                Transform your innovative ideas into powerful mobile experiences
                with our expert mobile app development services. Whether you need
                a native iOS, Android, or cross-platform solution, our dedicated
                team of developers crafts customized<span id="dots5">...</span>
                <span id="more5">
                  mobile applications tailored to your specific requirements.
                </span>
              </p>
              <button onClick={(event) => toggleContent(event, "dots5", "more5")}>
                Read more
              </button>
            </div>
          </div>
          <div className="service-program">
            <div className="service-caption">
              <h2>Hosting Services</h2>
              <p>
                Our hosting services offer secure and high-performance
                infrastructure to ensure your website remains accessible and
                responsive at all times. From shared hosting for small businesses
                to dedicated servers for enterprise-level applications
                <span id="dots6">...</span>
                <span id="more6">
                  , we provide flexible options to accommodate your growth and
                  requirements.
                </span>
              </p>
              <button onClick={(event) => toggleContent(event, "dots6", "more6")}>
                Read more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

