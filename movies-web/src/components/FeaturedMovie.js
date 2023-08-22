import React from 'react';

export function FeaturedMovie({ title,storyLine,rating,releaseDate, imageUrl = '' }) {
  return (
    <div className={`md:w-[600px]  flex flex-col justify-between text-white gap-5`}>
      <div>
        <h2 className='text-4xl font-bold mb-2'>Featured in MoviesEra</h2>
        {imageUrl ? <img src={imageUrl}></img> : <p>Best Featue for you today</p>}
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-3xl font-bold'>{title}</h3>
        <div className='flex gap-2 flex-wrap'>
          <p>⭐ {rating}</p>
          <p>200m</p>
          <p>{releaseDate}</p>
          <p>SuperHero</p>
          <p>Actions</p>
        </div>
        <div>
          {storyLine}
        </div>
        <div className='flex sm:gap-12 gap-2 mt-3'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Now</button>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Download</button>
        </div>
      </div>

    </div>

  );
}
