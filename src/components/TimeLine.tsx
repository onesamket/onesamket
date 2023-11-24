import { motion } from "framer-motion"
import { accessability, apollo, astro, code, collabraion, deployment, js, nextjs, nodejs, prisma, react, remix, svelte, tailwind, ts, web } from "../assets/icons"

const TimeLine = () => {
    return (
        <div>
            <ul className="timeline timeline-vertical py-12">

                <li>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box"> Http and Basic Web design </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={web} alt="http and basic web-design " />
                    </div>
                    <hr />
                </li>
                <li>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Web accessibility </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={accessability} alt="Accessibility" />
                    </div>
                    <hr />
                </li>

                <li>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">React & React-native </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={react} />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />

                    <div className="timeline-middle">
                        <img width="25" height="25" src={nodejs} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Node Express Developer</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Prisma with various Database</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={prisma} />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="30" height="30" src={js} alt="js" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Modern Javascript</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="25" height="25" src={astro} alt="astro-js" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">AstroJs framework</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <img width="25" height="25" src={apollo} alt="apollo" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">State Management</motion.div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Typescript </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={ts} alt="ts" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">React-router & Remix </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={remix} alt="Remix" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">NextJs App Router </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={nextjs} alt="nestjs" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Svelte  Framework </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={svelte} alt="svelte" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Tailwind css</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={tailwind} alt="taiwind css " />
                    </div>
                </li>



                <li>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Version Control </motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={code} alt="version control" />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-start timeline-box">Collaboration</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={collabraion} alt="version control" />
                    </div>
                </li>
                <li>
                    <hr />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="timeline-end timeline-box">Deployment</motion.div>
                    <div className="timeline-middle">
                        <img width="25" height="25" src={deployment} alt="Deployment" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TimeLine