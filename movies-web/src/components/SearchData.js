import React from 'react';
import { Movie } from './Movie';
import '../App.css';
export function SearchData({ movies, selectedId,setSelectedId}) {
  
  
    return (
        <div className='flex flex-wrap gap-10 m-[60px] mb-10'>
          {
           movies.map((movie,i)=>
            <Movie 
             key={i}
             selectedId={selectedId}
              setSelectedId={setSelectedId}
             movieId={movie.id}
            title={movie.original_title}
            rating={movie.vote_average}
            imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            catagory={["Action","Adventure"]}           
            />
           )
          }
        </div>


    )
}