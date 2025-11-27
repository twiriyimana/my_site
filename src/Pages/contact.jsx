import React from 'react';
import Heads from './Heads';

function Contact() {
  return (
    <>
    <Heads/>
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="md:w-1/2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-center bg-blue-900 text-white py-3 rounded mb-6">Get In Touch With Us Now!</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl text-blue-900">📞</span>
              <div>
                <div className="font-medium">Phone Number</div>
                <div className="text-gray-700">+250 794677387</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-blue-900">✉️</span>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-700 break-all">jeanchriso394@gmail.com</div>
                <div className="text-gray-700 break-all">jeanchriso668@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-blue-900">📍</span>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-gray-700">BUGESERA district</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl text-blue-900">⏰</span>
              <div>
                <div className="font-medium">Working Hours</div>
                <div className="text-gray-700">Monday to friday<br />06:00 AM to 06:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2 bg-gray-100 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="First name" className="flex-1 p-2 border rounded" required />
              <input type="text" placeholder="Last name" className="flex-1 p-2 border rounded" required />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Mobile No." className="flex-1 p-2 border rounded" required />
              <input type="email" placeholder="Email" className="flex-1 p-2 border rounded" required />
            </div>
            <textarea placeholder="Message" className="w-full p-2 border rounded min-h-[80px]" required />
            <br /><br /><br /><br /><br />
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;