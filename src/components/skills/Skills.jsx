import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import BOOTSTRAP from '../../assets/bootstrap.png.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';
import Redux from '../../assets/redux-icon.png';
import SingleSkill from './SingleSkill';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-700 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
<SingleSkill Image={HTML} Title={"HTML"}/>
<SingleSkill Image={CSS} Title={"CSS"}/>
<SingleSkill Image={JavaScript} Title={"JAVASCRIPT"}/>
<SingleSkill Image={ReactImg} Title={"REACTJS"}/>
<SingleSkill Image={GitHub} Title={"GITHUB"}/>
<SingleSkill Image={Node} Title={"NODE JS"}/>
<SingleSkill Image={Mongo} Title={"MONGO DB"}/>
<SingleSkill Image={Redux} Title={"REDUX"}/>
<SingleSkill Image={Tailwind} Title={"TAILWIND CSS"}/>
<SingleSkill Image={BOOTSTRAP} Title={"BOOTSTRAP"}/>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
