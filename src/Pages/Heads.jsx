import React from 'react'
import { Link } from 'react-router-dom'

function Heads() {
  return (
    <>
     <div className=" w-full flex items-center justify-between p-3 border border-[#ddd] shadow-2xl">
    
    <div className="w-15 h-15 bg-green-400 rounded-full">
   <img src="1.jpg" className="rounded-full h-15 w-15"/>
    </div>
   <ul className="flex">
   <Link to="/"> <li className="p-3">Home</li></Link>
    <Link to="./about"><li className="p-3">About</li></Link>
<Link to="/contact"><li className="p-3">Address</li></Link>
   </ul>
<button className="bg-blue-600 text-white px-5 md:px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition w-full md:w-auto">
          Hire Me &rarr;
        </button>
</div>
    
    </>
  )
}

export default Heads
