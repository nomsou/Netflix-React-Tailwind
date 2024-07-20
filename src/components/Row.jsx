import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Movie from './Movie';

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
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center">
      <div id={'slider'}>
         {movies.map((item, id) => {
          <Movie item={item}/>
         })}
      </div>
    </div>
    </>
  );
}

export default Row