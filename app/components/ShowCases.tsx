import { ArrowUpRight, Github } from "iconoir-react"
import { SAMPLE_PROJECTS } from "../assets/constant/projects"
import React, { Suspense } from "react"

const ShowCases = () => {
    return (
        <main id="showcase">
            <h3 className=" text-4xl font-bold  py-3 my-5 flex items-center justify-center">Show case Projects</h3>
            <div className="px-12 grid  gap-6 place-content-center  md:grid-cols-3">
                {SAMPLE_PROJECTS.map(project => (

                    <div className="card  w-[22rem]  h-fit md:w-96 bg-base-100 shadow-md border border-gray-600">
                        <Suspense fallback={<span className="loading loading-ring loading-lg"></span>
                        }>
                            <figure><img src={project.image} alt={project.title} className="w-full h-64" /></figure>
                        </Suspense>

                        <div className="card-body">
                            {/* <h2 className="card-title">
                                {project.title}
                            </h2> */}

                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="checkbox" />
                                <h1 className="collapse-title text-xl font-medium">
                                    {project.title}
                                </h1>
                                <div className="collapse-content">
                                    <p>{project.description}</p>
                                </div>
                            </div>


                            {/* <p>{project.description}</p> */}
                            <div className="card-actions flex justify-between items-center">
                                <div className="flex flex-wrap">
                                    {project.language.map(language => (
                                        <div className="badge badge-outline ">{language}</div>
                                    ))}
                                </div>
                                <div className="flex justify-between space-x-1">
                                    <a href={project.projectURL} className="btn"><Github /> </a>
                                    <a href={project.websiteURL} className="btn"><ArrowUpRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </main>

    )
}

export default ShowCases