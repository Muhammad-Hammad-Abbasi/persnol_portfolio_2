
import ContactPage from "./contact";

export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1f1a1a] my-10 border-y-4 border-[#c2588d] py-20">
      <div className="flex flex-col">
      <h2 className="text-center text-4xl text-[#916e80] font-semibold animate-shine py-5">CONTACT US</h2>
       <ContactPage />
       </div>
    </div>
  );
}

