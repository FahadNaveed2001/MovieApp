"use client"


import { TEInput, TERipple } from "tw-elements-react";
import { BiCameraMovie } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Signup(): JSX.Element {
  const variants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsExit = {
    hidden: { opacity: 1, x: -500 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: -500 }, 
  };
  const variantsExit1 = {
    hidden: { opacity: 1, x: 500 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: -500 }, 
  };

  return (
    <motion.div
      className="g-6 flex h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
      initial="hidden"
      animate="visible"
      variants={variants}
      exit="exit" 
      transition={{ duration: 0.5 }}
    >
      <div className="w-screen md:px-[200px]">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* Left column container */}
            <motion.div
              variants={variantsExit1}
              className="flex rounded-b-lg lg:w-6/12 lg:rounded-l-lg rounded-br-none bg-[#1F1F47] z-10"
              style={{
                background:
                "linear-gradient(to right, #3F2881, #3F2881)",
              }}
          
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <h4 className="mb-6 sm:text-xl md:text-[290px] font-semibold">
                    <BiCameraMovie />
                    </h4>
                    <h1 className="md:text-[50px] font-black">Register Your Account.</h1>
                    <p className="text-sm md:text-[14px]">
                    Dive into a treasure trove of premium movies, available only to registered users. Get first dibs on the hottest releases and timeless classics.
                    Enjoy a tailored movie-watching experience! Our advanced algorithm learns your preferences, serving up recommendations that match your taste.
                    </p>
              </div>
            </motion.div>

                {/* <!-- Right column container with background and description--> */}
                <motion.div 
                className="px-4 md:px-0 lg:w-6/12 "
                variants={variantsExit}>
                
                  <div className="md:mx-6 md:p-12">
             
                    <div className="text-center">
                      <div
                        className="mx-auto w-48 text-[200px] text-[#3F2881]">
                       <BsBoxSeam />
                        </div>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-black md:text-[50px] text-[#3F2881]">
                        TheBox.com
                      </h4>
                    </div>

                    <form className="flex flex-col">
                      <p className="mb-4">Please Register your account here</p>
                      {/* <!--Username input--> */}
                      <input
                      required
                        type="email"
                        placeholder="Email"
                        className="mb-8 focus:outline-none border-b-[1px] border-[#3F2881]"
                      ></input>

                      <input
                        required
                        type="text"
                        placeholder="Username"
                        className="mb-8 focus:outline-none border-b-[1px] border-[#3F2881]"
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        required
                        type="password"
                        placeholder="Password"
                        className="mb-8 focus:outline-none border-b-[1px] border-[#3F2881]"
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium bg-[#3F2881] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                          
                          >
                            Register
                          </button>
                        </TERipple>


                      </div>

                      <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Already have an account?</p>
                        <TERipple rippleColor="light">
                        <Link href="/signin"> <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-[#1F1F47] hover:text-white  focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </button>
                          </Link> 
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>


  );
}