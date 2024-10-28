
import Projects from "./projects/page";
import About from "./about/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div>

      <div className=" text-center">
        <h1 className="text-[45px] md:text-[100px] lg:text-[150px] text-[#916e80] text-center font-serif my-20 text-3d">portfolio</h1>
      </div>
      <About />
      <div className="pt-[100px]">
        <Projects />
      </div>
      <ContactPage />
    </div>

  )
};
