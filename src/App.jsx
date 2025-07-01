import React from "react";
import Page1 from "./components/Page1.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import MyStacks from "./components/MyStacks.jsx";
import "./App.css";
import MyExperience from "./components/MyExperience.jsx";
import About from "./components/About.jsx";

export default function App() {
  return (
    <div className="w-screen bg-[#212121] min-h-screen overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        <div className="relative z-20">
          <Page1 />
        </div>
      </div>

   
      <About id="about" />
      <MyStacks  />
      <MyExperience />
      <Projects id="projects"/>
      <Contact id="contact" />
    </div>
  );
}
