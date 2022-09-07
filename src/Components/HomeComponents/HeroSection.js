import React, { useState, useEffect } from 'react'
import arrowright from '../../Assets/arrowright.png'
import Bitcoin from '../../Assets/Bitcoin.png'
import Ethereum from '../../Assets/Ethereum.png'
import Tether from '../../Assets/Tether.png'
import MLCOriginal from '../../Assets/MLCOriginal.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const HeroSection = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
      //Main Hero Container
    <div className='md:m-20 pt-20 px-6 bg-secondary pb-10' > 
         {/*Hero Contents*/}
         <div>
              {/*Hero Header TagLine with side Image*/}
            <div className='md:flex flex flex-col justify-center items-center'>
                 <div className='text-black text-center'>
                     <h2 className='md:text-5xl text-4xl'>Use <span className='text-primary'>Majorlink</span></h2>
                     <h2 className='md:text-5xl text-4xl mt-2'>for all things Crypto</h2>
                     <h4 className='md:text-3xl text-xl mt-2'>Start trading now to enjoy the best rates</h4>
                    <p className='text-gray-300 font-gilroy text-center md:px-40'>We provide the best and fastest service across the world in swapping e-currencies.
                    We are a registered international company with partners all around</p>
                   {/* <div className='flex'>
                    <button className='bg-black p-2 rounded-md mt-6 md:w-[28%] w-[36%] text-white font-gilroy mr-6'> Get Started </button>
                    <button className='bg-primary p-2 rounded-md mt-6 md:w-[28%] w-[36%] text-white font-gilroy'> Contact Support </button>
                    </div>*/}
                 </div>

                {/* <span className='w-[40%] md:block hidden' data-aos="fade-left">
                     <img
                     className='mt-[-20]'
                     src={MLCOriginal}
                     alt='image'
                     />
                 </span>*/}
            </div>
              {/*Hero Header TagLine with side Image*/}

                {/*Hero Currencies section*/}
            <div className='md:mt-10 mt-12' data-aos="fade-up">

                  {/*Explore currencies tag and icon*/}
                <span className='flex'>
                <h4 className='font-gilroysemibold text-sm hover:text-gray-500 cursor-pointer'>Explore Currencies</h4>
                 <span className='text-sm'> 
                 </span>
                </span>
                  {/*Explore currencies tag and icon*/}


                {/*Currency cards*/}
                <div className='md:flex font-gilroy mt-4'>

                     {/*Bitcoin*/}
                    <section className='bg-primary p-3 pr-6 rounded-lg text-white md:w-[35%] md:mr-5 md:mt-0 mt-5'>
           
                         {/*Top section containing nametage, icon and rate*/}
                         <span className='flex justify-between'>

                              {/*Top section containing nametage and icon*/}
                              <span className='flex'>
                                   <img
                                   className=''
                                   src={Bitcoin}
                                   alt='icon'
                                   />
                                   <h2 className='drop-shadow-lg'>Bitcoin</h2>
                              </span>
                               {/*Top section containing nametage and icon*/}

                               {/*Top section containing rate*/}
                               <h4 className='animate-pulse'>680/$</h4>
                                {/*Top section containing rate*/}

                         </span>
                          {/*Top section containing nametage, icon and rate*/}

                             {/*Down section containing trade span and date*/}
                             <span className='flex justify-between ml-1'>
                                 <h2 className='text-sm'>May 3, 2022 1:41PM . <span className='text-green-400'>Active</span></h2>

                                    {/*Trade Button*/}
                                  <span className='bg-green-500 hover:bg-green-300 underline px-4 rounded-lg cursor-pointer'>
                                     TRADE
                                  </span>
                                   {/*Trade Button*/}


                              </span>
                               {/*Down section containing trade span and date*/}

                    </section>
                     {/*Bitcoin*/}


                {/*Ethereum*/}
                 <section className='bg-primary p-3 pr-6 rounded-lg text-white md:w-[35%] md:mr-5 md:mt-0 mt-5'>
                          
                          {/*Top section containing nametage, icon and rate*/}
                          <span className='flex justify-between'>
               
                               {/*Top section containing nametage and icon*/}
                               <span className='flex'>
                                    <img
                                    className=''
                                    src={Ethereum}
                                    alt='icon'
                                    />
                                    <h2 className='drop-shadow-lg'>Ethereum</h2>
                               </span>
                                {/*Top section containing nametage and icon*/}
               
                                {/*Top section containing rate*/}
                                <h4 className='animate-pulse'>680/$</h4>
                                 {/*Top section containing rate*/}
               
                          </span>
                           {/*Top section containing nametage, icon and rate*/}
               
                              {/*Down section containing trade span and date*/}
                              <span className='flex justify-between ml-1'>
                                  <h2 className='text-sm'>May 3, 2022 1:41PM . <span className='text-green-400'>Active</span></h2>
               
                                     {/*Trade Button*/}
                                   <span className='bg-green-500 hover:bg-green-300 underline px-4 rounded-lg cursor-pointer'>
                                      TRADE
                                   </span>
                                    {/*Trade Button*/}
               
               
                               </span>
                                {/*Down section containing trade span and date*/}
               
                     </section>
                  {/*Ethereum*/}


                  {/*USDT*/}
                  <section className='bg-primary p-3 pr-6 rounded-lg text-white md:w-[35%] md:mt-0 mt-5 '>
                           
                           {/*Top section containing nametage, icon and rate*/}
                           <span className='flex justify-between'>
                
                                {/*Top section containing nametage and icon*/}
                                <span className='flex mb-2'>
                                     <img
                                     className=''
                                     src={Tether}
                                     alt='icon'
                                     />
                                     <h2 className='drop-shadow-lg'>USDT</h2>
                                </span>
                                 {/*Top section containing nametage and icon*/}
                
                                 {/*Top section containing rate*/}
                                 <h4 className='animate-pulse'>680/$</h4>
                                  {/*Top section containing rate*/}
                
                           </span>
                            {/*Top section containing nametage, icon and rate*/}
                
                               {/*Down section containing trade span and date*/}
                               <span className='flex justify-between ml-1'>
                                   <h2 className='text-sm'>May 3, 2022 1:41PM . <span className='text-green-400'>Active</span></h2>
                
                                      {/*Trade Button*/}
                                    <span className='bg-green-500 hover:bg-green-300 underline px-4 rounded-lg cursor-pointer'>
                                       TRADE
                                    </span>
                                     {/*Trade Button*/}
                
                
                                </span>
                                 {/*Down section containing trade span and date*/}

                      </section>
                       {/*USDT*/}

                </div>
               {/*Currency cards*/}

            </div>

              {/*Hero Currencies section*/}
         </div>
            {/*Hero Contents*/}
    </div>
     //Main Hero Container
  )
}

export default HeroSection