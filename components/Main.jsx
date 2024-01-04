import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>Hey! I&apos;m <span className='text-[#89CFF0]'>Eric,</span></h1>
                <h1 className='py-4 text-gray-700'>An Aspiring Software Engineer.</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m pursuing a Computer Science B.S.E. at the University of Michigan.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://linkedin.com/in/ericzhao2022' target='_blank'><FaLinkedinIn/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://github.com/ericzhao16' target='_blank'><FaGithub/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='mailto:zhaoeric@umich.edu' target='_blank' rel='noopener noreferrer'><AiOutlineMail /></Link>
                    </div>
                </div>
                <div className='mt-5 rounded-full shadow-lg shadow-gray-400 p-3 max-w-[15%] cursor-pointer hover:scale-105 ease-in duration-300 items-center mx-auto'>
                    <Link className='py-4 text-gray-600 max-w-[70%] m-auto' href='https://drive.google.com/drive/folders/1jWBf5vUHnzfSPnwvJ-XPMqku6QqmmF7d?usp=sharing' target='_blank'>Resume</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main