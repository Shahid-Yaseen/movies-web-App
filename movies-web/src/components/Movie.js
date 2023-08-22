import React from 'react';
import { Link } from "react-router-dom";

export function Movie({ title, rating, imageUrl, catagory,movieId,selectedId,setSelectedId }) {
    
    
  
  return (
    <Link to='/MovieDescription'  onClick={()=>{
      setSelectedId(movieId);
    }}
     className="shadow-md  rounded-xl flex flex-col overflow-hidden relative" >
      <img className="w-80 h-[440px] rounded-xl " src={imageUrl} alt={`${title} Poster`} />
      <div className="flex-grow text-white absolute bottom-2 ml-2">
        <div className="text-xl font-semibold mb-2">{title}</div>
        <div className="text-xl flex  text-white  md:justify-between gap-2">
          <div>⭐ {rating}</div>
          <div><ul className='md:flex gap-2'>
            {catagory.map((cat) => <li key={cat}>{cat}</li>
            )}

          </ul></div>
        </div>
      </div>
    </Link>
  );
}
