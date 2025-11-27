import React, { useState } from 'react';


function Home() {
  return (
    <>
    <div className=" w-full flex items-center justify-between p-3 border border-[#ddd] shadow-2xl">
    
    <div className="w-15 h-15 bg-green-400 rounded-full">
   <img src="1.jpg" className="rounded-full h-15 w-15"/>
    </div>
   <ul className="flex">
   <a href=""> <li className="p-3">Home</li></a>
    <a href="/about"><li className="p-3">About</li></a>
<a href="/contact"><li className="p-3">Address</li></a>
   </ul>
<button className="bg-blue-600 text-white px-5 md:px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition w-full md:w-auto">
          Hire Me &rarr;
        </button>
</div>
<br /><br />
<div className="flex-1 w-full ml-29">
<h2 className="text-lg md:text-xl text-gray-600 mb-2">Hello! I’m</h2>
<h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">Jeanchrisostome</h1>
<p className="text-base md:text-lg text-gray-700 mb-8">

  UI/UX Designer specializing in Shopify &amp; Webflow.
</p>


 <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition justify-center">
              Get Resume <span className="text-xl">&#8681;</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition justify-center">
              <span className="text-lg">&#9658;</span> Watch Video
            </button>
            
            </div>
        
          </div>
        
        
        
    </>
  )
}

export default Home
