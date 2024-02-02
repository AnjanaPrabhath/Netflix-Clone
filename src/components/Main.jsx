import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {


  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(()=> {
    axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
  console.log(movie)

  // function for slise words of the movie description

  const trunkateString = ((str,num)=> {
    if(str?.length > num){
      return str.slice(0,num) + '...'
    } else{
      return str
    }
  })


  return (
    <div className='w-full h-[550px] text-white pb-4'>

      <div className='w-full h-full '>

        <div className='absolute w-full h-[550px] bg-gradient-to-b from-black'></div>
        <div className='absolute w-full h-[550px] bg-black opacity-30'></div>
        
        {/* home big background image */}
        <img className='w-full h-full object-cover' 
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
        alt={movie?.title} />
        
        {/* home image description on the image */}
        {/* you should use it as a absolute type div to do it */}
        <div className='absolute w-full top-[20%] p-4 md:p-8'>

          <h1 className='text-3xl md:text-4xl font-bold'>
            {movie?.title}
            </h1>

          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-red-600 hover:text-white hover:border-red-600 duration-200'>
              Play</button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later</button>
          </div>

          <p className='text-gray-300 text-sm pb-2'>
            Released : {movie?.release_date}</p>
          <p className='text-sm text-gray-300 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>
            {trunkateString(movie?.overview, 200)}</p>

        </div>

      </div>

    </div>
  )
}

export default Main