import React from 'react'
import Image from 'next/image'
import ProjectItem from './ProjectItem.jsx'
import verizonImg from '../public/assets/verizon.png'
import umichImg from '../public/assets/umich.png'
import ExperienceItem from './ExperienceItem.jsx'

const Experience = () => {
  return (
    <div id='experience' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#89CFF0]'>Experience</p>
            <h2 className='py-4'>Where I&apos;ve worked</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ExperienceItem companyTitle={verizonImg} jobTitle='Software Engineer Intern' dates='Jun 2023 - Aug 2023' description='I fined tuned a Large Language Model to build an internal querying tool trained on network data. Primarily worked in Python, HuggingFace, and Milvus Vector Database.'/>
                <ExperienceItem companyTitle={umichImg} jobTitle='Instructional Aide (EECS 203: Discrete Math)' dates='May 2023 - Present' description='I prepare and teach a weekly discussion of 25 students. I also hold weekly office hours, write homeworks and exam problems, and provide the professors with feedback on curriculum changes.'/>
            </div>
        </div>
    </div>
  )
}

export default Experience