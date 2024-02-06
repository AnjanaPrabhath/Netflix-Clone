import React from 'react'
import BgImage from '../assets/Netflix-background_login.jpg'

const SignUp = () => {
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
                    <div className='max-w-[320px] mx-auto py-6'>
                        <h1 className='text-center font-bold text-2xl'>SignUp</h1>
                        <form>
                            <input type="email"/>
                            <input type="password"/>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default SignUp