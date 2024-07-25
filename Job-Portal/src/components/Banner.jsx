import React, { useState } from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"

const Banner = ({query,query1, handleInputChange,handleInputChange1}) => {

  return (
    <div className='gap-2 max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 '>
        <h1 className='text-5xl font-bold text-primary mb-3'>Find your <span className='text-[#b0f3c0]'>new job</span> today</h1>
        <p className='text-lg text-white mb-8'>Here is the place to go for the best job opportunities in engineering! Regardless of your experience level or recent graduation, our platform links you with leading companies that provide a variety of engineering-related jobs. Take advantage of your abilities, look through exciting job vacancies, and advance your career. Find an opportunity right now and start creating your future with us!</p>

        {/* Search bars */}
        
        <form>
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-sm rounded shadow-sm  md:w-1/2 w-full'>
                    <input type='text' name='title' id='title' placeholder='What you are looking for?' 
                    className='rounded-2xl bg-gray-400 block flex-1 border-4 bg-transparent py-1.5 pl-8 text-white  placeholder:text-white placeholder:text-lg focus:right-0 sm:text-sm sm:leading-6  '
                    onChange={handleInputChange} value={query}/>
                    <FiSearch className='absolute mt-2.5 ml-2 text-white'/>
                </div>
                <div className='flex md:rounded-s-sm rounded shadow-sm  md:w-1/3 w-full'>
                    <input type='text' name='title' id='title' placeholder='Location' 
                    className='rounded-2xl bg-gray-400 block flex-1 border-4 bg-transparent py-1.5 pl-8 text-white placeholder:text-white placeholder:text-lg focus:right-0 sm:text-sm sm:leading-6  '
                    //value={""}
                    onChange={handleInputChange1} value={query1}
                    />
                    <FiMapPin className='absolute mt-2.5 ml-2 text-white'/>
                </div>
                <button type='submit' className='w-24 bg-[#120e44] text-white md:rounded-2xl rounded-2xl '>Search</button>
            </div>
        </form>
    </div>
  )
}

export default Banner