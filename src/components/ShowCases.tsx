import { ArrowUpRight, Github } from "iconoir-react"
import { SAMPLE_PROJECTS } from "../assets/constant/projects"

const ShowCases = () => {
    return (
        <main id="showcase">
            <h3 className=" text-4xl font-bold  py-3 my-5 flex items-center justify-center">Show case Projects</h3>
            <div className="px-12 grid  gap-6 place-content-center  md:grid-cols-3">
                {SAMPLE_PROJECTS.map(project => (

                    <div className="card  w-[22rem] md:w-96 bg-base-100 shadow-xl">
                        <figure><img src={project.image} alt={project.title} className="w-full h-64" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <p>{project.description}</p>
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