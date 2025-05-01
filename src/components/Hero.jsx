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
    <div className='flex' style={{ fontFamily: 'Pattaya, sans-serif', fontWeight: 50 }}>
    <div className="flex flex-col items-start mt-24 ml-32 justify-start h-screen text-xl text-black">
      {/* Multiple Boxes */}
      <div className='flex  h-12 text-gray-600  text-4xl '>
      <div className="box  ">H</div>
      <div className="box  h-16 ">E</div>
      <div className="box h-16 ">L</div>
      <div className="box  h-16 ">L</div>
      <div className="box h-16 ">O</div>
      <h5 className='ml-4'>I am</h5>
      </div>
      <h1  style={{ fontFamily: 'Pattaya, sans-serif', fontWeight: 50 }} className='text-9xl font-bold ml-16 pattaya-regular'>Manpreet<br></br> Kaur</h1>
      <h5 className=' w-[600px] pl-10 text-gray-600 text-2xl'>My progress as a developer comes from staying curious and not being afraid to start over.</h5>
    </div>
    
      <div className="flex  justify-end mt-24">
        <img src="public/assets/cute.avif" alt="Image 1"
         className="  laptop h-[550px] w-[600px] rounded-full" />
       
    </div>
</div>
  );
}
export default Hero;