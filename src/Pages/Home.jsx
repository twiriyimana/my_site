import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-green-400 overflow-hidden flex-shrink-0">
                <img src="/1.jpg" alt="avatar" className="h-full w-full object-cover" />
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Address</Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
                Hire Me →
              </button>

              <button
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden py-3 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100">Home</Link>
                <Link to="/about" className="px-3 py-2 rounded hover:bg-gray-100">About</Link>
                <Link to="/contact" className="px-3 py-2 rounded hover:bg-gray-100">Address</Link>
                <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">Hire Me →</button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <p className="text-gray-500 text-base mb-2">Hello! I'm</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">Jeanchrisostome</h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              UI/UX Designer specializing in Shopify & Webflow. I focus on building clean, accessible interfaces that convert.
              <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-500 mb-4">Explience</h1>
              SALTEL Company LTD  2023-2024<br/>DATA SYSTEM Company LTD 2024-2025 <br/> Ihave Certificate
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Get Resume <span className="text-xl">↓</span>
              </a>

              <button className="inline-flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition">
                <span className="text-lg">►</span> Watch Video
              </button>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.826 0-9.749h3.554v1.381c-.009.015-.021.029-.033.042h.033v-.042c.43-.664 1.199-1.61 2.922-1.61 2.135 0 3.732 1.39 3.732 4.377v5.601zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.954.77-1.715 1.958-1.715 1.187 0 1.927.761 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.558h3.891v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-100 to-white shadow-lg flex items-center justify-center overflow-hidden">
              <img src="/1.jpg" alt="profile" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;