import React from "react";

export function ProductionCompany({imageUrl,name,country}){


    return (
        <li className="flex gap-2 p-3">
            <div>
                <img className='rounded-[100%] overflow-hidden w-[80px] h-[80px]' src={`https://image.tmdb.org/t/p/original${imageUrl}`}></img>
            </div>
            <div>
                <h3 className="text-white text-2xl font-bold">{name}</h3>
                <p className="text-zinc-400 text-xl">{country}</p>
            </div>
             
        </li>
    )
}