'use client';

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/contact/contact-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="flex flex-col gap-10 text-[#916e80] justify-center items-center  bg-[#1f1a1a] py-20  border-y-4 border-[#c2588d]">
      <h2 className="text-center text-4xl font-semibold animate-shine py-5">CONTACT US</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5 w-[300px] md:w-[350px] lg:w-[450px] h-[270px] bg-[#383030] px-3 rounded-md">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="py-1 px-2 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="py-1 px-2 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className=" px-2 rounded-md"
          required

        ></textarea>
        <button
          type="submit"
          className="border border-[#c2588d] text-[#c2588d] py-1 rounded-md transition-colors duration-1000 hover:text-white hover:border-[#916e80] hover:bg-[#745062] font-serif"
        >
          Send Message
        </button>


      </form>

      {status && <p className="text-[#916e80]">{status}</p>}
    </div>
  );
}
