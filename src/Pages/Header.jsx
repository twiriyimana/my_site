import React from 'react'
import Heads from './Heads';

function Header() {
  return (
    <>

 <Heads/>

<div className='flex gap-90'>
<div className='mt-10 border w-110 rounded ml-5'>
  <h1 className='text-pink-400 text-2xl ml-10'>ESSA HIGH SCHOOL</h1>
<p>Diploma in Software Development <br /> ESSA Nyaugunga</p>
 <h2 className='text-pink-400 text-1xl ml-10'>Skills</h2>
 <p>React.js, Node.js, PHP, Tailwind CSS, CSS, Databases MySQL</p>
 <h2 className='text-pink-400 text-1xl ml-10'>Other Information</h2>
  <p>Valid Driver’s License (Permis B,C)</p>
</div>
<div className='mt-10 border w-110 rounded'>
  <h1 className='text-pink-400 text-2xl ml-10'>THE ABOUT US</h1>
<p>Recent graduate in Software Development from ESSA Nyaugunga, <br />Skilled in React.js, Node.js, PHP, Tailwind CSS, and database management <br />Seeking opportunities to apply my skills in freelance or full-time roles.</p>

</div>
</div>
     <div className="max-w-2xl mx-auto p-6 bg-indigo-50 mt-20 rounded">
      <h1 className="text-3xl font-bold text-gray-800 mb-6"></h1>
      <p className="text-gray-700 text-lg mb-8"></p>

      <div className="space-y-6">
        {/* Frontend Skill */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-800 font-medium">Frontend</span>
            <span className="text-gray-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>

        {/* Backend Skill */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-gray-800 font-medium">Backend</span>
            <span className="text-gray-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header;
