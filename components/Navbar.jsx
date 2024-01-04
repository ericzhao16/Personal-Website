"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {
    const [nav, setNav] = useState(true)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("#ecf0f3")
    const [linkColor, setLinkColor] = useState("#1f2937")
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            }
            else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div style={{backgroundColor: '#ecf0f3'}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image className='rounded-full shadow-xl mt-3 mb-3 ml-3'
                    src='/assets/headshot.png'
                    alt='headshot'
                    width='50'
                    height='50'
                />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href="/#experience">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={!nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                     : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image className='rounded-full shadow-xl' src='/../assets/headshot.png' width='50' height='35' alt='/' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4 text-center'>Let&apos;s connect!</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(true)} className='py-3 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(true)} className='py-3 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(true)} className='py-3 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(true)} className='py-3 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(true)} className='py-3 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-[#89CFF0]'>Let&apos;s Connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://linkedin.com/in/ericzhao2022' target='_blank'><FaLinkedinIn/></Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/ericzhao16' target='_blank'><FaGithub/></Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='mailto:zhaoeric@umich.edu' target='_blank' rel='noopener noreferrer'><AiOutlineMail /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default NavBar