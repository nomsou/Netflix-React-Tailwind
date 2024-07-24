import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fit"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border-0 outline-none p-2 px-5 inline-flex items-center gap-2.5 text-base font-semibold bg-white rounded cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <img className="w-[25px] sm:w-[15px]" src={play_icon} alt="" />
              Play
            </button>
            <button className="border-0 outline-none p-2 px-5 inline-flex items-center gap-2.5 text-base font-semibold bg-[rgba(109,109,110,0.4)] rounded cursor-pointer ml-5 transform hover:scale-110 transition-transform duration-300">
              <img className="w-[25px] sm:w-[15px]" src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
