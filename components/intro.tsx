'use client';


import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                 initial={{opacity:0, scale:0}}
                 animate={{opacity:1,scale:1}}
                 transition={{ type:'spring', duration:0.2}}
                >
                <Image src='/profile_pic.jpg'
                    alt = 'Teo Ming Zhe'
                    width='192'
                    height='192'
                    quality='95'
                    priority= {true}
                    className='h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                />
                </motion.div>
            </div>
        </div>
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello,</span>
            <Image
                src='https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif'
                alt='Hand Wave gif'
                width='50'
                height='50'
                quality='95'
                className="inline-block ml-2" 
                unoptimized 
            />
            <span>I am <strong>Ming Zhe</strong>.</span> I am a{" "}
            <span className="font-bold">Data Engineer</span> with{" "}
            <span className="font-bold">1 year</span> of experience. I am always{" "}
            <span className="italic">learning</span>, {" "}
            <span className="italic">creating</span>, and passionate about advancing my skills in data engineering and related fields.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:0.1,}}
        >
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
            cursor-pointer border border-black/10' href="/Ming Zhe's Resume.pdf" download={true}>
                Download CV<HiDownload className='opacity-50 group-hover:translate-x-1 transition'/>
            </a>
            <a className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.30rem] rounded-full focus:scale-[1.15rem] hover:scale-[1.15rem] hover:text-gray-950 active:scale-105 transition
            cursor-pointer border border-black/10' href="https://www.linkedin.com/in/ming-zhe-teo-060232247/" target='_blank'>
                <BsLinkedin/>
            </a>
            <a className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full  focus:scale-[1.15rem] hover:scale-[1.15rem]  hover:text-gray-950 active:scale-105 transition
            cursor-pointer border border-black/10' href="https://github.com/teomz" target='_blank' >
                <FaGithub/>
            </a>
        </motion.div>
    </section>
  )
}
