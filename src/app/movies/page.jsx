"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiArrowBendRightUpBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { PiSmileySad } from "react-icons/pi";


export default function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [poster, setPoster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const variantsa = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsb = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsc = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 0.8, y: 0 },
  };

  useEffect(() => {
    // Fetch new released movie suggestions
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1`
      )
      .then((response) => {
        setSuggestions(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    if (searchTerm === "") {
      setPoster(
        <div className="text-white text-center mt-[50%]">

          <strong>Oops!</strong> <br/>It seems search field is empty.
        </div>
      );
    } else {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${searchTerm}`
        )
        .then((response) => {
          if (response.data.results.length > 0) {
            const movie = response.data.results[0];
            setPoster(
              <motion.div
                className="items-center mb-[20%] md:w-[80%] md:ml-[10%]"
                initial="hidden"
                animate="visible"
                variants={variantsb}
                transition={{ duration: 0.5 }}
              >
                <div className="flex mt-[15%] md:mt-[7%] justify-between mx-4 md:w-[90%] md:ml-[5%]">
                  <p className=" text-white items-start">
                    You Searched for <strong>{movie.title}</strong> are here:
                  </p>

                  <button
                    onClick={() => setPoster(null)}
                    className="close-button text-white text-[30px]"
                  >
                    <IoCloseCircleOutline />
                  </button>
                </div>
                <div className="flex md:w-[100%] md:ml-[5%]  mt-[2%] flex-col md:flex-row gap-7 justify-between">
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="img-responsive rounded-3xl md:w-[35%]"
                    alt="Movie Poster"
                  />
                  <div className="movie-details">
                    {" "}
                    <div className=" text-center md:text-start items-center">
                      <p>
                        <p className=" md:text-[90px] text-white font-semibold">
                          {movie.title}
                        </p>
                        <p className="text-white md:text-[20px]">
                          {movie.release_date}
                        </p>{" "}
                        <p className="text-white">{movie.overview}</p>
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          } else {
            return axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies`
            );
          }
        })
        .then((response) => {
          if (response.data.results.length > 0) {
            const movie = response.data.results[0];
            setPoster(
              <div className="mt-[50%] md:mt-[30%] flex flex-col items-center">
                {" "}
             <div className="text-white text-[250px] opacity-70"><PiSmileySad /></div>
                <div className="text-white  mt-[50px]">
                  <p className="text-[20px]">We are afraid nothing was found for that search.</p>
                </div><br/>
    
                <div
                  onClick={() => setPoster(null)}
                  className=" text-white text-center cursor-pointer hover:-translate-y-1 transition-all"
                >
                 Go back
                </div>
              </div>
            );
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="min-h-[100vh]  flex flex-col justify-start items-center relative z-[1]">
      <div className="w-full  p-4 absolute top-0 z-10 md:w-[65%]">
        <div className="h-[8vh]"></div>
        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Search Here..."
            id="term"
            value={searchTerm}
            onChange={handleInputChange}
            className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
          />{" "}
          <button
            id="search"
            onClick={handleSubmit}
            className="bg-[#4545db] hover:px-20 transition-all text-white font-semibold px-8 py-2 rounded-r-lg outline-none"
          >
            <LuSearch />
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {poster === null && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsc}
          transition={{ duration: 0.5 }}
          className="absolute mt-[10%] text-[70px] font-bold text-white opacity-20 hidden md:flex z-[1]"
        >
          {" "}
          <div>Search Movie You Want to Watch</div>
          <div className="w-[2vh]"></div>
          <div className="arrow">
            <PiArrowBendRightUpBold />
          </div>
        </motion.div>
      )}
      <div id="poster" className="mt-20">
        {" "}
        {loading ? (
          <div className="mt-[80px] text-white">
            <strong>Loading...</strong>
          </div>
        ) : (
          poster || (
            <motion.div
              className="mt-[15%] z-[1]"
              initial="hidden"
              animate="visible"
              variants={variantsa}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={variantsb}
                transition={{ duration: 1 }}
                className="text-white text-2xl text-center"
              >
                New Released Movies
              </motion.h2>
              <div className="flex flex-wrap justify-center items-center mt-4 gap-2 md:gap-4">
                {suggestions.map((movie) => (
                  <div
                    key={movie.id}
                    className="m-4 hover:-translate-y-2 transition-all"
                  >
                    <img
                      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="md:w-32 md:h-48 object-cover brightness-[0.6] hover:brightness-100 transition-all rounded-3xl"
                    />
                    <p className="text-white text-center font-semibold md:font-normal text-[30px] md:text-[10px] mt-2">{movie.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        )}{" "}
        <div 
        
        className="fixed w-full bottom-0 z-[-1] opacity-50 hidden md:flex right-0">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="35%" stop-color="ffffff00"></stop><stop offset="95%" stop-color="#9900ef"></stop></linearGradient></defs><path d="M 0,500 L 0,187 C 37.44672660207996,155.52871959328445 74.89345320415993,124.0574391865689 126,135 C 177.10654679584007,145.9425608134311 241.87291378544023,199.29896284700888 284,195 C 326.12708621455977,190.70103715299112 345.61489165407914,128.74670942539564 390,121 C 434.38510834592086,113.25329057460438 503.66751959824285,159.71419945140863 545,197 C 586.3324804017572,234.28580054859137 599.71502995295,262.39649276897 637,241 C 674.28497004705,219.60350723102997 735.4723605899571,148.69982947271123 791,114 C 846.5276394100429,79.30017052728877 896.3955276872215,80.8041893401851 933,118 C 969.6044723127785,155.1958106598149 992.9455286611574,228.08341316654833 1030,220 C 1067.0544713388426,211.91658683345167 1117.8223576681498,122.86215799362158 1173,96 C 1228.1776423318502,69.13784200637842 1287.7650406662428,104.46795485896527 1333,130 C 1378.2349593337572,155.53204514103473 1409.1174796668786,171.26602257051735 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="2" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        </div>
      </div>{" "}
     
    </div>
  );
}
