import { Github, Google, Instagram, Linkedin, Twitter } from 'iconoir-react';

const Links = () => {
    return (
        <div>
            <ul className='flex space-x-2 '>
                <a href=""><Github /></a>
                <a href=""><Linkedin /></a>
                <a href=""><Twitter /></a>
                <a href=""><Google /></a>
                <a href=""><Instagram /></a>
            </ul>
        </div>
    )
}

export default Links