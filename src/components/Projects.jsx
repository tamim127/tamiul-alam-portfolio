import React from "react";
import "../styles/Projects.css";

import HTML from "../../stack/HTML.png";
import Javascript from "../../stack/Javascript.svg";
import ReactJs from "../../stack/React.png";
import NodeJs from "../../stack/NodeJs.svg";
import Tailwind from "../../stack/Tailwind.png";
import ExpressJs from "../../stack/Express.png";
import Firebase from "../../stack/firebase.png";
import Netlify from "../../stack/netlify-logo-png.png";
import MongoDB from "../../stack/MongoDB.svg";
import Vercel from "../../stack/Vercel.svg";
import NextJS from "../../stack/nextjs-original.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Flixo Cart - Online Shopping",
      description:
        "Flixo Cart is a responsive e-commerce app built with Next.js, featuring a polished UI, authentication-protected pages, and a simple Express.js backend for product management.",
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
        "The Utility Bill Management System is a MERN app for managing and paying monthly bills (Electricity, Gas, Water, Internet) with secure login, current-month payments, search & filter, and PDF report download.",
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
        "KiddyToy Store is a kid-friendly online toy marketplace built with React, Firebase, Tailwind, and Context API. Users can register, explore, add, and manage toys securely.",
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
        "Hero App is a productivity app with a sleek UI and seamless navigation, allowing users to efficiently manage notes, schedules, and workflows on both desktop and mobile.",
      skills: ["ReactJs", "HTML", "Javascript", "Tailwind"],
      liveLink: "https://react-hero-apps-store-bd.netlify.app/",
      githubLink: "https://github.com/tamim127/react-hero-app.git",
      position: "right",
    },
  ];

  const getSkillImage = (skill) => {
    const skillMap = {
      HTML: HTML,
      Tailwind: Tailwind,
      Javascript: Javascript,
      ReactJs: ReactJs,
      NodeJs: NodeJs,
      ExpressJs: ExpressJs,
      Firebase: Firebase,
      Netlify: Netlify,
      MongoDB: MongoDB,
      Vercel: Vercel,
      NextJs: NextJS,
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
