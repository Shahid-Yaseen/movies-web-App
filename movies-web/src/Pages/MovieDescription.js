import { useEffect, useState } from 'react';
import '../App.css';
import React from "react";
import { Nav } from "../components/Nav";
import { Footer } from '../components/Footer';
import { ProductionCompany } from '../components/ProductionCompany';
import { SearchData } from '../components/SearchData';
export function MovieDescription({selectedId,setSelectedId,login,setLogin,watchListMovies,setWatchListMovies,searched,setSearched,query,setQuery,movies,setMovies}){
    const [movie,setMovie]=useState({})
    const [watchlistToggle,setWatchListToggle]=useState(false)
    useEffect(function () {
        async function FetchData() {
          const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5a0138bc55a8bb0bb6232eaa470648ed`);
          const data = await res.json();
          setMovies(data.results)

         
        }
        FetchData();
      }, [query]);
    useEffect(function () {
        async function FetchData() {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=5a0138bc55a8bb0bb6232eaa470648ed`);
          const data = await res.json();
          setMovie(data)  
          setWatchListToggle(false)
          watchListMovies.forEach((mov)=>{
            if(mov.id===selectedId)
            {
                setWatchListToggle(true)
            }       
            
        })
        }
        FetchData();
      
    }, [selectedId]);
    function handleAddWatchListMovies(){
        async function FetchData() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${selectedId}?api_key=5a0138bc55a8bb0bb6232eaa470648ed`);
            const data = await res.json(); 
            setWatchListMovies(()=>
                [...watchListMovies,data]
            )          
          }
          FetchData();
    }
    function handleRemoveWatchListMovies(){
        const temp=watchListMovies.filter((el)=> {
            if(el.id!==selectedId){
                return el;
            }
        })
        setWatchListMovies(temp)
    }
    

   
return (
    <>
    <div>
        <div  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` , maxWidth:"100%"}} className={`flex flex-col justify-between App background bg-cover bg-center w-[100vw] h-[800px] `}>
        <div className='flex flex-col flex-wrap justify-between md:pl-[80px] md:pr-[80px] pt-10 w-full h-full backdrop-brightness-50'>
        <Nav query={query} setQuery={setQuery} setSearched={setSearched} login={login} setLogin={setLogin}  />
        <div>
            <div>
                <p className='text-white bg-black text-start w-max p-2 rounded-xl'>{movie.status}</p>
                <h3 className='text-white font-bold text-4xl text-start mt-5' >{movie.title}</h3>
                <ul className='flex flex-wrap gap-8 text-start text-white text-xl mt-5 list-disc ml-5 '>
                    <li> {movie.runtime} Min</li>
                    <li> {movie.release_date}</li>
                    {
                        movie.genres?.map(
                            (gen,i)=><li key={i}>{gen.name}</li>
                        )
                    }
                    
                </ul>
            </div>
            <div className='flex justify-between flex-wrap ' >
           <div className='flex lg:gap-10 gap-5 mt-6 mb-10'>
           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Now</button>
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=>{
            if(!watchlistToggle){
                handleAddWatchListMovies()
                setWatchListToggle(true);
                return;
            }
            else
            {
                handleRemoveWatchListMovies();
             setWatchListToggle(false)
            }
           }}>{watchlistToggle?"Remove From watchList":"Add To WatchList"}</button>
           </div>
           <div >
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Download</button>
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Share</button>
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Like</button>

           </div>
        </div>
        </div>
        </div>
        
        </div>
        <div className='md:pl-[80px] md:pr-[80px] pt-10 mb-5'>
            <h3 className='text-white text-3xl mb-6'>Story Line</h3>
            <p className='text-zinc-300 text-xl'>
                {movie.overview}
            </p>
        </div>
        <div className='md:pl-[80px] md:pr-[80px] pt-10 mb-10'>
        <h3 className='text-white text-3xl mb-6'>Production Media</h3>
         <ul className='flex gap-5 flex-wrap'>
            {
                movie.production_companies?
                movie.production_companies.map((prod,i)=>
                <ProductionCompany key={i} imageUrl={prod.logo_path} name={prod.name} country={prod.origin_country} />
                ):<p className='text-white font-bold text-2xl'>No ProductionCompany Found 🌎</p>

            }
         </ul>
        </div>
        <div className='md:pl-[80px] md:pr-[80px] pt-10 mb-10'>
        <h3 className='text-white text-3xl mb-6'>Production Country</h3>
         <ul className='flex gap-5 flex-wrap list-disc ml-4'>
            {
                movie.production_countries?
                movie.production_countries.map((prod,i)=>
                  <li key={i} className='text-white text-2xl font bold ml-3'> {prod.name} </li>
                ):<p className='text-white font-bold text-2xl'>No Production Country Found 🌎</p>

            }
         </ul>
        </div>
    </div>
    {
        searched&& <SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>

    }
    <Footer/>
    </>
)
}