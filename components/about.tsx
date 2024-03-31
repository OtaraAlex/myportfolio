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
        I am a <span className="font-medium">Full Stack Developer</span> based
        in Nairobi, Kenya. I have a keen interest in{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span>{" "}
        I am also familiar with{" "}
        <span className="font-medium">TypeScript and Prisma</span> and always
        eager to learn new technologies. I'm in search of a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="mb-3">
        I graduated from {""}
        <a
          className="underline font-semibold"
          href="https://intranet.alxswe.com/certificates/ERXCf5h8H6"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALX Africa
        </a>
        , a remote learning institution, where studying was project-based and by
        pair programming. We worked on different technologies like{" "}
        <span className="font-medium">
          HTML, CSS, C, JavaScript, Python, React, MySQL and Nginx
        </span>{" "}
        and collaborated with developers across the continent.
      </p>

      <p>
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
      </p>
    </motion.section>
  );
}
