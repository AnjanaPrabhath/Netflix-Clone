import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

      {/* logo or web Name */}
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX</h1>
      </Link>

      {/* buttons right side */}
        <div>
          <Link to='/login'>
            <button className='uppercase pr-6 text-white'>Sign In</button>
          </Link>

          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded text-white uppercase'>Sign Up</button>
          </Link>
        </div>
        
    </div>
  )
}

export default Navbar