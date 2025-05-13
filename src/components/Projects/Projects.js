/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Prescripto",
    description:
      "Prescripto is an online platform connecting patients with doctors, allowing easy appointment booking, secure communication, and online payments",
    url: "https://prescripto-client.vercel.app/",
    code: "https://github.com/Mudassar-Kareem/Prescripto",
    category: "fullstack",
  },
  {
    id: 2,
    title: "MK Store",
    description:
      "MK Store is a simple and user-friendly frontend website for a grocery store, featuring intuitive navigation, product listings, and an engaging design.",
    url: "https://mk-store-chi.vercel.app/",
    code: "https://github.com/Mudassar-Kareem/Mk-store",
    category: "frontend",
  },
  {
    id: 3,
    title: "HR Flow",
    description:
      "HR Flow is an employee attendance system where admins manage employee details and attendance, while employees log in to view their information and attendance records.",
    code: "https://github.com/Mudassar-Kareem/Heflow",
    url:"https://hr-flow-client.vercel.app/",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Zero2Hero",
    description:
      "Zero2Hero is an innovative waste management platform where users report waste, Gemini AI categorizes and analyzes it, and collectors manage its disposal. The site includes a leaderboard to encourage user participation.",
    code: "https://github.com/Mudassar-Kareem/Zero2Hero",
    category: "fullstack",
  },
  {
    id: 5,
    title: "The Fit Club",
    description:
      "This is a platform tailored for fitness enthusiasts, offering dynamic and engaging content.",
    url: "https://fit-club-iota.vercel.app",
    code: "https://github.com/Mudassar-Kareem/FitClub",
    category: "frontend",
  },
  {
   id: 6,
    title: "Smart Serve",
    description:
      "Smart Serve is a MERN-based web app that lets customers scan a restaurant’s QR code to view the menu and place orders without logging in. Restaurants manage orders, menus, and payments, while admins control access by activating or deactivating restaurant accounts.",
    url: "https://smartserve-seven.vercel.app",
    code: "https://github.com/Mudassar-Kareem/smart-serve",
    category: "fullstack",
  },
];

const Projects = () => {
  const projectsNav = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description, code }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a href={url} target="_blank" className="project__button">
                      Demo{" "}
                      <i className="bx bx-right-arrow-alt project__button-icon" />
                    </a>
                    <a href={code} target="_blank" className="project__button">
                      Code{" "}
                      <i className="bx bx-right-arrow-alt project__button-icon" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
