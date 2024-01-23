"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Article = () => {
    return (
        <div className='h-[50vh] w-full flex items-center flex-col justify-center'>

            <h1 className='text-2xl'>I&apos;m working on This page. it will be available SOON </h1>
            <TypeAnimation
                sequence={[
                    " Web development",
                    2000,
                    "Best Practices",
                    2000,
                    "Best React",
                    2000,
                    "Best React Native",
                    2000,
                    "Trending Technologies ",
                    2000,
                    "Node Js",
                    2000,
                    "Authentication and Authorization",
                    2000,
                    "Serverless",
                    2000,
                    "And So much more!",
                    2000,
                    "Coming SOON"
                ]}
                className="text-3xl font-bold  p-2"
                cursor={true}
                repeat={Infinity}
            />


        </div>
    )
}

export default Article