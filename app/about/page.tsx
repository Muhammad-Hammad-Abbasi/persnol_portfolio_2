import Image from "next/image"

export default function About() {
  return (
    <div>
    <div className="pt-[50px] flex justify-center animate-pulse">
      <div className="max-w-auto  bg-neutral-500 rounded-lg px-[10px] shadow-xl shadow-black animate-bounce">
          <h1 className="text-center font-extrabold text-[25px] md:text-[30px] lg:text-[40px]">About Me</h1>
        </div>
      </div>
      <div className="flex justify-center pt-[60px] ">
          <div className="max-w-full bg- bg-neutral-500 w-[500px] h-[300px] flex justify-center items-center rounded-3xl animate-flip-up sm:animate-flip-up">
            <Image
            src={"/img.png"}
            width={150}
            height={150}
            alt=""
            className="rounded-full"
            />
          
          </div>
        
        </div>
        <div className="flex justify-center pt-[40px] animate-flip-up sm:animate-flip-up">
        <div className="bg-text rounded-2xl shadow-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[750px] p-6 text-center bg- bg-neutral-500 ">
  <h1 className="text-white text-2xl lg:text-3xl">
    Passionate Web Developer
  </h1>
  <p className="text-white text-sm lg:text-base mt-4">
    As a front-end developer, I focus on blending creativity with technical skill to produce seamless web experiences. I am committed to mastering new tools and techniques, ensuring that the websites I build are both aesthetically pleasing and highly functional. My expertise in front-end technologies is complemented by a strong understanding of AI, allowing me to approach problem-solving with innovative solutions.
  </p>
</div>
</div>
    </div>
  )
}
