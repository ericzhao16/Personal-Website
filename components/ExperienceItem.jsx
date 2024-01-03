import React from 'react';
import Image from 'next/image';

const ExperienceItem = ({ companyTitle, jobTitle, dates, description }) => {
  return (
    <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group'>
      <div className='mb-4'>
        <Image className='rounded-xl' src={companyTitle} alt='Company Logo' width='250' height='250' />
      </div>
      <p className='text-xl font-bold mb-1'>{jobTitle}</p>
      <p className='text-gray-500 mb-3'>{dates}</p>
      <p className='text-gray-600 text-center mb-5'>{description}</p>
    </div>
  );
};

export default ExperienceItem;
