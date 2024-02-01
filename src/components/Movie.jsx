import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({item}) => {

    const [like, setLike] = useState(false)

  return (
    <div className='w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative px-2 '>

        {/* random image for row items */}
        <img className='w-full h-auto block' 
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
        alt={item?.title} />

        {/* overlay part */}
        <div className='absolute top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold justify-center items-center text-center h-full flex'>
                {item?.title}
            </p>
            <p>
                {like ? <FaHeart className='absolute top-4 left-4 text-gray-400'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-400'/>}
            </p>
        </div>

    </div>
  )
}

export default Movie