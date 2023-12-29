import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-auto min-h-screen bg-[#0a192f] flex items-center '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full '>
        <p className='text-pink-700 font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          MAHROOF VP
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
         
         I'm a full-stack developer, skilled in various programming languages and tools. I specialize in creating MERN stack applications,
          handling both the front-end and back-end. I know how to build user-friendly single-page apps that meet modern development needs.
        </p>
        <div>
          <button  className='placeholder-gray-700 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        <Link  to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
