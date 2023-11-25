import React from "react"

const About = () => {
    return (
        <div className='w-[90vw] flex flex-col mx-auto space-y-1 items-center  justify-center'>
            <section id='about' className='my-10 px-5 py-20  space-y-1'
            >
                <h1 className='text-4xl self-start font-bold flex items-center justify-center'>About Me</h1>
                <p className=' p-3 md:w-2/3 mx-auto first-letter:text-3xl'>Hello, I&apos;m Tewodros Birhanu, a passionate and experienced Fullstack JavaScript Developer. With a love for coding and a creative approach to problem-solving, I specialize in crafting elegant, user-friendly, and high-performance web applications that not only look great but also rank well in search engines (SEO).</p>
                <p className=' p-3 md:w-2/3  mx-auto'>I thrive on bringing ideas to life and building cool projects that push the boundaries of what&apos;s possible. My tech stack includes Remix, Next.js, Express, React Native, Ionic, Svelte, and SvelteKit Astro, complemented by database expertise in MongoDB, MySQL, and Prisma. I&apos;m also constantly exploring new technologies to stay at the forefront of web development trends.</p>
                <p className=' p-3 md:w-2/3  mx-auto'>My goal is to create web applications that not only meet your specific requirements but also provide an exceptional user experience. I believe that code should be clean, maintainable, and scalable, and I take pride in writing code that is not only functional but also a work of art.</p>
                <p className=' p-3 md:w-2/3  mx-auto'>Let&apos;s collaborate on your next project, and together, we can turn your ideas into digital reality. If you&apos;re looking for a developer who is not only passionate about technology but also deeply committed to your success, I&apos;d love to hear from you.</p>
            </section>
        </div>
    )
}

export default About