import React from 'react';

export function UpcommingMovie({ Number , imageUrl, title, catagory, type }) {
  return (
    <div className='flex items-center gap-3 flex-wrap'>
      <p className='text-black bg-white text-4xl p-5 font-bold rounded-[100%]'>0{Number}</p>
      <div><img className='rounded-[100%] overflow-hidden w-[80px] h-[80px]' src={imageUrl} ></img></div>
      <div className="flex flex-col justify-evenly gap-1">
        
        <h3 className="text-white text-3xl font-bold">{title}</h3>
        <div>
          <ul className='text-zinc-400 flex gap-2'>
            {catagory.map((cat) => <li key={cat}>{cat}</li>
            )}
            <li> {type}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
