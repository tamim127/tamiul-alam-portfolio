import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Flixo Cart - Online Shopping",
      description:
        "Flixo cart is A modern, responsive e-commerce web application built with Next.js (app router) this project demonstrates a polished UI, protected pages with authentication, and a simple Express.js backend for product management.",
      skills: [
        "HTML",
        "Tailwind",
        "Firebase",
        "NextJs",
        "MongoDB",
        "NodeJs",
        "ExpressJs",
        "Vercel",
      ],
      liveLink: "https://filxo-cart.vercel.app/",
      githubLink: "https://github.com/tamim127/flixo-cart-client.git",
      position: "left",
    },
    {
      id: 2,
      number: "02",
      title: "Utility Bills Management System",
      description:
        "The Utility Bill Management System is a MERN stack web application that allows users to view, manage, and pay monthly utility bills such as Electricity, Gas, Water, and Internet. Users can securely log in, pay only current month bills, and update their payment information. The system also provides a responsive UI, search and filter functionalities, and the ability to download PDF reports of paid bills.",
      skills: [
        "HTML",
        "Tailwind",
        "Javascript",
        "ReactJs",
        "Firebase",
        "MongoDB",
        "NodeJs",
        "ExpressJs",
        "Netlify",
      ],
      liveLink: "https://utility-bills-management-system.netlify.app/",
      githubLink:
        "https://github.com/tamim127/bill-management-system-client.git",
      position: "right",
    },
    {
      id: 3,
      number: "03",
      title: "Kiddy Toy Store ",
      description:
        "KiddyToy Store is an educational & kid-friendly online toy marketplace built using React, Firebase Authentication, Tailwind CSS, and Context API. Users can register, explore toys, add toys, update their own toys, and manage them securely with protected routes",
      skills: [
        "HTML",
        "Tailwind",
        "Javascript",
        "ReactJs",
        "Firebase",
        "Netlify",
      ],
      liveLink: "https://kiddy-toy-store.netlify.app/",
      githubLink: "https://github.com/tamim127/kiddy-toy-store.git",
      position: "left",
    },
    {
      id: 4,
      number: "04",
      title: "Hero Apps Store",
      description:
        "Hero App is a modern, intuitive application designed to boost productivity and streamline daily tasks. Featuring a sleek UI, seamless navigation, and robust functionality, the app enables users to efficiently manage notes, schedules, and workflows. It delivers a consistent, responsive experience across both desktop and mobile devices.",
      skills: ["ReactJs", "HTML", "Javascript", "Tailwind"],
      liveLink: "https://react-hero-apps-store-bd.netlify.app/",
      githubLink: "https://github.com/tamim127/react-hero-app.git",
      position: "right",
    },
  ];

  const getSkillImage = (skill) => {
    const skillMap = {
      HTML: "/stack/HTML.png",
      CSS: "/stack/CSS.png",
      Javascript: "/stack/Javascript.svg",
      Tailwind: "/stack/Tailwind.png",
      Vercel: "/stack/Vercel.svg",
      NextJs: "/stack/NextJsCircle.png",
      MongoDB: "/stack/MongoDB.svg",
      NodeJs: "/stack/NodeJs.svg",
      ReactJs: "/stack/React.png",
      ExpressJs: "/stack/Express.png",
      Firebase: "/stack/firebase.png",
      Netlify: "/stack/netlify-logo-png.png",
    };
    return skillMap[skill] || "";
  };

  return (
    <section id="projects" className="projectSection">
      <div className="outerSectionDiv">
        <h2 className="projectTitle">Projects</h2>
        <div className="projectContainer">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projectCard"
              id={`project${project.id}`}
            >
              <div
                className={`projectNumber ${
                  project.position === "left" ? "rightNumber" : "leftNumber"
                }`}
              >
                {project.number}
              </div>
              <div
                className={`projectContent ${
                  project.position === "left"
                    ? "leftProjectContent"
                    : "rightProjectContent"
                }`}
              >
                <div className="projectSkillsContainer">
                  {project.skills.map((skill, idx) => (
                    <img
                      key={idx}
                      className="projectSkill"
                      src={getSkillImage(skill)}
                      alt={skill}
                    />
                  ))}
                </div>
                <h2 className="projectHeading">{project.title}</h2>
                <p className="projectSubHeading">{project.description}</p>
                <div className="btnGroup">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="projectBtn">LIVE LINK</button>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        title="GitHub Link"
                        className="fa-brands fa-github icon"
                      ></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
