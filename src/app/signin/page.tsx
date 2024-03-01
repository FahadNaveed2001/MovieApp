"use client";
import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { BiCameraMovie } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Signin(): JSX.Element {
  const variantsa = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  const variantsExit = {
    hidden: { opacity: 1, x: 500, transition: { duration: 0.7 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 1, x: -500, transition: { duration: 0.7 } }, 
  };
  const variantsExit1 = {
    hidden: { opacity: 1, x: -500, transition: { duration: 0.7 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 1, x: -500, transition: { duration: 0.7 } }, 
  };

  const variantsExit2 = {
    hidden: { opacity: 1, x: -250, transition: { duration: 0.5 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1, x: -500, transition: { duration: 0.5 } }, 
  };

  return (
    <motion.div
      className=" g-6 flex min-h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={variantsa}
      transition={{ duration: 1 }}
    >
            <div className="h-30"></div>
      <div className="w-screen md:px-[50px] md:mt-[0] mt-[20%]">
        <div className="block rounded-lg dark:bg-neutral-800 ">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <motion.div
              className="px-4 md:px-0 lg:w-6/12 "
              variants={variantsExit}
            >
              <div className="md:mx-6 md:p-12">
                <div className="text-center">
                  <div className="mx-auto w-48 text-[200px] text-[white]">
                    <BsBoxSeam />
                  </div>
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-black md:text-[50px] text-[white]">
                    TheBox.com
                  </h4>
                </div>

                <form className="flex flex-col text-[white]">
                  <p className="mb-4">Please login to your account</p>
                  {/* <!--Username input--> */}
                  <input
                    type="text"
                    placeholder="Username"
                    className="mb-8 focus:outline-none border-b-[1px] text-[white] bg-transparent"
                  ></input>

                  {/* <!--Password input--> */}
                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-8 focus:outline-none border-b-[1px] text-[white] bg-transparent"
                  ></input>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <TERipple rippleColor="light" className="w-full">
                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium bg-[white] uppercase leading-normal text-[#3F2881] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                      >
                        Log in
                      </button>
                    </TERipple>

                    <a href="/">Forgot password?</a>
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Dont have account?</p>
                    <TERipple rippleColor="light">
                      <Link href="/signup">
                        {" "}
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-[#1F1F47] hover:text-white focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </button>
                      </Link>
                    </TERipple>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* <!-- Right column container with background and description--> */}
            <motion.div
              variants={variantsExit1}
              className="bg-[#3F2881] mb-[15%] md:mb-0 flex rounded-b-lg lg:w-6/12 lg:rounded-r-lg   z-10 shadow-2xl shadow-black rounded-r-[15%] md:rounded-l-[15%]"
         
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <motion.h4 
                      variants={variantsExit2}
                      className="mb-6 text-[80px] md:text-[290px] font-semibold ">
                  <BiCameraMovie className="md:shadow-2xl md:shadow-black rounded-3xl" />
                </motion.h4>
                <h1 className="md:text-[50px] font-black">
                  Login Your Account.
                </h1>
                <p className="text-sm md:text-[15px]">
                  Dive into a treasure trove of premium movies, available only
                  to registered users. Get first dibs on the hottest releases
                  and timeless classics. Enjoy a tailored movie-watching
                  experience! Our advanced algorithm learns your preferences,
                  serving up recommendations that match your taste.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  
    </motion.div>
  );
}
