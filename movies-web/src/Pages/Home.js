
import '../App.css';
import React from 'react';
import {HeroSection} from '../components/HeroSection'
import { Footer } from '../components/Footer';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { AnotherMovie } from '../components/AnotherMovie';
import { PopularMovie } from '../components/PopularMovie';
import { SearchData }  from '../components/SearchData'
import { Movie } from '../components/Movie';

export function Home({selectedId,setSelectedId, movies, setMovies, searched,setSearched, query, setQuery,login,setLogin}){
   
    return(
        <>
        <HeroSection 
        title={"Jurassic World Dominion"}
        releaseDate={"2022-06-01"}
        login={login}
        setLogin={setLogin}
        storyLine={"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators ona planet they now share with history's most fearsome creatures."
      }
        query={query} setQuery={setQuery} setSearched={setSearched} bacground={"https://image.tmdb.org/t/p/original//jauI01vUIkPA0xVsamGj0Gs1nNL.jpg"} />
       {
         !searched?
        < >
             <div className=' md:m-[80px] m-3'>
         <h3 className='text-3xl font-bold text-white mb-8'>Just Release</h3>  
         <div className='flex gap-6 flex-wrap'>
         <Movie 
          title="Mission:Impossible-Dead Reckoning Part One"
          rating="8.5"
          imageUrl="https://image.tmdb.org/t/p/w500//NNxYkU70HPurnNCSiCjYAmacwm.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={575264}
          />
        <Movie 
          title="Avengers:Endgame"
          rating="9.0"
          imageUrl="https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={299534}
          />
        <Movie 
          title="Spider-Man: No Way Home"
          rating="8.0"
          imageUrl="https://image.tmdb.org/t/p/w500//5weKu49pzJCt06OPpjvT80efnQj.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={634649}
          />
        <Movie 
          title="No Time to Die"
          rating="7.4"
          imageUrl="https://image.tmdb.org/t/p/w500//iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={370172}
          
          />
        <Movie 
          title="Wonder Woman 1984"
          rating="6.4"
          imageUrl="https://image.tmdb.org/t/p/w500//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={464052}
          />
         </div>
  
      </div>
      <div className='md:m-[80px] flex gap-7 flex-wrap'>
        <PopularMovie
        movieId={813477}
        selectedId={selectedId}
         setSelectedId={setSelectedId}
        Number={1} imageUrl="https://image.tmdb.org/t/p/w500//9dTO2RygcDT0cQkawABw4QkDegN.jpg" title="Shin Kamen Rider" catagory={["Action","Animated"]} rating={7.0} type="Movie" year={2023}/>
        <PopularMovie
        movieId={1061181}
        selectedId={selectedId}
         setSelectedId={setSelectedId}
        Number={2} imageUrl="https://image.tmdb.org/t/p/w500//lm5LF2eyCcBdCEfvpeyvpujOyPb.jpg" title="Kingdom 3:Flame of Fate" catagory={["Action","Adventure"]} rating={7.8} type="Movie" year={2023}/>
        <PopularMovie
        movieId={1059638}
        selectedId={selectedId}
         setSelectedId={setSelectedId}
        Number={3} imageUrl="https://image.tmdb.org/t/p/w500/xEAXVe0BzW4K9Ky6eTo4CJwzJ8P.jpg" title="Mr.Car & the Knights Templar" catagory={["Action","Thriller"]} rating={6.3} type="Movie" year={2023}/>
        <PopularMovie
        movieId={455476}
        selectedId={selectedId}
         setSelectedId={setSelectedId}
        Number={4} imageUrl="https://image.tmdb.org/t/p/w500/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg" title="Knights of the Zodiac" catagory={["Action","Adventure"]} rating={6.6} type="Movie" year={2023}/>
        <PopularMovie
        movieId={664767}
        selectedId={selectedId}
         setSelectedId={setSelectedId}
        Number={5} imageUrl="https://image.tmdb.org/t/p/w500//4VlXER3FImHeFuUjBShFamhIp9M.jpg" title="Mortal Kombat Legends" catagory={["Action","Thriller"]} rating={8.1} type="Movie" year={2020}/>
      </div>
  
      <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//aT3sRVqgpkyCo23fp9myVfKPWbA.jpg)` , maxWidth:"100%"}} className='mb-10 bg-cover  lg:h-[600px]  flex lg:flex-row flex-col gap-12 background md:p-[80px] p-[18px] '>
  
      <FeaturedMovie title="Air" 
        storyLine={"Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand."}  
        rating={7.4}
        releaseDate={"2023-04-05"}
/>
        <div>
        <div className='flex gap-12 flex-col md:flex-row md:p-0 p-6 md:mt-0 mt-8 '>
        <Movie 
          title="Air"
          rating="8.5"
          imageUrl="https://image.tmdb.org/t/p/w500//76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={964980}/>
        <Movie 
          title="Hidden Strike"
          rating="7.0"
          imageUrl="https://image.tmdb.org/t/p/w500//zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={457332}/>
        <Movie 
          title="Fast X"
          rating="7.3"
          imageUrl="https://image.tmdb.org/t/p/w500//fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          catagory={["Action","Adventure"]}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          movieId={385687}/>
        </div>  
        </div>
      </div>
  
  
      <div className='lg:p-[80px] p-[20px]'>
      <h3 className='text-3xl font-bold text-white mb-8'>Movie</h3>  
      <div className='flex gap-5 md:flex-row flex-col'>
        <AnotherMovie imageUrl={"https://image.tmdb.org/t/p/w500//8c4a8kE7PizaGQQnditMmI1xbRp.jpg"} title={"The Matrix Resurrections"} rating={6.4} catagory={["Action","Movie"]}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={624860} />
        <AnotherMovie 
         selectedId={selectedId}
         setSelectedId={setSelectedId}
         movieId={667538}
        imageUrl={"https://image.tmdb.org/t/p/w500//f4PFiwOHVcNUXRcOmxX2hUYdAx7.jpg"} title={"Transformers: Rise of the Beasts"} rating={8.9} catagory={["Sci-Fi","Movie"]} />
        <AnotherMovie
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={717930}
        imageUrl={"https://image.tmdb.org/t/p/w500//lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg"} title={"Kandahar"} rating={6.4} catagory={["Spy","Movie"]} />
        <AnotherMovie
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={640146}
         imageUrl={"https://www.themoviedb.org/t/p/original/gWANm7XK40an5wdgqJ1WjVY01A5.jpg"} title={"Ant Man and The Wasp"} rating={8.8} catagory={["Action","Movie"]} />
      </div>
       </div>
      <div className='lg:p-[80px] p-[20px]'>
      <h3 className='text-3xl font-bold text-white mb-8'>Series</h3>  
      <div className='flex gap-5 md:flex-row flex-col'>
        <AnotherMovie
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={588228}
         imageUrl={"https://image.tmdb.org/t/p/w500//34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"} title={"The Tomorrow War"} rating={7.5} catagory={["Action","Series"]} />
        <AnotherMovie 
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={738562}
        imageUrl={"https://image.tmdb.org/t/p/w500//eAi9qEEKMTVruWfDFrZ58wEy5xS.jpg"} title={"Game of Thrones: The Story So Far"} rating={8.3} catagory={["Documentry","Series"]} />
        <AnotherMovie 
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={666243}
        imageUrl={"https://image.tmdb.org/t/p/w500//3sLz2yv6vBDWqBbd8rdnNeoJ2kJ.jpg"} title={"The Witcher: Nightmare of the Wolf"} rating={7.5} catagory={["Horror","Series"]} />
        <AnotherMovie 
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        movieId={689249}
        imageUrl={"https://image.tmdb.org/t/p/w500//AboUXTrDWEi0PuZUqaft0iwBTm7.jpg"} title={"La Casa de Papel: el fenómeno"} rating={7.4} catagory={["Crime","Series"]} />
      </div>
          </div>    
  
        <div className=' flex flex-wrap lg:gap-16 mb-10 '>
          <div>
            <FeaturedMovie title={"Gundala"}
             storyLine={"Sancaka has lived on the streets since his parents left him. Living a hard life, Sancaka survives by thinking about his own safety. When the condition of the city gets worse and injustice rages throughout the country, Sancaka must decide whether he continues to live to look after himself or rise to become their oppressed hero."}
             rating={7.8}
             releaseDate={"2019-08-29"}
            imageUrl='https://image.tmdb.org/t/p/original//mlaX4c2M6usnhXHG5sYJcKVXflA.jpg'/>
          </div>
          <div className='md:w-[350px]'>
          <h3 className='text-3xl font-bold text-white mb-8'>Fast</h3> 
             <div className='flex flex-col gap-2'>
             <PopularMovie  
             selectedId={selectedId}
             setSelectedId={setSelectedId}
             movieId={872585}
             imageUrl="https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" title="Oppenheimer" catagory={["Action","Adventure"]} rating={8.4} type="Movie" year={2023}/>
             <PopularMovie 
             selectedId={selectedId}
             setSelectedId={setSelectedId}
             movieId={872585}
             imageUrl="https://image.tmdb.org/t/p/w500/tdZnaktqIgFaKN00KlOj50emJn5.jpg" title="HiGH&LOW Movie 2:End of Sky" catagory={["Action","Thriller"]} rating={7.2} type="Movie" year={2017}/>
             <PopularMovie 
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              movieId={20986}
             imageUrl="https://image.tmdb.org/t/p/w500/nNjFlv4mJlkGLzfnLoU68YSy9KH.jpg" title="Gurren Lagann Movie" catagory={["Action","Anime"]} rating={7.6} type="Movie" year={2008}/>
             <PopularMovie 
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              movieId={845594}
             imageUrl="https://image.tmdb.org/t/p/w500/8hcb3IgfdX3NJcoenRfcMWgyvsf.jpg" title="Jim Morrison:The End" catagory={["Drama","Thriller"]} rating={7.0} type="Movie" year={2021}/>
             </div>
          </div>
          <div className='md:w-[350px] '>
          <h3 className='text-3xl font-bold text-white   mb-8'>Live</h3> 
             <div className='flex flex-col gap-2'>
             <PopularMovie 
             movieId={879739}
             selectedId={selectedId}
              setSelectedId={setSelectedId}
             imageUrl="https://image.tmdb.org/t/p/w500//zAUpPs4c74w1rZRKRmLoVILYMx8.jpg" title="One More End of the World" catagory={["Horror","Thriller"]} rating={7.8} type="Movie" year={2021}/>
             <PopularMovie 
             movieId={573171}
             selectedId={selectedId}
              setSelectedId={setSelectedId}
             imageUrl="https://image.tmdb.org/t/p/w500/d7i9UXE7IfPx2uYtYKzgjs6zYzR.jpg" title="A Frozen Rooster" catagory={["Comedy","Animated"]} rating={7.6} type="Movie" year={2022}/>
             <PopularMovie
             movieId={614479}
             selectedId={selectedId}
              setSelectedId={setSelectedId}
             imageUrl="https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraorDPi.jpg" title="Insidious: The Red Door" catagory={["Horror","Thriller"]} rating={6.9} type="Movie" year={2023}/>
             <PopularMovie
             movieId={1126852}
             selectedId={selectedId}
              setSelectedId={setSelectedId}
             imageUrl="https://image.tmdb.org/t/p/w500/gA2emLQTNb8XS1646Nmhp91NNgv.jpg" title="Rich in Love 2" catagory={["Romance","Drama"]} rating={6.9} type="Movie" year={2023}/>
             </div>
          </div>
        </div>
        </>:
        <SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
      }
      <Footer/>
  
       
      </>
    )
}