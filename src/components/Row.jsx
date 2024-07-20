import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([]);
  const[like, setLike] = useState(false);

  useEffect(()=> {
    axios.get(fetchURL).then((response) => {
      // console.log(response.data.results);
      setMovies(response.data.results)
    })

  }, [fetchURL])


  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className="relative flex items-center group">
      <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
      <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
         {movies.map((item, id) => (
          <Movie item={item}/>
         ))}
      </div>
      <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
    </div>
    </>
  );
}

export default Row