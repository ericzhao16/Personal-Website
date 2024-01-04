import React from 'react'

const About = () => {
  return (
    <div id='about' className='ml-3 w-full md:h-screen p2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#89CFF0]'>About</p>
                <h2 className='py-4'>About Me:</h2>
                <p className='py-2 text-gray-600'>My name is Eric Zhao, and I&apos;m currently a student at the University of Michigan studying computer science. Through computer science, I&apos;ve been able to hone, leverage, and apply my methodical approach to problem solving to build efficient programs. I&apos;m most interested in database infrastructure, low-level programming, full-stack development, and Large Language Models (LLMs).</p>
                <p className='py-2 text-gray-600'>At school, I work as a teaching assistant for Discrete Math. On campus, I&apos;m also the Vice President of Recruitment for Atlas Digital Consulting Group, a technology consulting club, and a member of the Phi Gamma Nu Professional Business Fraternity.</p>
                <p className='py-2 text-gray-600'>Outside of school, I enjoy playing tennis, poker, eating, visitng new places, and spending quality time with friends and family. I&apos;m always down to try something new!</p>
                <p className='py-2 text-gray-600'>Thank you for visiting my website, and it&apos;s been a pleasure to tell you a little bit about myself! :)</p>
            </div>
            <div>
              <div className='w-[70%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 transform rotate-[-5deg]'>
                <img className='rounded-xl' src='/assets/food.jpg' alt='cool photo'/>
              </div>
              <div className='mt-5 w-[65%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 transform rotate-[5deg]'>
                <img className='rounded-xl' src='/assets/tennis.jpg' alt='cool photo'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About