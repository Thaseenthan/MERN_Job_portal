import React from 'react'
import Location from './Location'
import Salary from './Salary'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

const Sidebar = ({handleClick,handleChange}) => {

  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2 '>Filters</h3>
        <EmploymentType handleChange={handleChange}/>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <WorkExperience handleChange={handleChange}/>
        
    </div>
  )
}

export default Sidebar