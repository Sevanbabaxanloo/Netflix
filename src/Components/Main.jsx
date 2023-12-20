import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Request";
const Main = () => {
  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestMoive).then((response) => {
      setmovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-[3px]">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className=" border bg-gray-300 text-black border-gray-300 py-2 px-5  tracking-[1px]">
              Play
            </button>
            <button className=" border bg-gray text-white border-gray-300 py-2 px-5 ml-4  tracking-[1px]">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm tracking-[1px]">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 tracking-[1px]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
