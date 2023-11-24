import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          {/* Repeat the following block for each category */}
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href='nothing' className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a href='nothing' className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a href='nothing' className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a href='nothing' className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          {/* End of category block */}
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />waistcoat green juice
            </p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            {/* Add your social media icons here */}
          </span>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
