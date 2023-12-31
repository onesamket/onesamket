import { ArrowUpRight, Github } from "iconoir-react"
import { SAMPLE_PROJECTS } from "../assets/constant/projects"
import React from "react"

const ShowCases = () => {
    return (
        <main id="showcase" className="px-12 py-5 bg-base-200">
            <h3 className=" text-4xl font-bold  py-3  flex items-center justify-center mb-10">Show case Projects</h3>
            <div className="px-12 grid  gap-6 place-content-center  md:grid-cols-3">
                {SAMPLE_PROJECTS.map(project => (
                    <div className="flex p-5 flex-col hover:bg-base-100 justify-center  space-y-3 dark:shadow-md" key={project.projectURL}>
                        <h1>{project.title}</h1>
                        <div className="flex flex-wrap space-x-1">
                            {project.language.map((language, index) => (
                                <div key={index}><p className="badge badge-outline p-1">{language}</p></div>
                            ))}
                        </div>
                        <div className="flex py-1 justify-around">
                            <a className="btn" href={project.projectURL}><Github /></a>
                            <a className="btn" href={project.websiteURL}><ArrowUpRight /></a>
                        </div>
                    </div>
                ))}

            </div>
        </main >

    )
}

export default ShowCases