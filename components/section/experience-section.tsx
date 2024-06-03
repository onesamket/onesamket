import React from "react"
import TimeLine from "@/components/shared/experience-timeline"
const ExperienceSection = () => {
    return (
        <div id="skills" className=" py-5 bg-base-300">
            <h3 className="flex w-full items-center justify-center text-xl md:text-3xl ">Skills </h3>
            <div>
                <TimeLine />
            </div>
        </div>
    )
}

export default ExperienceSection