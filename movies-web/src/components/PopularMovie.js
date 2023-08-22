import React from 'react';
import { Link } from 'react-router-dom';

export function PopularMovie({ Number = 0, imageUrl, title, catagory, rating, type, year,movieId,selectedId,setSelectedId }) {
  return (
    <Link  to='/MovieDescription'  onClick={()=>{
      setSelectedId(movieId);
    }}
    className='flex items-center gap-3'>
      <p className='text-white text-6xl'>{Number ? Number : ""}</p>
      <div><img className='rounded-md' src={imageUrl} width={"100px"} height={"50px"}></img></div>
      <div className="flex flex-col justify-evenly gap-2">
        <p className='text-zinc-400 bg-black w-12 text-center rounded-sm ml-4'>{year}</p>
        <h3 className="text-white">{title}</h3>
        <div>
          <ul className='text-zinc-400 flex gap-2'>
            {catagory.map((cat) => <li key={cat}>{cat}</li>
            )}
          </ul>
        </div>
        <div>
          <ul className='text-zinc-400 flex gap-2'>
            <li>⭐ {rating}</li>
            <li> {type}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
