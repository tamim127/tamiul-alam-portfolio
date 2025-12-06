import React from "react";
import "../styles/Skills.css";
import HTML from "../../stack/HTML.png";
import CSS from "../../stack/CSS.png";
import Javascript from "../../stack/Javascript.svg";
import ReactImg from "../../stack/React.png";
import NodeJs from "../../stack/NodeJs.svg";
import Next from "../../stack/next.png";
import Tailwind from "../../stack/Tailwind.png";
import Bootstrap from "../../stack/Bootstrap.svg";
import MaterialUI from "../../stack/MaterialUI.svg";
import Express from "../../stack/Express.png";
import Git from "../../stack/Git.svg";
import Firebase from "../../stack/firebase.png";
import Netlify from "../../stack/netlify-logo-png.png";
import MongoDB from "../../stack/MongoDB.svg";
import Postman from "../../stack/postman-icon.png";
import Github from "../../stack/Github.svg";
import ThunderClient from "../../stack/thunder-clients.png";
import Figma from "../../stack/figma-.png";
import Pixso from "../../stack/pixso.png";
import Bash from "../../stack/Bash.svg";
import ChartJs from "../../stack/ChartJs.svg";
import Vercel from "../../stack/Vercel.svg";
import GithubAlt from "../../stack/Github.svg";
import RestAPI from "../../stack/rest api .png";
import ReactRouter from "../../stack/react-router.png";
import NextJS from "../../stack/nextjs-original.png";

const Skills = () => {
   const skills = [
    HTML,
    CSS,
    Javascript,
    ReactImg,
    NodeJs,
    Next,
    Tailwind,
    Bootstrap,
    MaterialUI,
    Express,
    Git,
    Firebase,
    Netlify,
    MongoDB,
    Postman,
    Github,
    ThunderClient,
    Figma,
    Pixso,
    Bash,
    ChartJs,
    Vercel,
    GithubAlt,
    RestAPI,
    ReactRouter,
    NextJS,
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
               <span className="font-semibold text-purple-600">
                 Tamiul Alam
               </span>{" "}
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
