
import ContactPage from "./contact";

export default function Contact() {
  return (
    <div className="flex justify-center items-center bg-[#1f1a1a] mb-4 border-y-4 border-[#c2588d] py-0 md:py-20 lg:py-20 pt-20">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-4xl text-[#916e80] font-semibold animate-shine pt-20">CONTACT US</h2>
        <ContactPage />
      </div>
    </div>
  );
}

