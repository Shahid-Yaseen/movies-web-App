import React from "react";
import { Nav } from "../components/Nav";
import { SearchData } from "../components/SearchData";
import { Movie } from "../components/Movie";
import { Footer } from "../components/Footer";
export function WatchListMovies({selectedId,setSelectedId,movies, setMovies, searched,setSearched, query, setQuery,login,setLogin,watchListMovies=[]}){


    return(
        <>
        <div >
        <div className=" md:pl-[80px] md:pr-[80px] pt-10">
       <Nav query={query} setQuery={setQuery} setSearched={setSearched} login={login} setLogin={setLogin}  />
       </div>
        {
            watchListMovies.length===0&&<h3 className="text-3xl font-semibold text-white flex justify-center items-center mt-[300px] p-5">No Movies are Added to The WatchList</h3>
        }
        {
            !searched&&watchListMovies.length!==0&&<div className='flex flex-wrap gap-10 m-[60px] mb-[200px] z-0'>
            {
             watchListMovies.map((movie,i)=>
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
        }
        {
            searched&&<SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
        }
        </div>
        <div className="">
        <Footer/>
        </div>
        </>
    )
}