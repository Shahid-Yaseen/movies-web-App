import React from 'react';

export function Footer() {
  return (<footer className='md:h-[400px] flex flex-col md:flex-row gap-10 justify-between md:p-[80px] p-[20px] border-t-2 border-slate-600'>
    <div className='flex justify-between flex-col md:w-[450px] '>
      <h4 className='text-white text-4xl font-bold'>Our Plateform is Trusted by millions & Feature
        best updated movies  all around the world
      </h4>
      <div>
        <ul className=' flex gap-4 text-zinc-400'>
          <li><a>Privacy Policy</a></li>
          <li><a>Term of Service</a></li>
          <li><a>Language </a></li>
        </ul>
      </div>
    </div>
    <div className='flex gap-4 md:gap-0  flex-col justify-evenly'>
      <div>
        <ul className='text-zinc-300 text-2xl flex gap-4 flex-wrap'>
          <li>Home</li>
          <li>Discover</li>
          <li>Influnce</li>
          <li>Release</li>
        </ul>
      </div>
      <div>
        <ul className='flex text-white gap-3'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Gmail</li>
        </ul>
      </div>
      <div className='text-white'>
        All Rights Reserved (Shahid Bangash)
      </div>
    </div>
  </footer>);
}
