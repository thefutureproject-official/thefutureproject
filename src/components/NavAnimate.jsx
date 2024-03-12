import React from 'react'

const NavAnimate = () => {
  return (
    <div className='flex flex-col border border-green-500 relative'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 left-0 object-cover'

        >

        <source src='./blackhole.webm' type='video/webm'/>

        </video>
    </div>
  )
}

export default NavAnimate