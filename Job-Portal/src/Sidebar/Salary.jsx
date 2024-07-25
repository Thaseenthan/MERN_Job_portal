import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div className='ml-12'>
        <h4 className='text-lg font-medium mb-2 '>Salary</h4>
        
          <div className='mb-4'>
              <Button onClickHandler={handleClick} value="" title="Hourly" />
              <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
              <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
          </div>
          <div className='ml-10'>
          <label className='sidebar-label-container'>
                  <input type='radio' name='test' id='test' value="" onChange={handleChange}/>
                  <span className='checkmark'></span>All
              </label>

              
              <InputField handleChange={handleChange} value={10} title="< $10000" name="test2"/>
              <InputField handleChange={handleChange} value={15} title="< $15000" name="test2"/>
              <InputField handleChange={handleChange} value={20} title="< $20000" name="test2"/>
              <InputField handleChange={handleChange} value={25} title="< $25000" name="test2"/>
              <InputField handleChange={handleChange} value={30} title="< $30000" name="test2"/>
              <InputField handleChange={handleChange} value={35} title="< $35000" name="test2"/>
          </div>
    </div>
  )
}

export default Salary