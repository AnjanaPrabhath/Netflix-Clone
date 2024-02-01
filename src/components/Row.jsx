import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    // create a function for scroll horizontoly through the icons

    //  slide left
    const slideLeft = ()=> {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    // slide right
    const slideRight = ()=> {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <>
        <h2 className='text-white font-bold md:text-xl px-[110px] py-8'>
            {title}
        </h2>

        <div className='relative flex items-center px-[100px] group '>

            {/* row component */}

            <MdChevronLeft 
            onClick={slideLeft}
            size={30} 
            className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-[40px]'/>

            <div id={'slider' + rowID} 
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                {movies.map((item, id) =>(
                    <Movie key={id} item={item} />
                ))}

            </div>

            <MdChevronRight 
            onClick={slideRight}
            size={30} 
            className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-[40px]'/>

        </div>
    </>
  )
}

export default Row