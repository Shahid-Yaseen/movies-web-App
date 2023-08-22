import React from 'react';
import { Link } from 'react-router-dom';

export function AnotherMovie({ imageUrl, title, rating, catagory ,movieId,selectedId,setSelectedId }) {

  return (
    <Link  to='/MovieDescription'  onClick={()=>{
      setSelectedId(movieId);
    }}
    className='flex flex-col gap-1 sm:w-[24rem] w-[16rem] text-white'>
      <div>
        <img src={imageUrl} className='rounded-xl w-[100%] h-[320px]'></img>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title} </h3>
      </div>
      <div className='flex gap-2'>
        <div>
          ⭐{rating}
        </div>
        <ul className='flex gap-2 text-zinc-400'>
          {catagory.map(( cat) => <li key={cat}>{cat}</li>
          )}
        </ul>
      </div>

    </Link>
  );
}
