"use client";
import React from 'react'
import { TbAddressBook } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>  <div className="outer shadow-lg shadow-slate-500 bg-gradient-to-r from-[#0d0c13] via-[#343046] to-[#0d0c13] rounded-md">
            <div className='text-white   p-6 flex justify-between'>
                <div className='flex flex-col ml-3'>
                    <div><h1 className='text-xl'>Find Us</h1></div>
                    <div className='flex gap-2 text-sm mt-8'>
                        <div className='mt-1'><TbAddressBook /></div>
                        <div >kamar para , jadavpur , kolkata 700032</div>
                    </div>
                    <div className='flex gap-2 mt-2 text-sm'>
                        <div className='mt-1'><IoMdCall /></div>
                        <div>xx xxxx xxxx</div>
                    </div>
                    <div className='flex gap-2 mt-2 text-sm'>
                        <div className='mt-1'><CgMail /></div>
                        <div className='font-bold'>thefutureproject420@gmail.com</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div><h1 className='text-xl'>Company</h1></div>
                    <div className='flex flex-col gap-2 mt-2 text-sm ml-1'>
                        <div >about us</div>
                        <div >our services</div>
                        <div >privacy policy</div>
                        <div >affliate program</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-xl'>Quick Links</div>
                    <div className='mt-2 flex flex-col gap-2 text-sm ml-1'>
                        <div>FAQ</div>
                        <div>subscription</div>
                        <div>payment</div>
                        <div>policies</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-xl'>Contact Us</div>
                    <div className='send-email flex mt-3 gap-1'>
                        <div className='flex'>

                            <form className="max-w-sm mx-auto mt-2">

                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="email-address-icon" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-slate-600 block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white " placeholder="enter gmail to invite" />
                                </div>
                            </form>

                        </div>
                        <div>
                            <IoMdSend className='text-3xl mt-3 hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-5 '>
                        <div className='border p-2 rounded-full hover:cursor-pointer hover:scale-125 hover:shadow transition-all duration-200 ease-in-out hover:shadow-slate-300'><FaLinkedinIn /></div>
                        <div className='border p-2 rounded-full hover:cursor-pointer hover:scale-125 hover:shadow transition-all duration-200 ease-in-out hover:shadow-slate-300'><FaFacebookF /></div>
                        <div className='border p-2 rounded-full hover:cursor-pointer hover:scale-125 hover:shadow transition-all duration-200 ease-in-out hover:shadow-slate-300'><FaTwitter /></div>
                        <div className='border p-2 rounded-full hover:cursor-pointer hover:scale-125 hover:shadow transition-all duration-200 ease-in-out hover:shadow-slate-300'><FaInstagram /></div>
                    </div>
                </div>
            </div>
            <div className="text-center text-white pb-2 mt-8">
                <h1 className='text-sm '>© copyright by - thefutureproject 2023</h1>
            </div>
        </div>
        </>
    )
}

export default Footer