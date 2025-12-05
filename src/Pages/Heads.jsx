import React from 'react'
import { Link } from 'react-router-dom'

const Heads = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-green-400 flex-shrink-0">
            <img src="1.jpg" alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-lg text-gray-800">I'M Jeanchrisostome</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Address</Link>
        </nav>

        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Hire Me →
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {open ? (
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden overflow-hidden transition-max-height duration-300 ${open ? 'max-h-56' : 'max-h-0'}`}>
        <nav className="px-4 pb-4 flex flex-col gap-2">
          <Link to="/" onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-100">Address</Link>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Hire Me →
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Heads;