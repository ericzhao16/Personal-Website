import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full md:h-screen p2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-2'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#89CFF0]'>Contact</p>
                <h2 className='py-4'>Let's connect!</h2>
                <p className='py-2 text-gray-600'>Please feel free to reach out for anything.</p>
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
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='/assets/ollie.jpg' alt='cool photo ig' />
            </div>
        </div>
    </div>
  )
}

export default Contact
