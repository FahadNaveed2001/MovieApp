"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Blog() {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const speedFirstDiv = 0.5;
      const speedSecondDiv = 0.3;

      // Move the first div slower than the scroll
      if (firstDivRef.current) {
        firstDivRef.current.style.transform = `translateY(${-scrollY * speedFirstDiv}px)`;
      }

      // Move the second div faster than the scroll
      if (secondDivRef.current) {
        secondDivRef.current.style.transform = `translateY(${-scrollY * speedSecondDiv}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };
  const variantsa = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const variantsb = {
    hidden: { opacity: 0, y: 50 },
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
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="h-[150vh] flex flex-col items-center overflow-x-hidden ">
      <motion.div className="">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsa}
          transition={{ duration: 1 }}
          className="w-screen relative isolate overflow-hidden bg-[#12122b] px-6 py-24 shadow-2xl sm:px-24 xl:py-32 h-[130%] border-b-[1px]"
        >
          <h2 className="mx-auto max-w-2xl text-center text-3xl md:text-[90px] font-bold tracking-tight text-white sm:text-4xl">
            Subscribe Now
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300 md:mt-[50px]">
            Enjoy an extensive library of movies, from the latest blockbusters
            to timeless classics. Theres something for everyone!.
          </p>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="1"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#7775D6"></stop>
                <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        ref={firstDivRef}
        initial="hidden"
        animate="visible"
        variants={variantsb}
        transition={{ duration: 0.5 }}
        className="h-auto bg-[#090918] md:w-[75%] md:mt-[-50px] rounded-3xl drop-shadow-2xl text-center text-white mx-3 md:mx-0"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 mt-[-300px]  h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.2"
          ></circle>
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stop-color="#7775D6"></stop>
              <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row gap-[50px] p-8 "
        >
          <ul className="grid gap-6 mt-6 md:gap-12 md:grid-cols-3 p-5 ">
            <li className="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
              <h3 className="font-bold tracking-tight text-violet-600">
                720p HD
              </h3>
              <p className="mt-6 text-4xl font-bold tracking-tighter">$5</p>
              <p className="mt-3 text-white/60">
                Single Screen with basic resolution starter pack.
              </p>

              <ul className="mt-6 space-y-1.5 flex flex-col">
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>One Screen</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited Streaming</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span>
                    <RxCross2 />
                  </span>
                  <span>Screen Sharing</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span>
                    <RxCross2 />
                  </span>
                  <span>Download</span>
                </li>
                <a
                  href="/"
                  className="relative inline-flex rounded-3xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-transparent  hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded-3xl rotate-[-40deg] bg-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-violet-600 transition-colors duration-300 ease-in-out group-hover:text-[white]">
                    Subscribe Now
                  </span>
                </a>
              </ul>
            </li>
            <li className="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
              <h3 className="font-bold tracking-tight text-violet-600">
                1080p FHD
              </h3>
              <p className="mt-6 text-4xl font-bold tracking-tighter">$10</p>
              <p className="mt-3 text-white/60">
                Two screens with full HD resolution inter pack.
              </p>

              <ul className="mt-6 space-y-1.5 flex flex-col">
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Two Screens</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited Streaming</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Screen Sharing</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <span>
                    <RxCross2 />
                  </span>
                  <span>Download</span>
                </li>
                <a
                  href="/"
                  className="relative inline-flex rounded-3xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-transparent  hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded-3xl rotate-[-40deg] bg-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-violet-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Subscribe Now
                  </span>
                </a>
              </ul>
            </li>
            <li className="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
              <h3 className="font-bold tracking-tight text-violet-600">
                4k Full
              </h3>
              <p className="mt-6 text-4xl font-bold tracking-tighter">$20</p>
              <p className="mt-3 text-white/60">
                Unlimited Screens with 4k resolution Pro pack.
              </p>

              <ul className="mt-6 space-y-1.5 flex flex-col">
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited Screens</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited Streaming</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Screen Sharing</span>
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Download</span>
                </li>
                <a
                  href="/"
                  className="relative inline-flex rounded-3xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-transparent  hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded-3xl rotate-[-40deg] bg-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-violet-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Subscribe Now
                  </span>
                </a>
              </ul>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="h-[200vh] w-full md:px-[250px] items-center mt-[50px] px-[20px]">
        <motion.h1   
        initial="hidden"
        animate="visible"
        variants={variantsb}
        transition={{ duration: 0.5 }} 
        className="mx-auto max-w-2xl text-center text-3xl md:text-[90px] font-bold tracking-tight text-white sm:text-4xl ">
          FAQs
        </motion.h1>
        <div className="mt-[50px] flex flex-col md:flex-row md:justify-between ">
          <div className="w-[100%] md:w-[48%]">
            <motion.div
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: .5 }}
              className="collapse collapse-arrow bg-[#090918] text-white "
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium ">
                What is TheBox.com?
              </div>
              <div className="collapse-content bg-white text-[#090918]">
                <p>
                  {" "}
                  is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br />
                  You can watch as much as you want, whenever you want without a
                  single commercial all for one low monthly price. Theres
                  always something new to discover and new TV shows and movies
                  are added every week!
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: .6 }}
              className="collapse collapse-arrow bg-[#090918] text-white mt-[10px]"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium ">
                Where Can I Watch?
              </div>
              <div className="collapse-content bg-white text-[#090918]">
                <p>
                  {" "}
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
              
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: .7 }}
              className="collapse collapse-arrow bg-[#090918] text-white mt-[10px]"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium ">
                How Do I Cancel?
              </div>
              <div className="collapse-content bg-white text-[#090918]">
                <p>
                  {" "}
                  flexible. There are no pesky contracts and no commitments. You
                  can easily cancel your account online in two clicks. There are
                  no cancellation fees  start or stop your account anytime.
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={variants1}
              transition={{ duration: .8 }}
              className="collapse collapse-arrow bg-[#090918] text-white mt-[10px]"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium ">
                Is it Good For Kids?
              </div>
              <div className="collapse-content bg-white text-[#090918]">
                <p>
                  {" "}
                  TheBox Kids experience is included in your membership to give
                  parents control while kids enjoy family-friendly TV shows and
                  movies in their own space.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={ref1}
            animate={controls}
            initial="hidden"
            variants={variants1}
            transition={{ duration: .5 }}
            className="w-[100%] md:w-[48%] mt-[50px] md:mt-0 px-[20px] text-center md:text-left"
          >
            <p className="text-[14px] md:text-[20px] text-white mb-[30px] md:mb-0">
              Before the opening credits roll, the atmosphere is set. The
              dimming lights, the hushed whispers of anticipation, and the aroma
              of buttered popcorn create a unique ambiance. The cinematic
              setting is carefully designed to draw the audience into a world
              where reality takes a backseat, and imagination takes center
              stage.
              <br />
              Selecting a movie is a crucial step in the art of watching films.
              Different genres cater to diverse tastes, moods, and preferences.
              Whether its a gripping thriller, a heartwarming drama, a
              mind-bending science fiction, or a laugh-out-loud comedy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
