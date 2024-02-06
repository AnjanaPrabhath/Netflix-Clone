import React, { useState } from 'react'
import BgImage from '../assets/Netflix-background_login.jpg'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {

    const[email, setEmail] = useState('')

    const[password, setPassword] = useState('')

    const {user, signUp} = UserAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
           await signUp(email, password) 
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className='w-full h-screen'>
            {/* for background main image */}
            <img className='hidden sm:block absolute w-full h-full object-cover' src={BgImage} alt="" />
            
            {/* overley */}
            <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>

            {/* login form background */}
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[400px] h-[500px] mx-auto bg-black/75 text-white rounded-lg'>
                    <div className='max-w-[320px] mx-auto py-16'> 
                        
                        <h1 className='text-center font-bold text-2xl'>SignUp</h1>
                        
                        <form 
                        onSubmit={handleSubmit} 
                        className='w-full flex flex-col py-4'>
                            <input 
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-3 my-2 bg-gray-700 rounded-md px-4' 
                            type="email" 
                            placeholder='email' 
                            autoComplete='email'/>

                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            className='py-3 my-2 bg-gray-700 rounded-md px-4' 
                            type="password" 
                            placeholder='password' 
                            autoComplete='current-password'/>

                            <button className='bg-red-600 font-bold items-center text-2xl rounded-md py-2 my-4'>SignUp</button>

                            <div className='flex justify-between items-center text-sm text-gray-400'>
                                <p><input className='mr-2' type="checkbox"/> remember me</p>
                                <p>need help?</p>
                            </div>
                            <p className='py-4 text-gray-500 text-center'> 
                            <span>
                                already subscribed to the netfix?
                            </span> {' '}
                            <Link className='text-white' to='/login'>
                            SignIn
                            </Link>
                            </p>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default SignUp