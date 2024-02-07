import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="flex flex-col md:flex-row">
        <Link href="./" className="link link-hover">
          Home{" "}
        </Link>
        <Link href="./tewodros/#experience" className="link link-hover">
          Experience
        </Link>
        <Link href="./tewodros/#showcase" className="link link-hover">
          Showcases
        </Link>
        <Link href="./resume" className="link link-hover">
          Resume
        </Link>
        <Link href="/articles" className="link link-hover">
          Articles
        </Link>
        <Link href="./tewodros/#about" className="link link-hover">
          About{" "}
        </Link>
        <Link href="./tewodros/#contact" className="link link-hover">
          Contact{" "}
        </Link>
      </nav>
      <nav className=" mx-auto">
        <div className="grid grid-flow-col gap-4">
          <div className="tooltip" data-tip="Github">
            <a href="https://github.com/onesamket" className="btn">
              <Github />
            </a>
          </div>
          <div className="tooltip" data-tip="Linkedin">
            <a href="https://linkedin.com/in/ln-onesamket/" className="btn">
              <Linkedin />
            </a>
          </div>
          <div className="tooltip" data-tip="Twitter">
            <a href="https://x.com/onesmaket" className="btn">
              <Twitter />
            </a>
          </div>
        </div>
      </nav>
      <aside className="flex space-x-1">
        <p>Deployed on Vercel</p>
        <a href="vercel.com">
          {" "}
          <Image
            src="logo-vercel.svg"
            width={30}
            height={30}
            alt="vercel"
            className="w-5 h-5 "
          />
        </a>
        <p> {new Date().getFullYear()} by Teddy</p>
      </aside>
    </footer>
  );
};

export default Footer;
