import {UpcommingMovie} from '../components/UpcommingMovie'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import '../App.css';
import { SearchData } from '../components/SearchData';

export function MovieRelease({selectedId,setSelectedId,movies, setMovies, searched,setSearched, query, setQuery,login,setLogin}){
  
return(
     <div>
      <div  style={{backgroundImage:`url(https://e1.pxfuel.com/desktop-wallpaper/574/383/desktop-wallpaper-movie-poster-mix-of-movies.jpg)` , maxWidth:"100%"}} className={'flex flex-col justify-between App background bg-cover bg-center w-[100vw] h-[600px] '}>
      <div class="flex flex-col justify-between w-full h-full backdrop-brightness-50 md:pl-[80px] md:pr-[80px] pt-10">
       <Nav  query={query} setQuery={setQuery} setSearched={setSearched} login={login} setLogin={setLogin}/>
        <div >
          <h3 className='text-white text-5xl font-bold'>Schedule Release All Movie around the world</h3>
          <p className='text-white text-2xl'>Get up to date to movie schedule releases all around the world</p>
        <div className='flex justify-between mb-12 mt-8 md:flex-row flex-col '>
          <div className='text-white text-2xl font-bold'>UPCOMMING RELEASE</div>
          <div className='md:flex md:gap-10  text-white '>
               <p>WorldWide</p>
               <p>2023</p>
          </div>
        </div>
        </div>
        </div>
       </div>
   {
    !searched?<>
      <div className='flex flex-col gap-10 m-[60px] '>
        <h3 className='text-4xl  text-white '>AUGUST</h3>
        <div className='flex flex-wrap gap-12 border-t-2 border-slate-600 md:p-12 pt-[80px]'>
        <UpcommingMovie Number={1} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={2} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={3} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={4} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={5} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={6} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={7} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={8} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
    </div>
     </div>
     <div className='flex flex-col gap-10 m-[60px]'>
        <h3 className='text-4xl text-white '>SEPTEMBER</h3>
        <div className='flex flex-wrap gap-12 border-t-2 border-slate-600 md:p-12 pt-[80px]'>
        <UpcommingMovie Number={1} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={2} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={3} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={4} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={5} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
      
    </div>
     </div>
     <div className='flex flex-col gap-10 m-[60px]'>
        <h3 className='text-4xl  text-white '>OCTOBER</h3>
        <div className='flex flex-wrap gap-12 border-t-2 border-slate-600 md:p-12 pt-[80px]'>
        <UpcommingMovie Number={1} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={2} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />
        <UpcommingMovie Number={3} imageUrl="https://image.tmdb.org/t/p/w300//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} type="Movie"  />

    </div>
     </div>
    </>:
    <SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
   }
     <Footer/>
     </div>
)
}