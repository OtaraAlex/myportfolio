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
        based in Nairobi, Kenya. I specialize in{" "}
        <span className="font-medium">
          React, Next.js, React Native (Expo), Node.js, JavaScript and
          TypeScript
        </span>
        , with a solid grasp of <span className="font-medium">Prisma</span>. I
        use{" "}
        <span className="font-medium">
          MongoDB, Neon Serverless, and Appwrite
        </span>{" "}
        to optimize backend systems and{" "}
        <span className="font-medium">AI-powered tools</span> to enhance
        workflows and user experiences.
      </p>

      <p className="mb-3">
        I am a graduate of{" "}
        <a
          className="underline font-semibold"
          href="https://intranet.alxswe.com/certificates/ERXCf5h8H6"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALX Africa
        </a>
        , a project-based remote learning program emphasizing pair programming
        and hands-on mastery of{" "}
        <span className="font-medium">
          HTML, CSS, C, JavaScript, Python, React, MySQL, and Nginx.
        </span>{" "}
        Collaborating with developers across Africa strengthened my technical
        and teamwork skills.
      </p>

      <p>
        I am actively seeking a{" "}
        <span className="font-medium">full-time software developer role</span>{" "}
        to contribute, grow, and build impactful solutions.
      </p>

      {/* <p>
        I am passionate about teaching and mentoring. I run a{" "}
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
        where I share technical insights and experiences.
      </p> */}
    </motion.section>
  );
}
