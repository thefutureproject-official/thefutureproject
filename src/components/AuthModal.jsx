"use client"
import React, { useEffect, useRef } from 'react'
import { PiAppStoreLogoDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';

const AuthModal = ({ onclose }) => {
    const refModal = useRef();
    const closeModal = (e) => {
        if (refModal.current == e.target) {
            onclose();
        }
    }

    const session = useSession();

    useEffect(() => {
        const closeModalOnScroll = () => {
            onclose();
        };

        window.addEventListener('scroll', closeModalOnScroll);

        // return () => {
        //     window.removeEventListener('scroll', closeModalOnScroll);
        // };

    }, []);


    return (
        <>
            <div
                ref={refModal} onClick={closeModal} className='text-purple-600 fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 flex justify-center '>
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1.3
                    }}
                    className='rounded-md w-80 h-fit mt-20 p-9 flex flex-col text-white bg-gradient-to-r from-[#030014] via-[#2a2542] to-[#030014]'>
                    <div className='logo mx-auto'>
                        <PiAppStoreLogoDuotone className='text-6xl font-bold' />
                    </div>
                    <div className='mx-auto font-bold text-xl'>
                        <h1>The Future Project</h1>
                    </div>
                    <div className='text-sm mt-5 mx-auto'>
                        <h1>Login / Signup with</h1>
                    </div>
                    <div>
                        <button className=' border py-2 px-4 flex mt-4 gap-2  w-full hover:border-purple-400 ' onClick={()=>{
                            signIn("google");
                        }}>
                            <img src="google_logo.png" alt="error" className='w-5 mt-1 ' />
                            <div>Google</div>
                        </button>

                    </div>
                    <div>

                        <button className='bg-transparent border py-2 px-4 flex mt-4 gap-2  w-full hover:border-purple-400 ' onClick={()=>{
                            signIn("github");
                        }}>
                            <FaGithub className='mt-1' />
                            <div>Github</div>
                        </button>

                    </div>
                    <div>
                        <button className='bg-transparent border py-2 px-4 flex mt-4 gap-2  w-full hover:border-purple-400 '>
                            <div className='bg-white w-6 h-6 rounded-full'><img src="apple_logo.png" alt="error" className='w-5 ' /></div>
                            <div>Apple</div>
                        </button>

                    </div>
                    <div>
                        <button className='bg-transparent border py-2 px-4 flex mt-4 gap-2  w-full hover:border-purple-400 '>
                            <img src="microsoft_logo.png" alt="error" className='w-5 mt-1' />
                            <div>Microsoft</div>
                        </button>

                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AuthModal