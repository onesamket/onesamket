const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="flex space-x-3 flex-col justify-start items-center md:flex-row ">
                <a href="#" className="link link-hover">Home</a>
                <a href="#experience" className="link link-hover">Experience</a>
                <a href="#showcase" className="link link-hover">Showcase</a>
                <a href="#about" className="link link-hover">About </a>
                <a href="#contact" className="link link-hover">Contact </a>
            </div>
            <nav className="flex space-x-3">
                <a href=""><img width="30" height="30" src="https://img.icons8.com/fluency/30/linkedin.png" alt="linkedin" /></a>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/fluency/30/facebook.png" alt="linkedin" /></a>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/fluency/30/twitter.png" alt="linkedin" /></a>
                <a href=""><img width="30" height="30" src="https://img.icons8.com/fluency/30/github.png" alt="linkedin" /></a>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved </p>
            </aside>
        </footer>
    )
}

export default Footer