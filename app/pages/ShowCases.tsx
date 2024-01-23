import { ArrowUpRight, Github } from "iconoir-react"
import React from "react"
import { motion } from "framer-motion"
import { SAMPLE_PROJECTS } from "../assets/constant/projects"

const ShowCases = () => {
    return (
        <main id="showcase" className="px-4 md:px-12 py-5 bg-base-200">
            <h3 className=" text-4xl font-bold  py-3  flex items-center justify-center mb-10">Show case Projects</h3>
            <div className="  grid gap-6 place-content-center  md:grid-cols-3">
                {SAMPLE_PROJECTS.map(project => (
                    <motion.div

                        initial={{
                            opacity: 0.5,
                            scale: 0.9

                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 0.5,
                            duration: .8
                        }}
                        className="container w-full rounded flex p-5 flex-col hover:bg-base-100 justify-center  space-y-3 shadow-sm"
                        key={project.title}>
                        <div>
                            <h1>{project.title}</h1>
                            <p className=" text-primary">{project.status}</p>
                        </div>
                        <div className="flex flex-wrap space-x-1">
                            {project.language.map((language, index) => (
                                <div key={index}><p className="badge badge-outline p-1">{language}</p></div>
                            ))}
                        </div>
                        <div className="flex py-1 justify-around">
                            <a className="btn" href={project.projectURL}><Github /></a>
                            <a className="btn" href={project.websiteURL}><ArrowUpRight /></a>
                        </div>
                    </motion.div>
                ))}

            </div>
        </main >

    )
}

export default ShowCases