import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

// log in with form
  const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const history = useNavigate()
      
      const handleSubmit = async(e) => {
          e.preventDefault()
          try{
              await signInWithEmailAndPassword(auth,email,password)
              alert("Login Succesfully!!!")
              history("/")

          }catch(err){
              console.log(err)
              alert("Email or Password is incorrect!")

          }

    }


  return (
 
    <div className='flex justify-center align-middle '>
        <form className='bg-slate-800 border border-slate-400 rounded-2xl p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-50 relative' onSubmit={handleSubmit}>
            <h2 className='text-3xl text-white font-bold text-center mb-6'> Log In</h2>
            <div className='my-5 relative'>
              <input type='text' className='block w-72 py-2.3 px-0 text-md text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor='email' className='absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10' > Your Email:</label>
            </div>
            <div className='my-8 relative'>
              <input type='password'  className='block w-72 py-2.3 px-0 text-md text-white bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' onChange={(e) => setPassword(e.target.value)}/>
              <label htmlFor='password' className='absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10'>
                  Your Password:</label>
            </div>

            <button type='submit' className='font-semibold w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-900 hover:bg-emerald-800 hover:text-white  py-2'>Login</button>
            <p className='text-white'>Don't Have an Account? <Link to={"/sign-up"} className='underline'>Register Here!</Link></p>
        </form>
    </div>
  )
}

export default Login