"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeadBar = () => {
    return (
        <>  
            <div className='flex  text-white p-2 gap-2'>
                <div className='left  w-2/4 px-10  mt-36  flex flex-col gap-y-2'>
                    <div className=' gradient-type text-transparent font-bold text-2xl'>
                        <Typewriter
                            options={{
                                strings: [
                                    "GET CONNECTED WITH US",
                                    "BUILD THE COMMUNITY WITH US",
                                    "STAY TUNED FOR UPDATES "
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75
                            }}
                        />
                    </div>
                    <div className='mt-3'>
                        {/* <p>Elevate your projects with our user-friendly APIs, crafted to meet your needs at a minimal cost. Join us in simplifying development and enhancing efficiency with budget-friendly API access.</p> */}
                        <motion.p
                            initial = {{x : -1000}}
                            animate = {{x : 0}}
                            transition={{
                                duration : 1,
                            }}
                        >
                            Elevate your projects with our user-friendly APIs, crafted to meet your needs at a minimal cost. Join us in simplifying development and enhancing efficiency with budget-friendly API access.
                        </motion.p>
                    </div>
                </div>
                <motion.div 
                    initial = {{opacity:1,x : 1000}}
                    // whileInView={{opacity:1,x:0}}
                    animate = {{x : 0}}
                    transition={{
                        duration : 1
                    }}
                className='right w-2/4 ml-52'>
                    <img src="HeaderAnimation.svg" alt="error" height={300} width={400} />
                </motion.div>
            </div>
        </>
    )
}

export default HeadBar