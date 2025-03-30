"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a{" "}
        <span className="font-medium">freelance Web and Mobile Developer</span>{" "}
        based in Nairobi, Kenya. My expertise lies in{" "}
        <span className="font-medium">
          React, Next.js, React Native(Expo), Node.js and TypeScript,
        </span>{" "}
        alongside a solid understanding of{" "}
        <span className="font-medium">Prisma</span>. I also leverage <span className="font-medium">AI-powered
        tools and methodologies</span> to optimize workflows, enhance user experiences,
        and create intelligent solutions tailored to modern demands.
      </p>

      <p>
        Besides development frameworks, I utilize tools like{" "}
        <span className="font-medium">
          MongoDB, Neon Serverless and Appwrite
        </span>{" "}
        to streamline backend systems and boost project efficiency.
      </p>

      <p className="mb-3">
        I am a proud graduate of {""}
        <a
          className="underline font-semibold"
          href="https://intranet.alxswe.com/certificates/ERXCf5h8H6"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALX Africa
        </a>
        , a rigorous, project-based remote learning institution. It emphasized
        collaborative pair programming and hands-on mastery of various
        technologies, including{" "}
        <span className="font-medium">
          HTML, CSS, C, JavaScript, Python, React, MySQL and Nginx.
        </span>{" "}
        Working with developers across the continent enriched my skills and
        deepened my appreciation for teamwork in tech.
      </p>

      <p>
        I am actively seeking a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>{" "}
        where I can contribute my skills, grow within a dynamic team, and create
        meaningful solutions.
      </p>

      {/* <p>
        Through my experiences, I discovered my passion for teaching and
        mentoring others. Currently, I run a{" "}
        <span className="font-semibold">
          <a
            className="underline"
            href="https://blog.alexotara.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>{" "}
        </span>
        where I write technical articles and personal experiences.
      </p> */}
    </motion.section>
  );
}
