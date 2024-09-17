import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="m-2 ">
      <div className="flex items-center justify-between space-x-4 py-2 px-3 bg-gray-300 rounded-full font-bold shadow-lg shadow-[#fdfdfdea]">
       
        <Link href="/" className="pl-2">
          <Image
            src="/img.png"
            height={30}
            width={30} 
            alt="Main"
            className="rounded-full shadow-md shadow-black transition-transform transform hover:scale-105"
          />
        </Link>
        
        <nav className="space-x-4 px-2 text-sm md:text-lg">
          <Link href="/projects" className=" hover:bg-white shadow-md shadow-[#000] rounded-full px-1 ">Projects</Link>
          <Link href="/about" className=" hover:bg-white shadow-md shadow-black rounded-full px-1 ">About</Link>
          <Link href="/contact" className=" hover:bg-white shadow-md shadow-black rounded-full px-1 ">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
    