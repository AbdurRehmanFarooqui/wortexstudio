"use client"
import React, { useRef } from 'react';
import ProjectCards from './ProjectCards';
import { motion, useScroll, useTransform } from 'framer-motion';


const Projects = () => {

    const targetref = useRef(null)

    const { scrollYProgress } = useScroll({ target: targetref })

    const x = useTransform(scrollYProgress, [0, 1], ['50', '-200%']);
    // const x3 = useTransform(scrollYProgress, [0, 1], ['20', '-50%']);

    const z = useTransform(scrollYProgress, [0, 0.3], ['1', '1']);
    const a = useTransform(scrollYProgress, [0, 0.3], ['1', '1']);
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    //   });
    return (
        <motion.section className='h-[350vh] color-[#E6E6E6]' ref={targetref} style={{ opacity: z, scale: a }}>

            <div className='sticky h-[100vh] top-0 pt-52 pb-32 mx-auto'>

                <h2 className='font-orbitron text-7xl font-bold tracking-[8px] text-black text-center'>Projects</h2>
                <div>
                    {/* <ul> */}
                        {/* <li>WordPress Site</li> */}
                        {/* <li>Webdesign</li> */}
                        {/* <li>WebDevelopment</li> */}
                        {/* <li>App Devlopment</li> */}
                        {/* <li>Graphic Design</li> */}
                    {/* </ul> */}
                </div>
                <motion.div className='flex items-center h-[60%] pt-20' style={{ x }}>
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </motion.div>
                {/* <motion.div className='bottom' style={{ x: x3 }}>
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </motion.div> */}
            </div>

        </motion.section>
    )
}

export default Projects