
import React, { useState } from 'react';

const RegistrationForm = ({ onClose }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log('Form Data Submitted: ', formData);
        onClose(); // Close the form after submission
    }
  return (
    <div className='registration-form-container'>
            <form className='registration-form' onSubmit={handleSubmit}>
                <h2>Application for a Job</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='resume'>Resume:</label>
                    <input
                        type='file'
                        id='resume'
                        name='resume'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <button type='submit' className='submit-btn'>Submit</button>
                    <button type='button' className='cancel-btn' onClick={onClose}>Cancel</button>
                </div>
            </form>
            <style>
            {`
                .registration-form-container {
                    background: rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 500px;
                    margin: 0 auto;
                    color: white;
                }
                .registration-form {
                    display: flex;
                    flex-direction: column;
                }
                .form-group {
                    margin-bottom: 15px;
    
                }
                .form-group label {
                    margin-bottom: 5px;
                    display: block;
                }
                .form-group input {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: none;
                }
                .submit-btn, .cancel-btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    margin-top: 10px;
                    cursor: pointer;

                }
                .submit-btn {
                    background-color: #4CAF50;
                    color: white;
                    margin-right: 20px;
                }
                .cancel-btn {
                    background-color: #f44336;
                    color: white;
                    
                }
            `}
            </style>
        </div>
    );
  
}

export default RegistrationForm