

import React from 'react'
// import img from '../media/img.webp'
// import hamza from '../media/hamza.png'

const ProjectCards = () => {
  return (
    <div className='bg-white rounded-sm p-2 m-4 h-full border-2 border-neutral-400/60 aspect-[10/6] flex flex-col justify-end shadow-md  backdrop-blur-xl transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-lg hover:shadow-black/10 hover:scale-105 hover:cursor-pointer'>
      
      {/* <img src='../public/logo.png' alt="a" /> */}
      
      <div className='flex justify-between pt-2 '>
      <p className=''>Project Name</p>
      <p className=''></p>
      </div>
    </div>
  )
}


export default ProjectCards
