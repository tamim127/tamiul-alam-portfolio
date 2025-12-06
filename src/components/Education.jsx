import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Education.css";

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );

      gsap.to(card, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="education-Section" id="education">
      <div className=" contactGrad">
        <h2 className="education-title">Educational Qualification</h2>

        <div className="education-container">
          {[
            {
              degree: "Diploma in Computer Science & Technology",
              institute:
                "Rajshahi Haji Abul Hossain Institute of Technology (HABHIT)",
              session: "2022 – 2026",
              result: "Running",
            },
            {
              degree: "Secondary School Certificate (SSC)",
              institute: "Nayagola High School",
              session: "2019 – 2020",
              result: "GPA — 4.56",
            },
          ].map((item, i) => (
            <div
              className="edu-card"
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <h3>{item.degree}</h3>
              <p className="institute">{item.institute}</p>
              <p className="session">{item.session}</p>
              <p className="result">Result: {item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
