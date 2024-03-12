"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { CgProfile } from "react-icons/cg";
import { PiAppStoreLogoDuotone } from "react-icons/pi";

const Navbar = () => {
    return (
        <>
            <div className='outer p-4 '>
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1
                    }}
                    className="main flex justify-between  text-white p-2">
                    <div className='company-name flex gap-2 text-3xl cursor-pointer '>
                        <div className='mt-1'><PiAppStoreLogoDuotone /></div>
                        <div><h1
                            className=' font-bold text-transparent gradient-text animate-gradient'>The Future Project</h1></div>
                    </div>

                    {/* <button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button> */}
                    <div className='flex gap-4 mt-1'>
                        <div className='hover:cursor-pointer transform hover:scale-125 transition ease-in-out duration-150 hover:bg-gray-500  px-5 py-1 rounded-full'><h1>Api</h1></div>
                        <div className='hover:cursor-pointer transform hover:scale-125 transition ease-in-out duration-150 hover:bg-gray-500  px-5 py-1 rounded-full'><h1>Extensions</h1></div>
                        <div className='hover:cursor-pointer transform hover:scale-125 transition ease-in-out duration-150 hover:bg-gray-500  px-5 py-1 rounded-full'><h1>Subscription</h1></div>
                        <div className='hover:cursor-pointer transform hover:scale-125 transition ease-in-out duration-150 hover:bg-gray-500  px-5 py-1 rounded-full'><h1>Contact</h1></div>
                    </div>
                    <div className='hover:cursor-pointer transform hover:scale-125 transition ease-in-out duration-150 hover:bg-gray-500  px-5 py-1 rounded-full flex gap-2 mr-3'>
                        <div className='mt-1'><CgProfile /></div>
                        <div><h1>Sign up / Log in</h1></div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar