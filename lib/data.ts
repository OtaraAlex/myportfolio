import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import snapvistaImg from "../public/Snapvista.png";
import eventlyImg from "../public/Evently.png";
import blogImg from "../public/blog.jpeg";
import readblendrImg from "../public/ReadBlendr.png";
import techmartImg from "../public/techmart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Remote, Nairobi, KE",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Jan. 2024 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Upwork, Nairobi, KE",
    description:
      "I worked as a front-end developer for various clients. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct. 2023 - Jan. 2024",
  },
  {
    title: "Graduated bootcamp",
    location: "Nairobi, KE",
    description:
      "I graduated after 12 months of studying with ALX Africa. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug. 2022- Sept. 2023",
  },  
] as const;

export const projectsData = [
  {
    title: "ReadBlendr",
    description:
      "A platform for authors to publish and sell their books. It also acts as a marketplace for readers to buy and read.",
    tags: ["Next.js", "Tailwind", "MongoDB",  "Typescript", "Clerk", "Stripe"],
    imageUrl: readblendrImg,
    projectUrl: "https://readblendr.vercel.app",
  },
  {
    title: "SnapVista",
    description:
      "A Software-as-a-Service application with AI features and a payments & credits system where one can manipulate images.",
    tags: ["Cloudinary AI", "Next.js", "Tailwind", "MongoDB", "Clerk", "Stripe"],
    imageUrl: snapvistaImg,
    projectUrl: "https://snapvistaa.vercel.app",
  },
  {
    title: "Evently",
    description:
      "An event management application where one can create and book events. Events are filtered by category.",
    tags: ["Next.js", "Tailwind", "MongoDB",  "Typescript", "Clerk", "Stripe"],
    imageUrl: eventlyImg,
    projectUrl: "https://eventlyyy.vercel.app/",
  },
  {
    title: "My Blog",
    description:
      "This is a blog app with admin dashboard that allows users create, publish, and manage articles.",
    tags: ["MERN Stack", "Redux", "Tailwind", "Firebase"],
    imageUrl: blogImg,
    projectUrl: "https://mernbloggg.onrender.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git and GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
