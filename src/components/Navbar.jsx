import React from 'react'

const Navbar = () => {

  return (

    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

      {/* logo or web Name */}

        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX</h1>

      {/* buttons right side */}
        <div>
            <button className='uppercase pr-6 text-white'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded text-white uppercase'>Sign Up</button>
        </div>
        
    </div>
  )
}

export default Navbar