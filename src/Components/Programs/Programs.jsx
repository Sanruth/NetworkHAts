import React, { useEffect, useState } from "react";
import "./Programs.css";
import program_1 from "../../assets/java.jpg";
import program_2 from "../../assets/python.jpg";
import program_3 from "../../assets/c.jpg";
import program_4 from "../../assets/dart.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const paragraphs = [
    "At Network Hats, we understand that you have many options when it comes to IT solutions and trainings. So, why should you choose us?",
    "We take the time to understand your unique needs and challenges, and then we tailor our solutions to meet your specific requirements.",
    "From project delivery and ongoing support, we ensure reliable, high-quality products and services you can trust.",
    "We believe that quality services should be accessible to everyone. So we offer competitive pricing without compromising on the quality.",
    "We aim to surpass expectations with excellent service, timely communication, and personalized attention for your satisfaction."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    
    <div className="top">
      <div>
        <h2>Our Courses</h2>
      </div>
      <h1>PROGRAMMING</h1>
      <div className="programs">
        <div className="program">
          {/* <img src={program_icon_1} alt="Java"/> */}
        
          <div className="caption">
            <h2>Java</h2>
            <p>
              General-purpose applications, RESTful and SOAP-based web services,
              Java Database with Core and Advance Java.
            </p>
          </div>
        </div>
        <div className="program">
          {/* <img src={program_icon_2} alt="Python" /> */}
          <div className="caption">
            <h2>Python</h2>
            <p>
              Python programming language for web development, data analysis,
              artificial intelligence, and more.
            </p>
          </div>
        </div>
        <div className="program">
          {/* <img src={program_icon_3} alt="Dart" /> */}
          <div className="caption">
            <h2>Dart</h2>
            <p>
              Dart, a client-optimized programming language for building apps,
              with a focus on UI development and high performance.
            </p>
          </div>
        </div>
        <div className="program">
          {/* <img src={program_icon_3} alt="C/C++" /> */}
          <div className="caption">
            <h2>C/C++</h2>
            <p>
              These for system/software development, game development, and
              applications requiring real-time processing and resource
              management.
            </p>
          </div>
        </div>
      </div>

      <h1>DEVELOPMENT</h1>
      <div className="programs">
        <div className="program">
          <div className="caption">
            <h2>Java Complete Training</h2>
            <p>
              A complete Java course, combined with the Spring Boot framework for
              training developers to build robust, scalable, and production-ready
              applications efficiently with minimal boilerplate code.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>MERN STACK</h2>
            <p>
              Full-stack development course on MERN stack (MongoDB, Express, React,
              Node) for building web applications, offering an efficient and
              cohesive way to develop both the frontend and backend.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>Django Complete Training</h2>
            <p>
              Full-stack development course on Python, along with the Django
              framework for building secure, scalable, and maintainable web
              applications quickly and efficiently.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>Flutter</h2>
            <p>
              A complete course on Flutter for developing cross-platform
              applications from a single codebase for the web, Fuchsia, Android,
              iOS, Linux, macOS, and Windows.
            </p>
          </div>
        </div>
      </div>

      <h1>NETWORK & SECURITY</h1>
      <div className="programs">
        <div className="program">
          <div className="caption">
            <h2>CCNA</h2>
            <p>
              Cisco Certified Network Associate, an associate-level Cisco Career
              certification for the ability to install, configure, operate, and
              troubleshoot medium-sized routed and switched networks.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>NETWORK +</h2>
            <p>
              CompTIA Network+ course for the essential knowledge and skills needed
              to confidently design, configure, manage, and troubleshoot wired and
              wireless networks.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>SECURITY++</h2>
            <p>
              CompTIA Security+ course for the baseline skills required to perform
              core security functions and pursue an IT security career.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>ETHICAL HACKING</h2>
            <p>
              Ethical hacking for website security involving identifying and
              addressing vulnerabilities through penetration testing and security
              assessments to prevent cyber threats and unauthorized access.
            </p>
          </div>
        </div>
      </div>

      <h1>DATA SCIENCE & AI</h1>
      <div className="programs">
        <div className="program">
          <div className="caption">
            <h2>Data Science with Python</h2>
            <p>
              Using Python programming language and various libraries such as NumPy,
              Pandas, Matplotlib, and Scikit-learn to analyze, visualize, and
              extract insights from data, encompassing tasks like machine learning
              algorithms implementation.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>Python with AI</h2>
            <p>
              Using Python's extensive libraries and frameworks such as TensorFlow,
              PyTorch, Keras, and scikit-learn to develop and deploy AI
              applications, including machine learning models, natural language
              processing, and reinforcement learning.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>Power BI</h2>
            <p>
              Course on Power BI, a business analytics tool by Microsoft that
              enables users to visualize and share insights from their data through
              interactive dashboards and reports.
            </p>
          </div>
        </div>
      </div>

      <h1>CLOUD</h1>
      <div className="programs">
        <div className="program">
          <div className="caption">
            <h2>AWS Cloud Practitioner</h2>
            <p>
              AWS Cloud Practitioner certification to validate foundational cloud
              knowledge and skills, covering AWS Cloud concepts, services, security,
              and pricing.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>AWS Developer Associate</h2>
            <p>
              AWS Developer Associate certification to validate expertise in
              developing and maintaining AWS applications, focusing on key AWS
              services, application deployment, and best practices for security and
              scalability.
            </p>
          </div>
        </div>
        <div className="program">
          <div className="caption">
            <h2>DevOps</h2>
            <p>
              DevOps, a software development approach that combines software
              development (Dev) with IT operations (Ops), aiming to shorten the
              systems development life cycle and provide continuous delivery with
              high software quality.
            </p>
          </div>
        </div>
      </div>

      <div className="content0">
        <h1>Why Choose Us?</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={index === activeIndex ? "active" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Programs;

