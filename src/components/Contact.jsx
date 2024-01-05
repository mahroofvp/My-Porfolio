import React from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'


const phoneNumber = '+91 7909129178';
 const email = 'mahroofvp77@gmail.com';
 const githubUrl = 'https://github.com/mahroofvp/';
 const linkedinUrl = 'https://www.linkedin.com/in/mahroof-vp-282b2b242';
 const resumeUrl = 'https://drive.google.com/file/d/1qmOepN4Q2gEt7TlVyQhVSjfR7tt-tjoU/view?usp=drivesdk';


const Contact = () => {

 

  return (
    <div name='contact' className='w-full h-auto min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <input className='placeholder-gray-600 bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name ' />
            <input className='placeholder-gray-600 my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 placeholder-gray-600' name="message" rows="10" placeholder='Message'  ></textarea>
            <button className='text-white border-2 hover:bg-pink-700 hover:border-pink-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

        <div className="flex justify-center items-center space-x-4 text-white ">
        <a className='font-sans font-thin' href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="text-2xl" />
        </a>
      </div>
    </div>
  )
}

export default Contact