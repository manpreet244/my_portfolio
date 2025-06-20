import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"; // Social icons

export default function Contact({ id }) {
  return (
    <div className="text-white py-16 px-4 text-center relative overflow-hidden" id={id}>
      {/* Static background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <div className="relative z-10 space-y-6">
        <p className="text-xl  text-gray-300">Reach me out </p>

      
        <a
          href="mailto:manpreetkaurs772@gmail.com"
          className="inline-flex items-center justify-center gap-2 break-words text-xl sm:text-2xl md:text-3xl font-extrabold text-white hover:text-gray-300 transition"
        >
          <MdEmail className="text-xl sm:text-3xl" />
          manpreetkaurs772@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4 text-2xl sm:text-3xl">
          <a
            href="https://www.linkedin.com/in/manpreet-kaur-746478212/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/manpreet244"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@Manpreetkaur-xr7cg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
