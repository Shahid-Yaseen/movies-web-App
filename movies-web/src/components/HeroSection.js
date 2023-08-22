import React from "react"
import { Nav } from './Nav';

import '../App.css';

export function HeroSection({releaseDate, query,setQuery,setSearched,bacground,storyLine,title,login,setLogin}){
      return (
        <div  style={{backgroundImage:`url(${bacground})` , maxWidth:"100%"}} className={` App background bg-cover h-[90vh] bg-center w-[100vw] `}>
       <div className="md:pl-[80px] md:pr-[80px] h-full pt-10 backdrop-brightness-50 flex flex-col justify-between ">
       <Nav query={query} setQuery={setQuery} setSearched={setSearched} login={login} setLogin={setLogin}  />
      <div className='flex flex-col justify-center p-10 gap-2 text-white mb-24 items-start'>
       <div>
        <button className='bg-black text-white hover:bg-white hover:text-black rounded-md px-2 py-1'>Movie</button>
       </div>
       <div>
         <h3 className='text-3xl'>{title}</h3>
       </div>
       <div>
         <ul className='flex items-center flex-wrap list-disc md:gap-8 gap-2'>
          <li className='ml-5'>{releaseDate}</li>
          <li>Fantasy </li>
          <li >Actions</li>
         </ul>
       </div>
       <div className='md:w-[500px]'>
        <p className="text-start">
         {storyLine}
        </p>
       </div>
       <div>
        <div className='flex gap-10 mt-6'>
         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Trailer</button>
         <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" >Download</button>
        </div>
        <div>

        </div>
       </div>
      </div>
       </div>
    </div>
    )
}