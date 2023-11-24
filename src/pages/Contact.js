import React, { useState } from 'react';
import Header from '../components/Header';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:info@exclusive.com?subject=Contact Us - ${name}&body=${message}`;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-grow relative">
        <div className="absolute inset-0 bg-red-500 bg-opacity-90 transform skew-y-12 z-[-10]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
