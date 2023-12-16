import React from "react";
import { motion } from "framer-motion";
import { accessability, apollo, astro, authentication, code, collabraion as collaboration, deployment, ionic, js, nextjs, nodejs, prisma, react, remix, svelte, tailwind, ts, web } from "../../assets/icons";

const TimeLine = () => {
    const items = [
        { label: "Http and Basic Web design", icon: web, dataTip: "http" },
        { label: "Web accessibility", icon: accessability, dataTip: "accessibility" },
        { label: "Tailwind css", icon: tailwind, dataTip: "Tailwind css" },
        { label: "Modern Javascript", icon: js, dataTip: "Javascript" },
        { label: "Typescript", icon: ts, dataTip: "Typescript" },
        { label: "React & React-native", icon: react, dataTip: "React" },
        { label: "Ionic Framework", icon: ionic, dataTip: "Ionic" },
        { label: "AstroJs framework", icon: astro, dataTip: "Astro" },
        { label: "React-router & Remix", icon: remix, dataTip: "Remix" },
        { label: "NextJs App Router", icon: nextjs, dataTip: "NextJS" },
        { label: "Svelte Framework", icon: svelte, dataTip: "Svelte" },
        { label: "Redux,TanStack,Apollo client ", icon: apollo, dataTip: "apollo" },
        { label: "Node Express Developer", icon: nodejs, dataTip: "NodeJs" },
        { label: "Prisma Mongoose Sequelize", icon: prisma, dataTip: "Prisma" },
        { label: "Security", icon: authentication, dataTip: "security" },
        { label: "Version Control", icon: code, dataTip: "Git" },
        { label: "Collaboration", icon: collaboration, dataTip: "Github workflow" },
        { label: "Deployment", icon: deployment, dataTip: "Deployment" },
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
                            className={index % 2 === 0 ? "timeline-start timeline-box" : "timeline-end timeline-box"}
                        >
                            {item.label}
                        </motion.div>
                        <div className=" tooltip timeline-middle" data-tip={item.dataTip}>
                            <img className="cursor-pointer" width="25" height="25" src={item.icon} alt={item.label} />
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimeLine;
