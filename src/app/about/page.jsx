"use client";
import { motion } from "framer-motion";
import { BsBoxSeam } from "react-icons/bs";
import React, { useState } from 'react';

export default function About() {
  const variantsa = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsb = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  
  return (
    <h1 className=" text-[white] items-center">
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
                    <div className="relative z-10 my-4">
                      <img
                        src="orion.png"
                        alt=""
                        className="w-full rounded-2xl"
                      />

                      <span className="absolute -right-9 -bottom-5 z-[-1]">
                        <svg
                          width={134}
                          height={106}
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3334"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx={31}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#fff"
                          />
                          <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx={103}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#fff"
                          />
                          <circle
                            cx={132}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#fff"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsa}
                transition={{ duration: 0.5 }}
                className="hidden md:flex rounded-[20%] bg-[#12122B] md:h-[100vh] md:w-[130vh] opacity-85 absolute ml-[-20%] shadow-2xl shadow-black">

                </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsb}
                transition={{ duration: 0.5 }}
                className="w-full px-4 lg:w-1/2 xl:w-5/12 mx-6">

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




    <div className="flex flex-col items-center">
      <div className="flex">
        <button
          className={`px-4 py-2 mx-1 rounded-t-lg focus:outline-none bg-transparent transition ${
            activeTab === 1
              ? 'border-b text-white tracking-[3px] -translate-y-2'
              : 'text-gray-600'
          }`}
          onClick={() => handleTabClick(1)}
        >
          About App
        </button>
        <button
          className={`px-4 py-2 mx-1 rounded-t-lg focus:outline-none bg-transparent transition ${
            activeTab === 2
            ? 'border-b text-white tracking-[3px] -translate-y-2'
              : 'text-gray-600'
          }`}
          onClick={() => handleTabClick(2)}
        >
      About Us
        </button>

      </div>
      <div className="bg-tansparent p-4 rounded-b-lg transition-opacity">
        {activeTab === 1 && <div>
       
          </div>}
        {activeTab === 2 && <div>
          
          </div>}
      </div>
    </div>




    </h1>
  );
}
