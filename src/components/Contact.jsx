import React from "react";
import { MdEmail } from "react-icons/md"; // Mail icon

export default function Contact() {
  return (
    <div className="text-white py-16 px-4 text-center relative overflow-hidden">
      {/* Static background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <div className="relative z-10 space-y-6">
        <p className="text-base sm:text-lg text-gray-300">Have a project in mind?</p>

        {/* Clickable Email with Icon */}
        <a
          href="mailto:manpreetkaurs772@gmail.com"
          className="inline-flex items-center justify-center gap-2 break-words text-xl sm:text-2xl md:text-3xl font-extrabold text-white hover:text-gray-300 transition"
        >
          <MdEmail className="text-2xl sm:text-3xl" />
          manpreetkaurs772@gmail.com
        </a>
      </div>
    </div>
  );
}
