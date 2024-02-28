"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePlayCircle } from "react-icons/md";
import { CgPentagonDown } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";

export default function TVShows() {
  const [tvShows, setTVShows] = useState([]);
  const [filteredTVShows, setFilteredTVShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageConfig, setImageConfig] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const apiKey = 'e7292681e7e69997ffc099b65496e8d4';

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);
        setTVShows(response.data.results);
        setFilteredTVShows(response.data.results);
        
        const configResponse = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
        setImageConfig(configResponse.data.images);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTVShows();
  }, []);

  useEffect(() => {
    const filtered = tvShows.filter(show => show.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredTVShows(filtered);
  }, [searchQuery, tvShows]);

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleClickShow = (show) => {
    setSelectedShow(show);
    const filtered = filteredTVShows.filter(s => s.id !== show.id);
    setFilteredTVShows([show, ...filtered]);
  };


  const variantsb = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };


  const controls = useAnimation();
  const [ref1, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-[100vh]"> 
    <div className='h-5 md:h-0'></div>
     <div>

      <div className='mt-[15%]  md:absolute md:bottom-[84vh] md:right-9 md:z-50  items-center'>
      <input
        type="text"
        placeholder="Search TV Shows"
        value={searchQuery}
        onChange={handleSearchInputChange}
       className='bg-transparent outline-none border-b-[1px] py-2 pl-2 w-[90%] mx-[20px] md:hidden mb-5'
      />
                  <div className="search-box hidden md:flex">
            <button className="btn-search">
              <i className="fa-search text-[#12122B]"><IoSearchSharp /></i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Search Here..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
      </div>
      
{filteredTVShows.length > 0 && imageConfig && (
  <motion.div  
  initial="hidden"
  animate="visible"
  variants={variantsb}
  transition={{ duration: 0.5 }}
  
  style={{ position: 'relative', marginBottom: '20px' }}>
    <img
      src={`${imageConfig.secure_base_url}${imageConfig.backdrop_sizes[2]}${filteredTVShows[0].backdrop_path}`}
      alt={filteredTVShows[0].name}
      style={{ maxWidth: '100%', marginBottom: '10px' }}
      className="relative w-screen hover:brightness-50 transition-all"
      
    />
 
    <div className="absolute bottom-2 md:bottom-36 left-2 md:left-6 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
<div className='flex flex-row gap-4'> 
<div>
  <button className='text-[10px] border-[1px] px-4 py-3 rounded-3xl flex flex-row md:text-[20px] hover:bg-white hover:text-[#12122B] transition-all hover:-translate-y-1' ><p className='mt-[5px]'><FaPlay /></p><p className='ml-[10px]'>Play Now</p></button>
</div>
<div>
<button className='text-[10px] border-[1px] border-white hover:border-[#12122B] text-[#12122B] px-4 py-3 rounded-3xl flex flex-row md:text-[20px] hover:-translate-y-1 bg-white hover:bg-[#12122B] hover:text-white transition-all' ><p className='mt-[5px]'><RiPlayListAddLine /></p><p className='ml-[10px]'>Save for Later</p></button>

</div>

</div>
      <h2 className="text-[20px] font-bold md:text-[80px]">{filteredTVShows[0].name}</h2>
      <p className="text-[10px] md:text-[20px]">{filteredTVShows[0].overview}</p>

    </div>
   
    <style jsx>{`
      img:hover + div {
        opacity: 100;
      }
    `}</style>
  </motion.div>
)}
      <h1 className='text-white font-extrabold text-[29px] text-center md:text-start md:ml-[2%]'>Shows Tonight</h1>
      <motion.div 
                  ref={ref1}
                  animate={controls}
                  initial="hidden"
                  variants={variants1}
                  transition={{ duration: 0.8 }}
      
      className='flex flex-wrap gap-5 md:mx-[20px] items-start mt-[2%] mb-[5%] '>
  {filteredTVShows.slice(1).map(show => (
    <div key={show.id} className="flex flex-col items-center hover:-translate-y-4 transition-all ">
      <img
        src={imageConfig && show.poster_path ? `${imageConfig.secure_base_url}${imageConfig.poster_sizes[2]}${show.poster_path}` : '/placeholder.jpg'}
        alt={show.name}
        className="max-w-[150px] h-auto mb-2 hover:brightness-50 mt-[5%] rounded-lg"
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />
      <p className='text-white text-center w-[150px] overflow-hidden' style={{ fontSize: '16px', marginBottom: '0' }}>{show.name}</p>
    </div>
  ))}
</motion.div>
    </div>
    </div>
 
  );
}
