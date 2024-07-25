import React from 'react'
import { Link } from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi"


const Card = ({data}) => {
    const {_id,jobTitle,companyName,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,employmentType,description} = data;

  return (

    <section className='card'>
        <Link to={"/job/"+_id} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt='' className='w-32 h-32 m-6 mr-1' />
        <div className='ml-10'>
            <h4 className='text-primary mb-1 font-semibold'>{companyName}</h4>
            <h3 className='text-2xl font-bold mb-2 '>{jobTitle}</h3>
            <div className='block text-primary text-base flex-wrap gap-2 mb-2 '>
                <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
                <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
            </div>
            {/* <p className='text-base text-primary/70'>{description}</p> */}

        </div>
        </Link>

    </section>
   
  )
}

export default Card