import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    "/stack/HTML.png",
    "/stack/CSS.png",
    "/stack/Javascript.svg",
    "/stack/React.png",
    "/stack/NodeJs.svg",
    "/stack/next.png",
    "/stack/Tailwind.png",
    "/stack/Bootstrap.svg",
    "/stack/MaterialUI.svg",
    "/stack/Express.png",
    "/stack/Git.svg",
    "/stack/firebase.png",
    "/stack/netlify-logo-png.png",
    "/stack/MongoDB.svg",
    "/stack/postman-icon.png",
    "/stack/github.png",
    "/stack/thunder-clients.png",
    "/stack/figma-.png",
    "/stack/pixso.png",
    "/stack/Bash.svg",
    "/stack/ChartJs.svg",
    "/stack/Vercel.svg",
    "/stack/Github.svg",
    "/stack/rest api .png",
    "/stack/react-router.png",
    "/stack/nextjs-original.png",
  ];

  return (
    <section id="skills">
      <div className="outerSectionDiv skillContainer">
        <div className="leftSkillContainer">
          <h2 className="skillHeading">
            Me and <br />
            MyTech Stack
          </h2>
          <div className="skillSubHeading">
            <p>
              Hello! My name is{" "}
              <span className="font-semibold text-purple-600">Tamiul Alam</span>{" "}
              and I am a Full-Stack MERN Developer from Rajshahi, Bangladesh. I
              am passionate about creating efficient, modern, and scalable web
              applications while continuously learning and improving my skills
              in software development.
            </p>
            <p>
              I have acquired strong technical knowledge through my diploma in
              Computer Science and Technology at Rajshahi Haji Abul Hossain
              Institute of Technology (HABHIT). My expertise includes
              proficiency in web development technologies such as
              MongoDB,Firebase, Express.js, React.js, Next.js, Node.js,
              JavaScript, HTML, CSS, and Tailwind CSS.
            </p>
            <p>
              As a technology enthusiast, I am always exploring new tools,
              frameworks, and methodologies to build innovative and effective
              solutions. I enjoy solving complex problems and bringing ideas to
              life through code.
            </p>
          </div>
        </div>

        <div className="rightSkillContainer">
          <div className="space2">
            <video autoPlay muted loop>
              <source src="/stack/cards-video.webm" type="video/webm" />
            </video>
          </div>

          {skills.map((skill, idx) => (
            <img key={idx} src={skill} alt="skill" className="skillsLogo" />
          ))}
        </div>
        <div className="skillFadedText absolute">Skills</div>
      </div>
    </section>
  );
};

export default Skills;
