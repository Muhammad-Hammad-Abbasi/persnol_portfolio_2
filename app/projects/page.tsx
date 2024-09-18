import Projectpost from "./projects-post/projectpost";

export default function Projects() {
  return (
    <div>
      <div className="pt-[50px] flex justify-center animate-pulse pb-[70px]">
        <div className="max-w-auto  bg-neutral-500 rounded-lg px-[10px] shadow-xl shadow-black animate-bounce">
          <h1 className="text-center font-extrabold text-[25px] md:text-[30px] lg:text-[40px]">Projects</h1>
        </div>
      </div>
      <div>
        <Projectpost/>
      </div>
    </div>
  )
}
