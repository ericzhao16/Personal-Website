import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            {/* how to do this with making components? */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/headshot.pgn' width='64' height='64' alt='Skill 1'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Skill 1</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/headshot.pgn' width='64' height='64' alt='Skill 1'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Skill 2</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/headshot.pgn' width='64' height='64' alt='Skill 1'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Skill 3</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/headshot.pgn' width='64' height='64' alt='Skill 1'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Skill 4</h3>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Skills