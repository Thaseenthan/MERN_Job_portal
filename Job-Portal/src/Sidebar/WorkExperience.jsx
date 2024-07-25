import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div className='ml-12'>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div className='ml-10'>
        <label className='sidebar-label-container'>
            <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
            <span className='checkmark'></span>Any experience
        </label>

        <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/>
        <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>
        <InputField handleChange={handleChange} value="1-3 years" title="1-3 Years" name="test"/>
        <InputField handleChange={handleChange} value="3-5 years" title="3-5 Years" name="test"/>

    </div>
</div>
  )
}

export default WorkExperience