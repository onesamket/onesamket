"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  accessability,
  apollo,
  authentication,
  code,
  collaboration,
  deployment,
  js,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  prisma,
  react,
  remix,
  sql,
  svelte,
  tailwind,
  tanstack,
  ts,
  web,
  github,
  zustand,
  rest,
  graphql,
  astro,
  expo,
} from "../../assets/icons";
import Image from "next/image";

const TimeLine = () => {
  const items = [
    { label: "Http and Basic Web design", icon: web, dataTip: "http" },
    {
      label: "Web accessibility",
      icon: accessability,
      dataTip: "accessibility",
    },
    { label: "Tailwind css 🎉", icon: tailwind, dataTip: "Tailwind css" },
    { label: "Modern Javascript", icon: js, dataTip: "Javascript" },
    { label: "Typescript 🥰", icon: ts, dataTip: "Typescript" },
    { label: "React ❤️", icon: react, dataTip: "React" },
    { label: "Expo 💪", icon: expo, dataTip: "React Native " },
    { label: "Svelte & SvelteKit", icon: svelte, dataTip: "Svelte Framework" },
    { label: "Astro Framework", icon: astro, dataTip: "Astro Framework" },
    {
      label: "Tanstack Query",
      icon: tanstack,
      dataTip:
        "Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular",
    },
    {
      label: "Zustand ",
      icon: zustand,
      dataTip: "Global state management library for React applications.",
    },
    {
      label: "Apollo Client",
      icon: apollo,
      dataTip:
        "JavaScript library for managing state and interacting with a GraphQL API in client-side applications.",
    },
    {
      label: "React-router & Remix",
      icon: remix,
      dataTip:
        "Remix is a full stack web framework. used to build better websites.",
    },
    {
      label: "NextJs",
      icon: nextjs,
      dataTip:
        "Power-full React Full-stack framework used to build blazing fast applications. ",
    },
    {
      label: "Node Express Developer",
      icon: nodejs,
      dataTip:
        "JavaScript runtime environment that allows to execute JavaScript code on the server side",
    },
    {
      label: "NestJs framework",
      icon: nestjs,
      dataTip:
        "NestJS is a framework for building server-side applications with Node.js",
    },
    {
      label: "SQL Databases",
      icon: sql,
      dataTip: "Knowledge on Postgres,MySQL and SQLite.",
    },
    {
      label: "Mongo Database",
      icon: mongodb,
      dataTip: "Non-Relational Database",
    },
    {
      label: "Prisma & Mongoose",
      icon: prisma,
      dataTip: "Prisma-Power-full type-safe Database ORM for nodeJS projects.",
    },
    {
      label: "REST API",
      icon: rest,
      dataTip:
        "REST (Representational State Transfer) is an architectural style for designing networked applications",
    },
    {
      label: "GraphQL",
      icon: graphql,
      dataTip:
        "GraphQL used to  ask  the exact data from a server, and receive the data we need.",
    },
    {
      label: "Security",
      icon: authentication,
      dataTip: "Authorization and authentication",
    },
    {
      label: "Version Control",
      icon: code,
      dataTip: "Git and Github workflow.",
    },
    {
      label: "Collaboration",
      icon: collaboration,
      dataTip: "Collaboration with other developers.",
    },
    {
      label: "Deployment",
      icon: deployment,
      dataTip: " Application deployment on different kinds server.   ",
    },
  ];

  return (
    <div>
      <ul className="timeline timeline-vertical py-12">
        {items.map((item, index) => (
          <li key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={
                index % 2 === 0
                  ? "timeline-start timeline-box"
                  : "timeline-end timeline-box"
              }
            >
              {item.label}
            </motion.div>
            <div
              className=" tooltip tooltip-info timeline-middle"
              data-tip={item.dataTip}
            >
              <Image
                className="cursor-pointer"
                width="25"
                height="25"
                src={item.icon}
                alt={item.label}
              />
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
