import React from 'react'
import { SAMPLE_PROJECTS } from '../../assets/constant/projects'
import { ArrowUpRight, Github } from 'iconoir-react'

const Card = () => {
    return (
        <div className='grid md:grid-cols-3 gap-2 mx-7 px-3'>
            {SAMPLE_PROJECTS.map(pro => (

                <div className="flex flex-col border shadow-sm rounded-xl">
                    <img className="w-full h-64 rounded-t-xl" src={pro.image} />
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold  dark:text-white">
                            {pro.title}
                        </h3>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                            {pro.description}
                        </p>
                        <div>
                            {pro.language.map(lang => (
                                <span key={lang} className='badge badge-outline mx-1' >{lang}</span>
                            ))}
                        </div>
                        <div className='flex justify-around my-3'>
                            <a className='btn' href={pro.projectURL}><Github /> </a>
                            <a className='btn' href={pro.projectURL}><ArrowUpRight /></a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>

    )
}

export default Card