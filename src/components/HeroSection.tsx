import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const HeroSection:React.FC = () => {
  return (
    <section className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        CodeAlly build tools 
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
        {" "}
        for developers
        </span>
        </h1>
<p className='mt-10 text-lg text-center text-neutral-400 max-4-xl'>
Enhance your development process with our innovative tools designed to make coding faster, easier, and more enjoyable. Start today and transform your workflow!
</p>
<div className="flex flex-col gap-5 justify-center my-10 md:flex-row md:gap-0">
    <a 
    href="#" 
    className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'
    >
        Start for free
        </a>
        <a 
    href="#" 
    className='py-3 px-4 mx-3 rounded-md border'
    >
        Documentation
        </a>
</div>
<div className="flex mt-10 justify-center max-w-4xl">
<video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
</div>
    </section>
  )
}

export default HeroSection;