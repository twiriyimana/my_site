import React from 'react'
import Heads from './Heads';

function Header() {
  return (
    <>
      <Heads />

      <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 lg:p-8'>
        <div className='mt-10 border w-full lg:w-1/2 rounded p-4 lg:p-6 bg-white shadow-md'>
          <h1 className='text-pink-400 text-2xl lg:text-3xl mb-3'>ESSA HIGH SCHOOL</h1>
          <p className='text-gray-700 mb-4'>Diploma in Software Development <br /> ESSA Nyarugunga</p>
          <h2 className='text-pink-400 text-lg lg:text-xl mb-2'>Skills</h2>
          <p className='text-gray-700 mb-4'>React.js, Node.js, PHP, Tailwind CSS, CSS, Databases MySQL</p>
          <h2 className='text-pink-400 text-lg lg:text-xl mb-2'>Other Information</h2>
          <p className='text-gray-700'>Valid Driver's License (Permis B,C)</p>
        </div>

        <div className='mt-10 border w-full lg:w-1/2 rounded p-4 lg:p-6 bg-white shadow-md'>
          <h1 className='text-pink-400 text-2xl lg:text-3xl mb-3'>THE ABOUT US</h1>
          <p className='text-gray-700'>Recent graduate in Software Development from ESSA Nyarugunga, <br />Skilled in React.js, Node.js, PHP, Tailwind CSS, and database management <br />Seeking opportunities to apply my skills in freelance or full-time roles.</p>
          <h1 className='text-pink-400 text-2xl lg:text-3xl mb-3'>UNIVERSITY</h1>
          <p className='text-gray-700'>I starting to study at UNILAK (University of Lay Adventists of KIGALI) in 2025 in IT_networking <br />I Motivated and hardworking IT Networking I'M student with strong skills in computer systems, network configuration, troubleshooting, and cybersecurity basics.<br /> I'M Passionate about technology and eager to gain more practical experience in networking, system administration, and IT support. I'm solve technical problems effectively.</p>
        </div>
      </div>

      <div className='max-w-2xl mx-auto p-4 lg:p-6 bg-indigo-50 mt-12 lg:mt-20 rounded'>
        <div className='space-y-6'>
          <div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-800 font-medium'>Frontend</span>
              <span className='text-gray-600'>70%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-4'>
              <div className='bg-blue-500 h-4 rounded-full' style={{ width: '70%' }}></div>
            </div>
          </div>

          <div>
            <div className='flex justify-between mb-2'>
              <span className='text-gray-800 font-medium'>Backend</span>
              <span className='text-gray-600'>80%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-4'>
              <div className='bg-green-500 h-4 rounded-full' style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;