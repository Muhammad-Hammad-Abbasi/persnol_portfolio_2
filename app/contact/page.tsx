import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-[100px]">
    
      <div className="pt-[50px] flex justify-center animate-pulse pb-[70px]">
        <div className="max-w-auto bg-neutral-500 rounded-lg px-[10px] shadow-xl shadow-black animate-bounce">
          <h1 className="text-center font-extrabold text-[25px] md:text-[30px] lg:text-[40px]">Contact Me</h1>
        </div>
      </div>

      <div className="flex justify-center px-[30px] md:px-[40px] lg:px-[50px]">
        <form className="w-full max-w-lg bg-neutral-500 p-8 rounded-lg shadow-md shadow-black">
          <div className="flex justify-center pb-[30px] ">
         <Image
         src={"/img.png"}
         height={200}
         width={200}
         alt="profilt picture"
         className="rounded-full shadow-lg shadow-black"
         
         />

         </div> 
         <div className="text-center bg-black text-white hover:bg-[#270d0d]/10 hover:text-black rounded-lg p-[6px] transition-colors">
             <Link href="mailto:hammadabbasi102030@gmail.com"><button>Send Email</button></Link>
         </div>
        </form>
      </div>
    </div>
  );
}

