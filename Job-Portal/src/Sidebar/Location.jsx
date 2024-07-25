import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div className='ml-12'>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div className='ml-10'>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value="Colombo" title="Colombo" name="test"/>
            <InputField handleChange={handleChange} value="Badulla" title="Badulla" name="test"/>
            <InputField handleChange={handleChange} value="Kandy" title="Kandy" name="test"/>
            <InputField handleChange={handleChange} value="Trincomalee" title="Trincomalee" name="test"/>
            <InputField handleChange={handleChange} value="Jaffna" title="Jaffna" name="test"/>
            <InputField handleChange={handleChange} value="Galle" title="Galle" name="test"/>
        </div>
    </div>
  ) 
}

export default Location