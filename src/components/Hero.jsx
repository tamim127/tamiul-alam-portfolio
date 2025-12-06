import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import "../styles/Hero.css";
import Swal from "sweetalert2";
import heroVideo from "../../stack/blackHoleee-2.webm"


const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const fadedTextRef = useRef(null);

  // Typed.js effect
  useEffect(() => {
    const typed = new Typed(".role", {
      strings: [
        "a Web Developer",
        "a Full-Stack Developer",
        "a MERN Stack Engineer",
        "a Frontend Developer",
        "a UI/UX Enthusiast",
        "TAMIUL ALAM",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    return () => typed.destroy();
  }, []);

  // GSAP animations
  useEffect(() => {
    // Floating card
    gsap.to(cardRef.current, {
      y: -25,
      rotationY: 10,
      rotationZ: 2,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Faded text background
    gsap.to(fadedTextRef.current, {
      scale: 1.08,
      rotation: 2,
      duration: 10,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Typed.js text subtle pulse
    gsap.fromTo(
      ".role",
      { scale: 0.95, opacity: 0.7 },
      {
        scale: 1.05,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    // Floating particles
    const particles = [];
    const heroEl = heroRef.current;

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement("div");
      particle.className = "gsap-particle";
      heroEl.appendChild(particle);
      particles.push(particle);

      gsap.fromTo(
        particle,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * 600,
          opacity: 0,
        },
        {
          x: `+=${Math.random() * 150 - 75}`,
          y: `+=${Math.random() * 150 - 75}`,
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 6 + 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }

    return () => particles.forEach((p) => p.remove());
  }, []);

  const handleResumeDownload = () => {
    // Sweet Alert
    Swal.fire({
      icon: "success",
      title: "Resume Download Successfully!",
      confirmButtonColor: "#700343",
    });

    // Direct download
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1E45bnOwAHjCIgJNPCXxJl5fTVgqpgTz-";
    link.download = "Tamiul_Alam_Resume.pdf"; // Optional: filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="hero-section" ref={heroRef}>
      <div className="space ">
        <video autoPlay muted loop>
          <source src={heroVideo} type="video/webm" />
        </video>
      </div>

      <div className="hero-section">
        <div className="hero-section-left">
          <div className="hero-section-heading">
            <span>Assalamu Alaikum </span>
          </div>
          <div className="hero-section-sub-heading">
            I am &lt;<span className="role"></span>/&gt;
          </div>
          <div className="hero-section-description">
            I'm a Full-Stack MERN Developer, and this is my portfolio website.
            Here you’ll learn about my journey, skills, and the projects I’ve
            built as a web developer.
          </div>
          <div className="flex flex-col md:flex-row md:gap-5">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=eishatahmedtamim70@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              HIRE TAMIUL
            </a>
            <button onClick={handleResumeDownload} className="btn">
              Download Resume
            </button>
          </div>
        </div>

        <div className="hero-section-right" ref={cardRef}>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide"></div>
              <div className="backSide">
                <p className="title">TAMIUL ALAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faded-text absolute" ref={fadedTextRef}>
        Tamiul Alam
      </div>
    </div>
  );
};

export default Hero;
