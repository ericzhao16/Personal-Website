import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projectItem = ({title, backgroundImg, deets, projectUrl, buttonDescription}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#89CFF0] to-[#7AD7F0]'>
        <div className='rounded-xl group-hover:opacity-5'>
            <Image className='rounded-xl' src={backgroundImg} alt='/'/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{deets}</p>
            <Link href={projectUrl} target='_blank'>
                <p className='text-center py-4 px-10 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>{buttonDescription} </p>
            </Link>
        </div>
    </div>
  )
}

export default projectItem