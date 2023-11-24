import React from 'react';
import Header from '../components/Header';
import SideImgAbout from '../assets/Side Image about.png'
import Footer from '../components/Footer'
import Employeee from '../assets/Frame 890.png'
import whyUs from '../assets/Frame 891.png'
import Services from '../assets/Full services.png'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className='container justify-between items-center mx-auto mt-24 mb-24 ml-60'>
      <div className='flex gap-44 '>
      <div className='flex flex-col gap-10 mt-24 w-1/3'>
        <h1 className='text-4xl font-bold'>Our Story</h1>
        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

        <img className="" src={SideImgAbout} alt='sideimg' />
        </div>
        
        
        <div className='flex justify-center items-center mr-20 mt-24'>
        <img src={whyUs} alt='employe'/>
        </div>

      <div className='flex justify-center items-center mr-18 mt-24'>
      <img src={Employeee} alt='employe'/>
      </div>

       
      <div className='flex justify-center items-center mr-20 mt-28'>
      <img src={Services} alt='employe'/>
      </div>


    </div> 
    <Footer/>  
    
    </>

  );
};

export default AboutUs;
