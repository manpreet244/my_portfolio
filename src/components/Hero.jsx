import { useEffect } from 'react';
import gsap from 'gsap';
  function Hero() {
  useEffect(() => {
    gsap.to(".box", {
      keyframes: {
        y: [0, 80, -10, 30, 0],
        ease: "none",
        
      },
      
      ease: "elastic",
      duration: 3,
      stagger: 0.2,
      delay: 3,
    });
    // gsap.to(".laptop", {
    //   scrollTrigger: {
    //     trigger: ".laptop",
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     scrub: true,
    //   },
    //   rotate: -360,
    //   transformOrigin: "center center",
    //   repeat: -1,            // Repeat indefinitely
    //   ease: "linear", 
    //   duration: 2,
    // });
  }, []);

  return (
    <div className='flex anton-regular h-[70vh] ' >
    <div className="flex flex-col items-start mt-24 md:ml-32
    ml-4 justify-start text-xl text-black">
      {/* Multiple Boxes */}
      <div className='flex  h-20 text-white text-8xl font-bold opacity-10 '>
      <div className="box  ">H</div>
      <div className="box  h-16 ">E</div>
      <div className="box h-16 ">L</div>
      <div className="box  h-16 ">L</div>
      <div className="box h-16 ">O</div>
      <h5 className='ml-4'>I'm</h5>
      </div>
      <h1  className='text-[#ed8a0f] text-7xl tracking-wide ml-16 mt-6 anton-regular '>MANPREET<br></br> KAUR</h1>
      <h5 className=' w-[400px] md:w-[600px] pl-10 text-xl text-gray-300 roboto-flex-200'> A creative
         Full Stack Developer with 1+ years of experience in building high-performance,
         scalable, and responsive web solutions.</h5>
    </div>
    
      <div className="flex  justify-end mt-24">
       
       
    </div>
</div>
  );
}
export default Hero;