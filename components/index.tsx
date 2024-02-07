import { Suspense } from "react";
import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Hero from "./section/Hero";
import ShowCases from "./section/ShowCases";
import Loading from "./shared/spinner";

const InitialPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Experience />
      <ShowCases />
      <div className="bg-base-300">
        <About />
      </div>
      <Contact />
    </Suspense>
  );
};

export default InitialPage;
