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
  }, []);

  return (
    <div className='flex flex-col md:mx-12 lg:flex-row anton-regular min-h-[80vh] w-full px-6 lg:px-20 gap-10 lg:gap-32'>
      
   
      <div className="flex flex-col justify-center mt-20 text-xl text-black flex-1">
        {/* Animated "HELLO" */}
        <div className='flex h-18 text-white text-6xl md:text-8xl font-bold opacity-10'>
          <div className="box">H</div>
          <div className="box h-16">E</div>
          <div className="box h-16">L</div>
          <div className="box h-16">L</div>
          <div className="box h-16">O</div>
          <h5 className='ml-4'>I'm</h5>
        </div>

        {/* Developer Title */}
        <h1 className='text-[#ed8a0f] text-5xl md:text-7xl tracking-wide ml-10 md:mt-2'>
          WEB<br />DEVELOPER
        </h1>

        {/* Description */}
        <h5 className='max-w-xl  lg:text-lg md:text-xl mt-6 text-md
         text-gray-300 roboto-flex-200'>
          A creative Developer with 1 year of experience in building high-performance,
          scalable, and responsive web solutions. 

        </h5>
       <a href="https://drive.google.com/file/d/1XB6HbuuIJYkTq0zab1ZqVhzQuN1X/view?usp=sharing">
         <button className='text-[#ed8a0f] w-fit
         px-4 py-1 mt-4 bg-gray-400 bg-opacity-10 font-sans text-lg tracking-wide rounded-xl'> 
          VIEW RESUME </button>
        </a>
      </div>

      {/* Right: Image (only on large screens) */}
      <div className="hidden lg:flex items-center justify-center flex-1 min-w-[300px] mr-8">
        <img
          src="assets/my-pic.png"
          alt="My portrait"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
