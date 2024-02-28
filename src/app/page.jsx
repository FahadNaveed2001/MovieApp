"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the speed of movement by changing the multiplier values
      const speedFirstDiv = 0.2;
      const speedSecondDiv = 0.3;

      // Move the first div slower than the scroll
      firstDivRef.current.style.transform = `translateY(${
        -scrollY * speedFirstDiv
      }px)`;

      // Move the second div faster than the scroll
      secondDivRef.current.style.transform = `translateY(${
        -scrollY * speedSecondDiv
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 },
  };
  const variantsa = {
    hidden: { opacity: 0, y: -50 },
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
    <div className="h-full">
      <div className="pt-[12vh] flex flex-col items-center justify-center text-center relative overflow-hidden text-[50px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsa}
          transition={{ duration: 1.5 }}
          ref={firstDivRef}
        >
          <h1 className="text-[40px] md:text-[90px] font-black text-white drop-shadow-lg">
            Watch Shows Live
          </h1>
          <h1 className="text-[13px] md:text-[20px] font-semibold text-white mt-[-1vh]">
            Stream Live Shows Anywhere Anytime with TheBox.com
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
          className=" w-[80%] md:w-[60%] lg:w-[60%] md:h-[50vh] lg:h-[60vh] bg-gradient-to-b from-[#000000c2] rounded-t-[40px] mt-[5vh] carousel carousel-vertical z-10 shadow-2xl shadow-black"
        >
          <div className="relative">
            <div className="group">
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p1.JPG" alt="Image 1" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p2.JPG" alt="Image 2" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p3.JPG" alt="Image 3" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p4.JPG" alt="Image 4" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p5.JPG" alt="Image 5" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
              <div className="carousel-item relative overflow-hidden transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-100 group-hover:shadow-inner">
                <img src="./p6.JPG" alt="Image 6" className="w-full h-auto" />
                <div className="absolute top-[-30px] left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-[80px]  opacity-70 hover:opacity-100 transition-all duration-200">
                    <FaRegPlayCircle />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div
          ref={secondDivRef}
          className="flex z-9 text-violet-600 opacity-35 lg:text-[250px] font-black mt-[-130px]"
        >
          New movieS
        </div>

        <motion.div 

        className="w-screen md:mt-[-120px]"><img src="/banner.JPG" className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300"></img></motion.div>

        <div className="w-full dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 md:w-full">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <motion.div
               ref={ref1}
               animate={controls}
               initial="hidden"
               variants={variants1}
               transition={{ duration: 0.3 }}
              
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 grayscale hover:grayscale-0 "
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </motion.div>

              <motion.div
           ref={ref1}
           animate={controls}
           initial="hidden"
           variants={variants1}
           transition={{ duration: 0.3 }}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 "
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 grayscale hover:grayscale-0"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </motion.div>

                <motion.div
            ref={ref1}
            animate={controls}
            initial="hidden"
            variants={variants1}
            transition={{ duration: 0.5 }}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 grayscale hover:grayscale-0"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </motion.div>


              <Link href="/signin">
              <motion.div
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: 0.5 }}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110 grayscale hover:grayscale-0"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </motion.div>
              </Link>
            </div>
          </div>
        </div>
       


      </div>
      <div className="blob1 hidden md:flex lg:flex mt-[-220vh]"></div>
      <div className="blob3 hidden md:flex lg:flex mt-[-220vh]"></div>
      <div className="blob hidden md:flex lg:flex mt-[-150vh]"></div>
    </div>
  );
}
