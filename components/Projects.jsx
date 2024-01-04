import React from 'react'
import Image from 'next/image'
import personalSite from '../public/assets/personalSite.png'
import mapReduce from '../public/assets/mapReduce.png'
import ShapeLog from '../public/assets/ShapeLog.png'
import sillyQL from '../public/assets/sillyql.png'
import instagram from '../public/assets/instagram.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem.jsx'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#89CFF0]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='ShapeLog' backgroundImg={ShapeLog} deets='Collaborative full-stack web app built in React and Python. Used Postman to test API calls and route them to frontend interface.' projectUrl='https://github.com/chandravishal/shapelog' buttonDescription='Github'/>
                <ProjectItem title='Personal Site' backgroundImg={personalSite} deets='Portfolio website built from React, Next.js, and TailwindCSS' projectUrl='https://github.com/ericzhao16/Personal-Website' buttonDescription='Github'/>
                <ProjectItem title='Instagram Clone' backgroundImg={instagram} deets='Instagram-style client-side social media app built in React with a backend in Flask. Utilizes a SQLite database and AJAX for custom REST API.' projectUrl='mailto:zhaoeric@umich.edu' buttonDescription='Contact Me'/>
                <ProjectItem title='Google Hadoop MapReduce Clone' backgroundImg={mapReduce} deets='Multi-threaded program that simulates a distributed map and reduce program. Coded in Python. Used TCP/IP ports for communication between workers and managers and fault-tolerance, and UDP for heartbeat messages.' projectUrl='mailto:zhaoeric@umich.edu' buttonDescription='Contact Me'/>
                <ProjectItem title='SQL Database Clone' backgroundImg={sillyQL} deets='Efficient database clone built in C++ containing common SQL features such as SELECT, INSERT, CREATE, and JOIN.' projectUrl='mailto:zhaoeric@umich.edu' buttonDescription='Contact Me'/>

            </div>
        </div>
    </div>
  )
}

export default Projects