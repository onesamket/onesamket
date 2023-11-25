import React from "react";
import { motion } from "framer-motion";
import { accessability, apollo, astro, code, collabraion, deployment, js, nextjs, nodejs, prisma, react, remix, svelte, tailwind, ts, web } from "../assets/icons";

const TimeLine = () => {
    const items = [
        { label: "Http and Basic Web design", icon: web },
        { label: "Web accessibility", icon: accessability },
        { label: "React & React-native", icon: react },
        { label: "Node Express Developer", icon: nodejs },
        { label: "Prisma with various Database", icon: prisma },
        { label: "Modern Javascript", icon: js },
        { label: "AstroJs framework", icon: astro },
        { label: "State Management", icon: apollo },
        { label: "Typescript", icon: ts },
        { label: "React-router & Remix", icon: remix },
        { label: "NextJs App Router", icon: nextjs },
        { label: "Svelte Framework", icon: svelte },
        { label: "Tailwind css", icon: tailwind },
        { label: "Version Control", icon: code },
        { label: "Collaboration", icon: collabraion },
        { label: "Deployment", icon: deployment },
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
                        <div className="timeline-middle">
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
