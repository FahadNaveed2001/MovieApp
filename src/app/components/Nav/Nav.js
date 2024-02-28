import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsBoxSeam } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="drawer fixed  z-50">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="md:w-[80%] navbar bg-[#0000001e] rounded-b-3xl md:ml-[10%] md:mt-[7px] text-white backdrop-blur-[10px]">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="flex-1 px-2 mx-2 text-[50px]"><BsBoxSeam /><h1 className='text-[20px] mx-3 font-bold mt-[5px]'>TheBox.com</h1></div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal text-[20px] ">
            {/* Navbar menu content here */}
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/">Home</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/movies">Movies</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/tvshows">TV Shows</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/live">News</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/blog">Subscribe</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100'><Link href="/about">About</Link></a></li>
            <li><a  className='px-5 rounded-lg hover:bg-[#0000003d] py-[10px] transition ease-in-out delay-100 bg-[#5121ff]'><Link href="/signin">Signin</Link></a></li>
          </ul>
        </div>

      </div>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      
      <ul class="menu p-4 w-80 min-h-full bg-black bg-opacity-50 text-white gap-3  backdrop-blur-md">
      <div className='mt-[20px]'>
  <div className='text-[140px]'>  <BiCameraMovie /></div>
  <div className='text-[30px] font-semibold '>TheBox.com</div>
</div>
        <li><a className='mt-[50px]'><Link href="/">Home</Link></a></li>
        <li><a><Link href="/movies">Movies</Link></a></li>
        <li><a><Link href="/tvshows">TV Shows</Link></a></li>
        <li><a><Link href="/live">News</Link></a></li>
        <li><a><Link href="/blog">Subscribe</Link></a></li>
        <li><a><Link href="/about">About</Link></a></li>
        <li><a className='bg-[#5121ff]'><Link href="/signin">Sign In</Link></a></li>
        <li className='absolute bottom-10'>@ Created By Fahad Bin Naveed</li>

      
      </ul>
    </div>
  </div>
  )
}

export default Nav
