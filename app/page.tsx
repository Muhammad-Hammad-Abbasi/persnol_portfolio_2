import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Style from "./style/style";

export default function Home() {
  return (
    <div>
       <Style/>
       <div className="pt-[100px]">
       <Projects/>
       </div>
        <About/>
        <Contact/>
    </div>
  )
};
