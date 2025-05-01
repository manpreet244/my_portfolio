import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Hero from "./Hero";

const Page1 = () => {
  const parent = useRef(null); // Initialize parent ref
  const tl = useRef(null); 

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline();

      tl.current.from("#nav h3", {
        y: -50,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.4
      });

      // Uncomment and add additional animations as needed
      // tl.current.from("#main h1", {
      //   x: -500,
      //   opacity: 0,
      //   duration: 0.8,
      //   stagger: 0.2
      // });
      // tl.current.from("img", {
      //   x: 100,
      //   duration: 0.5,
      //   rotate: 45,
      //   opacity: 0,
      //   stagger: 0.6
      // });
      // stagger means each h3 will appear one after the other with a delay of 0.6 seconds
    }, parent);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
   <div className="text-black  w-screen h-16 p-6 "style={{ fontFamily: 'Pattaya, sans-serif' }}>
     <div ref={parent} id="nav" 
     className="flex justify-between text-3xl  items-center ml-24 pl-8 "> 
           <h3>Manpreet </h3>
      <div id="nav-part-2" className="flex justify-between  mr-16 pr-16
      items-center text-black gap-16 text-2xl">
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </div>
    <Hero/>
   </div>
  );
};

export default Page1
