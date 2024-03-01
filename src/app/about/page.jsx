"use client";

import { BsBoxSeam } from "react-icons/bs";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation,AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from 'gsap';
import { IoIosSettings } from "react-icons/io";


export default function About() {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
 


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const speedFirstDiv = 0.5;
      const speedSecondDiv = 0.3;

      // Move the first div slower than the scroll
      if (firstDivRef.current) {
        firstDivRef.current.style.transform = `translateY(${
          -scrollY * speedFirstDiv
        }px)`;
      }

      // Move the second div faster than the scroll
      if (secondDivRef.current) {
        secondDivRef.current.style.transform = `translateY(${
          -scrollY * speedSecondDiv
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variantsa = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsb = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsc = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const controls = useAnimation();
  const [ref1, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

 const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const sliderTexts = ["Frontend Developer", "Backend Developer", "Full-Stack Developer"];

  useEffect(() => {

    const interval = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        setActiveTextIndex((prevIndex) =>
          prevIndex === sliderTexts.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true); // Show the next text after hiding animation completes
      }); // Wait for hiding animation to complete before showing the next text
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const variantsd = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className=" text-[white] items-center bg-[#1F1F47]">
      <>
        <section className="overflow-hidden pt-[10vh] pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variantsa}
                  transition={{ duration: 0.5 }}
                  className="flex items-center -mx-3 sm:-mx-4 "
                >
                  <div className="w-full px-3 sm:px-4 xl:w-1/2 z-[10]">
                    <div className="py-3 sm:py-4">
                      <img
                        src="/john.png"
                        alt=""
                        className="w-full rounded-2xl "
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="upgrade.png"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
           <div className="relative z-10 my-4"> {" "} <img src="orion.png" alt="" className="w-full rounded-2xl" />{" "} <span className="absolute -right-9 -bottom-5 z-[-1]"> {" "} <svg width={134} height={106} viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <circle cx="1.66667" cy={104} r="1.66667" transform="rotate(-90 1.66667 104)" fill="#fff" />{" "} <circle cx="16.3333" cy={104} r="1.66667" transform="rotate(-90 16.3333 104)" fill="#fff" />{" "} <circle cx={31} cy={104} r="1.66667" transform="rotate(-90 31 104)" fill="#fff" />{" "} <circle cx="45.6667" cy={104} r="1.66667" transform="rotate(-90 45.6667 104)" fill="#fff" />{" "} <circle cx="60.3334" cy={104} r="1.66667" transform="rotate(-90 60.3334 104)" fill="#fff" />{" "} <circle cx="88.6667" cy={104} r="1.66667" transform="rotate(-90 88.6667 104)" fill="#fff" />{" "} <circle cx="117.667" cy={104} r="1.66667" transform="rotate(-90 117.667 104)" fill="#fff" />{" "} <circle cx="74.6667" cy={104} r="1.66667" transform="rotate(-90 74.6667 104)" fill="#fff" />{" "} <circle cx={103} cy={104} r="1.66667" transform="rotate(-90 103 104)" fill="#fff" />{" "} <circle cx={132} cy={104} r="1.66667" transform="rotate(-90 132 104)" fill="#fff" />{" "} <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="#fff" />{" "} <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="#fff" />{" "} <circle cx={31} cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#fff" />{" "} <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="#fff" />{" "} <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="#fff" />{" "} <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="#fff" />{" "} <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="#fff" />{" "} <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="#fff" />{" "} <circle cx={103} cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="#fff" />{" "} <circle cx={132} cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="#fff" />{" "} <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="#fff" />{" "} <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="#fff" />{" "} <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="#fff" />{" "} <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="#fff" />{" "} <circle cx={31} cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="#fff" />{" "} <circle cx={31} cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="#fff" />{" "} <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="#fff" />{" "} <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="#fff" />{" "} <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="#fff" />{" "} <circle cx="60.3333" cy="30.9998" r="1.66667" transform="rotate(-90 60.3333 30.9998)" fill="#fff" />{" "} <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="#fff" />{" "} <circle cx="88.6667" cy="30.9998" r="1.66667" transform="rotate(-90 88.6667 30.9998)" fill="#fff" />{" "} <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="#fff" />{" "} <circle cx="117.667" cy="30.9998" r="1.66667" transform="rotate(-90 117.667 30.9998)" fill="#fff" />{" "} <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="#fff" />{" "} <circle cx="74.6667" cy="30.9998" r="1.66667" transform="rotate(-90 74.6667 30.9998)" fill="#fff" />{" "} <circle cx={103} cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="#fff" />{" "} <circle cx={103} cy="30.9998" r="1.66667" transform="rotate(-90 103 30.9998)" fill="#fff" />{" "} <circle cx={132} cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="#fff" />{" "} <circle cx={132} cy="30.9998" r="1.66667" transform="rotate(-90 132 30.9998)" fill="#fff" />{" "} <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="#fff" />{" "} <circle cx="1.66667" cy="16.3333" r="1.66667" transform="rotate(-90 1.66667 16.3333)" fill="#fff" />{" "} <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="#fff" />{" "} <circle cx="16.3333" cy="16.3333" r="1.66667" transform="rotate(-90 16.3333 16.3333)" fill="#fff" />{" "} <circle cx={31} cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="#fff" />{" "} <circle cx={31} cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)" fill="#fff" />{" "} <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="#fff" />{" "} <circle cx="45.6667" cy="16.3333" r="1.66667" transform="rotate(-90 45.6667 16.3333)" fill="#fff" />{" "} <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="#fff" />{" "} <circle cx="60.3333" cy="16.3333" r="1.66667" transform="rotate(-90 60.3333 16.3333)" fill="#fff" />{" "} <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="#fff" />{" "} <circle cx="88.6667" cy="16.3333" r="1.66667" transform="rotate(-90 88.6667 16.3333)" fill="#fff" />{" "} <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="#fff" />{" "} <circle cx="117.667" cy="16.3333" r="1.66667" transform="rotate(-90 117.667 16.3333)" fill="#fff" />{" "} <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="#fff" />{" "} <circle cx="74.6667" cy="16.3333" r="1.66667" transform="rotate(-90 74.6667 16.3333)" fill="#fff" />{" "} <circle cx={103} cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="#fff" />{" "} <circle cx={103} cy="16.3333" r="1.66667" transform="rotate(-90 103 16.3333)" fill="#fff" />{" "} <circle cx={132} cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="#fff" />{" "} <circle cx={132} cy="16.3333" r="1.66667" transform="rotate(-90 132 16.3333)" fill="#fff" />{" "} <circle cx="1.66667" cy="45.3333" r="1.66667" transform="rotate(-90 1.66667 45.3333)" fill="#fff" />{" "} <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="#fff" />{" "} <circle cx="16.3333" cy="45.3333" r="1.66667" transform="rotate(-90 16.3333 45.3333)" fill="#fff" />{" "} <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="#fff" />{" "} <circle cx={31} cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)" fill="#fff" />{" "} <circle cx={31} cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="#fff" />{" "} <circle cx="45.6667" cy="45.3333" r="1.66667" transform="rotate(-90 45.6667 45.3333)" fill="#fff" />{" "} <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="#fff" />{" "} <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="#fff" />{" "} <circle cx="60.3333" cy="1.66683" r="1.66667" transform="rotate(-90 60.3333 1.66683)" fill="#fff" />{" "} <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="#fff" />{" "} <circle cx="88.6667" cy="1.66683" r="1.66667" transform="rotate(-90 88.6667 1.66683)" fill="#fff" />{" "} <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="#fff" />{" "} <circle cx="117.667" cy="1.66683" r="1.66667" transform="rotate(-90 117.667 1.66683)" fill="#fff" />{" "} <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="#fff" />{" "} <circle cx="74.6667" cy="1.66683" r="1.66667" transform="rotate(-90 74.6667 1.66683)" fill="#fff" />{" "} <circle cx={103} cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="#fff" />{" "} <circle cx={103} cy="1.66683" r="1.66667" transform="rotate(-90 103 1.66683)" fill="#fff" />{" "} <circle cx={132} cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="#fff" />{" "} <circle cx={132} cy="1.66683" r="1.66667" transform="rotate(-90 132 1.66683)" fill="#fff" />{" "} </svg>{" "} </span>{" "} </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsa}
                transition={{ duration: 0.5 }}
                className="hidden md:flex rounded-[20%] bg-[#12122B] md:h-[100vh] md:w-[130vh] opacity-85 absolute ml-[-20%] shadow-2xl shadow-black"
              ></motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsb}
                transition={{ duration: 0.5 }}
                className="w-full px-4 lg:w-1/2 xl:w-5/12 mx-6"
              >
                <div className="mt-10 lg:mt-0 flex-row">
                  <div className="flex-1  text-[100px]">
                    <BsBoxSeam />
                    <h1 className="text-[20px] font-bold mt-[15px]">
                      TheBox.com
                    </h1>
                  </div>
                  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] mt-[20px]">
                    To Make your Movie Nights Fantastic.
                  </h2>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    Born into humble surroundings, faced early challenges that
                    would shape their destiny. Despite adversity, they embraced
                    each obstacle as an opportunity for growth, fueling an
                    insatiable hunger for success. Their journey is one of
                    relentless pursuit, characterized by unwavering perseverance
                    in the face of adversity.
                  </p>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    Prepare to be moved, inspired, and uplifted as you
                    experience the extraordinary tale. This is more than just a
                    story its a testament to the indomitable human spirit and
                    the limitless possibilities that await those who dare to
                    dream.
                  </p>
                  <a
                    href="/signin"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </>
      {/* <div className="pb-20 text-center text-[60px] font-black relative">
        Fahad Bin Naveed{" "}         
         <AnimatePresence>
        <motion.p
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            key={activeTextIndex}
          className="absolute"
          >
            {sliderTexts[activeTextIndex]}
          </motion.p>
          </AnimatePresence>

      </div> */}




      <div
        ref={ref1}
                 className="flex flex-col items-center  pt-10 bg-[#12122B] md:rounded-[10%] rounded-[100px] shadow-2xl shadow-black p-5">
        <div className="flex">
          <button
            className={`px-4 py-2 mx-1 rounded-t-lg focus:outline-none bg-transparent transition ${
              activeTab === 1
                ? "border-b-2 text-white tracking-[3px] -translate-y-2"
                : "text-white opacity-80"
            }`}
            onClick={() => handleTabClick(1)}
          >
            About App
          </button>
          <button
            className={`px-4 py-2 mx-1 rounded-t-lg focus:outline-none bg-transparent transition ${
              activeTab === 2
                ? "border-b-2 text-white tracking-[3px] -translate-y-2"
                : "text-white opacity-80"
            }`}
            onClick={() => handleTabClick(2)}
          >
            About Me
          </button>
        </div>
        <div className="bg-tansparent p-4 rounded-b-lg transition-opacity md:w-[70vw] ">
          {activeTab === 1 && (
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsc}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap md:justify-between py-10">
                  <div className="md:w-[30%]   ">
                    <img
                      src="./Capture.PNG"
                      className="rounded-[30px] border md:border-2 shadow-2xl shadow-black animated-image"
                    />
                  </div>
                  <div className="w-[92vw] md:w-[65%] md:mt-0 md:text-start text-center mt-[30px]">
                    <div className="text-[50px] md:text-[70px] font-bold md:font-semibold">
                      TheBox.com
                    </div>
                    <div className="md:leading-8">
                      Welcome to TheBox.com, your ultimate destination for all
                      things movies! At TheBox.com, we're passionate about
                      cinema and committed to providing you with the best
                      movie-watching experience right at your fingertips.
                      <br />
                      <br />
                      Our mission is simple: to connect movie lovers with their
                      favorite films and discover exciting new titles
                      effortlessly. Whether you're a seasoned cinephile or just
                      looking for something to watch on a cozy night in,
                      TheBox.com has you covered.
                      <br />
                      Behind TheBox.com is a dedicated team of movie buffs,
                      designers, and developers working tirelessly to bring you
                      the best movie-watching experience possible. We're
                      constantly innovating and improving to ensure that
                      TheBox.com remains your go-to destination for all your
                      movie needs. We love hearing from our users! Whether you
                      have feedback, suggestions, or just want to say hello,
                      feel free to reach out to us. Your input helps us make
                      TheBox.com even better. Join us on TheBox.com and embark
                      on a cinematic journey like never before. Sit back, relax,
                      and let the magic of movies unfold.
                      <br />
                      Happy Watching!
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          {activeTab === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsc}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col-reverse md:flex-row gap md:justify-between py-10">
                <div className="md:w-[60%] mt-[30px] md:mt-0 md:text-start text-center ">
                  <div className="text-[50px] md:text-[50px] font-bold md:font-semibold flex">
                 <span className="">Fahad Bin Naveed</span> <span className="hidden md:flex mt-3 md:ml-4"><IoIosSettings className="spinning-icon" /></span>
                  </div>
                  <div className="">
                    Driven and innovative MERN stack developer with a passion
                    for crafting robust and scalable web applications. With 1
                    year of experience in software development, I specialize in
                    utilizing the MERN (MongoDB, Express.js, React.js, Node.js)
                    stack to build dynamic and responsive web solutions. My
                    expertise lies in designing and implementing efficient
                    backend architectures, creating seamless user experiences,
                    and ensuring the reliability and security of web
                    applications. I thrive in collaborative environments where I
                    can contribute my problem-solving skills and enthusiasm for
                    cutting-edge technologies to drive project success.
                    Proficient in MongoDB, Express.js, React.js, and Node.js
                    (MERN stack) Strong understanding of frontend technologies
                    including HTML5, CSS3, and JavaScript ES6+ Experience with
                    RESTful API development and integration Familiarity with
                    modern JavaScript libraries and frameworks such as Redux and
                    Vue.js Knowledge of database management systems like MySQL
                    and PostgreSQL Expertise in version control systems such as
                    Git Ability to work with Agile methodologies and DevOps
                    practices Excellent communication and teamwork skills.
                  </div>
                  <br/>
                  <div><span className="font-semibold">Gmail</span>: fahadshelby2001@gmail.com</div>
                  <br/>
                  <div><span className="font-semibold">GitHub</span>: FahadNaveed2001</div>
                  <br/>
                  <div><span className="font-semibold">Linkdin</span>: Fahad Bin Naveed</div>
                </div>
                <div className="w-[92vw] md:w-[35%] ">
                <img src="./profile.jpeg" className="rounded-[30px] shadow-2xl shadow-black animated-image" alt="Profile" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
        {/* <div 
      ref={firstDivRef}
      className="absolute text-[100px] font-black z-0 top-[100%] w-[99vw] opacity-20">
      <div className="text-center">
      Fahad Bin Naveed
      </div></div> */}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
