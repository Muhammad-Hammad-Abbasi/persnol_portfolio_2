import Image from "next/image";

export default function Style() {
  return (
    <div>
      <div className="m-4 sm:m-6 flex justify-center pt-[40px]">
        <h1 className="max-w-full border border-gray-500 text-center md:text-[20px] lg:text[30px] text-[15px] p-2 w-[80%] md:w-[300px] rounded-full bg-neutral-500 shadow-md shadow-black animate-pulse">
          <p>It&#39;s me <b>Hammad Abbasi</b></p>
        </h1>
      </div>
      <div className="pt-[40px]">
      <div className=" flex justify-center">
        <Image
        src={"/img.png"}
        width={200}
        height={200}
        alt=""
        className="rounded-full shadow-lg shadow-black"
        />
       </div>
        <div className="pt-[30px]">
          <h1 className="font-bold text-2xl text-center">Building High-Impact, User-Centered Websites</h1>
          <p className="text-center pt-[20px] text-xl">I create websites that combine sleek design with top-notch performance.<br/>
            My focus is on delivering responsive, engaging, and technically robust solutions<br/>
            that drive user interaction and business success.</p> 


         </div>
       
      </div>
    </div>
  );
}
