import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-auto min-h-screen bg-[#0a192f]  text-gray-300 flex items-center '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mahroof VP, Please take a look around.</p>
            </div>
            <div>
              <p>I am a passionate MERN stack developer. From individuals to large enterprises, I specialize in delivering top-notch solutions. Let's turn your ideas into reality – I'm here to make it happen. Explore my portfolio and let's connect for exciting projects!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
