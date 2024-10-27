import Aos_Animation from "./aos";

export default function Main_Page() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-[#1f1a1a] my-10 overflow-hidden border-y-4 border-[#c2588d]">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center w-full max-w-[1200px] gap-16 p-6">

        {/* About Us Section */}
        <div className="flex flex-col text-[#916e80] p-4 bg-[#292323] rounded-md mt-10 md:w-[500px] lg:w-[700px]" data-aos="zoom-in-down">
          <h1 className="text-center text-4xl font-semibold animate-shine py-5">ABOUT US</h1>
          <h2 className="text-center text-2xl lg:text-3xl font-bold font-serif text-[#dd7cac] p-5">I&#39;m Muhammad Hammad </h2>
          <h2 className=" text-2xl">
            Passionate Web Developer
          </h2>
          <p className="text-md lg:text-base mt-4">
            As a front-end developer, I focus on blending creativity with technical skill to produce seamless web experiences. I am committed to mastering new tools and techniques, ensuring that the websites I build are both aesthetically pleasing and highly functional. My expertise in front-end technologies is complemented by a strong understanding of AI, allowing me to approach problem-solving with innovative solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-end mt-8 md:mt-0">
          <Aos_Animation />
        </div>
      </div>
    </main>
  );
}
