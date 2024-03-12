"use client"
import React from 'react'
import { inView, motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHatCowboy } from "react-icons/fa";
import { FaHatCowboySide } from "react-icons/fa";

import { InView, useInView } from 'react-intersection-observer';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaCrown } from "react-icons/fa";
import { PiAppStoreLogoDuotone } from "react-icons/pi";

const MainContent = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        // threshold: 0.2,
    });
    return (
        <>  <div className="outer flex flex-col gap-2">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6
                }}
                // viewport={{
                //     once : true
                // }}
                className=' mx-60 my-7 text-white'>
                <div className='text-center  text-xl font-bold'>
                    Services
                </div>
                <div className='mb-5 text-white text-sm text-center'>
                    get know all of our services and get stuck to this community and expand with us
                </div>
                <VerticalTimeline >
                    <VerticalTimelineElement
                        //  className="vertical-timeline-element--work"

                        contentStyle={{
                            backgroundImage: 'linear-gradient(to right, #070F2B,#265073,#0C2D57)'

                        }}

                        iconStyle={{ background: '#265073' }}
                        icon={<PiAppStoreLogoDuotone className='' />}
                        visible={true}
                    >
                        <div className='font-bold'>
                            Introduction to Our API Services
                        </div>
                        <div className='text-xs mt-1'>
                            welcome to our website, where innovation meets affordability. At the inception of our journey, we envisioned a platform that would revolutionize the way businesses access and utilize APIs.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        //  className="vertical-timeline-element--work"
                        iconStyle={{ background: '#1D2B53' }}
                        icon={<PiAppStoreLogoDuotone className='' />}
                        contentStyle={{
                            backgroundImage: 'linear-gradient(to right, #070F2B,#265073,#0C2D57)'

                        }}
                        visible={true}
                    >
                        <div className='font-bold'>
                            Expansion of API Offerings
                        </div>
                        <div className='text-xs mt-1'>
                            As we progressed on our mission to democratize API usage, the second milestone on our vertical timeline emerged with the expansion of our API offerings.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        //  className="vertical-timeline-element--work"
                        contentStyle={{
                            backgroundImage: 'linear-gradient(to right, #070F2B,#265073,#0C2D57)'

                        }}
                        iconStyle={{ background: '#265073' }}
                        icon={<PiAppStoreLogoDuotone className='' />}
                        visible={true}
                    >
                        <div className='font-bold'>
                            Enhanced User Experience and Accessibility
                        </div>
                        <div className='text-xs mt-1'>
                            In our continuous pursuit of excellence, the third vertical timeline element signifies a major leap forward in enhancing user experience and accessibility.
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        //  className="vertical-timeline-element--work"
                        contentStyle={{
                            backgroundImage: 'linear-gradient(to right, #070F2B,#265073,#0C2D57)'

                        }}
                        iconStyle={{ background: '#1D2B53' }}
                        icon={<PiAppStoreLogoDuotone className='' />}
                        visible={true}
                    >
                        <div className='font-bold'>
                            Community Engagement and Future Roadmap
                        </div>
                        <div className='text-xs mt-1'>
                            We recognize the importance of fostering a collaborative environment, and this phase highlights our efforts in building a thriving community around our API platform
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </motion.div >

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6
                }}
                className='price-plan  rounded-md text-white mx-80'>
                <div className='header '>
                    <div className='font-bold text-xl  text-center'>Pricing</div>
                    <div className='text-sm text-center'>choose a right plan to get access of your favourite api</div>
                </div>
                <div className='flex gap-2 justify-around mt-4 '>
                    <div className='flex flex-col shadow shadow-purple-500 mx-7 p-3 rounded-md mb-2 bg-gradient-to-r from-[#2d264d] via-[#3e3761] to-[#2d264d] ease-in-out transition-all hover:scale-125 duration-150 mt-3'>
                        <div className="header mx-auto p-2 text-2xl">
                            Basic
                        </div>

                        <div className=''>
                            get started with the basic plan
                        </div>
                        <div className='flex gap-2 text-sm mt-3'>
                            <TiTick className='mt-1' />
                            <div>Free</div>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <TiTick className='mt-1' />
                            <div>access limited number of api</div>
                        </div>

                        <div className='flex gap-2 text-sm'>
                            <RxCross2 className='mt-1' />
                            <div>authentication priovided</div>
                        </div>
                        <div>
                            <button>

                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col shadow shadow-purple-500 mx-7 p-3 rounded-md bg-gradient-to-r from-[#2d264d] via-[#3e3761] to-[#2d264d] ease-in-out transition-all hover:scale-125 duration-150 mt-3'>
                        <div className="header mx-auto p-2 text-2xl flex gap-2">
                            <FaCrown />
                            <div>
                                Premium
                            </div>
                        </div>

                        <div>
                            get started with the premium plan
                        </div>
                        <div className='flex gap-2 text-sm mt-3'>
                            <TiTick className='mt-1' />
                            <div>$30 - one time payment</div>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <TiTick className='mt-1' />
                            <div>access all usefull api</div>
                        </div>

                        <div className='flex gap-2 text-sm'>
                            <TiTick className='mt-1' />
                            <div>authentication priovided</div>
                        </div>
                        <div className='text-center'>
                            <button className='mt-5 bg-purple-500 p-1 px-3 rounded-full hover:bg-purple-700 '>
                                get started
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}

export default MainContent