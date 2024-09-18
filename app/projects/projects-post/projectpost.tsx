import Link from "next/link";
import Image from "next/image";

export default function Projectpost() {
  return (

    <div className="">
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px] bg-[#c4c4c4] pt-[40px] rounded-xl m-[30px] mt-[30px] justify-items-center px-[40px] pb-[30px] gap-y-[30px] ">

        {/*post...............................01*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg 
        animate-flip-up">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px] ">
            <Image 
              src={"/portfolio.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">Crafting Websites That Drive Results.</h1>
              <p className="pb-[40px] px-[10px]">  My goal is to design And technically robust websites that resonate with audiences
                and drive conversions...</p>
            </div>
            <div className="p-[8px] pt-[70px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://personal-portfolio-ecru-nu.vercel.app/">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*post...............................02*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg animate-flip-up
">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px] ">
            <Image
              src={"/countdown.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">Countdown Timer.</h1>
              <p className="pb-[40px] px-[10px]">Built a sleek countdown timer that tracks events in real-time, perfect for time-bound activities and launches...</p>
            </div>
            <div className="p-[8px] pt-[110px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://project-day1.vercel.app/">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*post...............................03*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg animate-flip-up">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px] ">
            <Image
              src={"/resume.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">Unique Path and Shareable Link.</h1>
              <p className="pb-[40px] px-[10px]">Check out my latest resume. Its hosted on a unique path, making it easily shareable...</p>
            </div>
            <div className="p-[8px] pt-[15px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://milestone05-puce.vercel.app/">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*post...............................04*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg animate-flip-up">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px] ">
            <Image
              src={"/currency.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">Currency Converter.</h1>
              <p className="pb-[40px] px-[10px]">Developed a responsive currency converter that allows users to quickly and accurately convert between multiple currencies in real-time...</p>
            </div>
            <div className="p-[8px] pt-[25px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://github.com/Muhammad-Hammad-Abbasi/mht-currency-converter">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*post...............................05*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg animate-flip-up">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px] ">
            <Image
              src={"/todos.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">ToDo List.</h1>
              <p className="pb-[40px] px-[10px]">Created a simple and intuitive to-do list application to help users organize tasks efficiently with real-time updates and a clean interface...</p>
            </div>
            <div className="p-[8px] pt-[113px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://github.com/Muhammad-Hammad-Abbasi/mht-to-do-list">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*post...............................06*/}
        <div className="shadow-lg  hover:shadow-white transition-shadow duration-500 bg-white rounded-lg animate-flip-up">
          <div className="rounded-lg justify-items-center p-[20px] w-[200px] md:w-[250px] lg:w-[330px]">
            <Image
              src={"/word.png"}
              height={300}
              width={300}
              loading="lazy"
              decoding="async"
              alt=""
              className="h-auto rounded-t-xl "
            />
            <div>

              <h1 className="font-bold p-[10px] text-xl ">Word Counter.</h1>
              <p className="pb-[40px] px-[10px]">Built a word counter tool that provides real-time word and character counts, helping users track their writing effortlessly...</p>
            </div>
            <div className="p-[8px]">
              <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors ">
                <Link href="https://github.com/Muhammad-Hammad-Abbasi/mht-word-counter">
                  <button >Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
