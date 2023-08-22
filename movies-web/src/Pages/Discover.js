import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { Movie } from '../components/Movie';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { PopularMovie } from '../components/PopularMovie';
import { AnotherMovie } from '../components/AnotherMovie';
import { SearchData } from '../components/SearchData';
export function Discover({selectedId,setSelectedId,movies, setMovies, searched,setSearched, query, setQuery,login,setLogin}){ 
return(
 <>
   <HeroSection 
   title={"The Flash"}
   releaseDate={"2023-06-13" }
   login={login}
   setLogin={setLogin}
   setQuery={setQuery}
   searched={searched}
   setSearched={setSearched}
   storyLine={"When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?"
}   bacground={"https://image.tmdb.org/t/p/original//yF1eOkaYvwiORauRCPWznV9xVvi.jpg"}  />
  {
    !searched?  <>
    <div className=' sm:m-[80px] m-3'>
<h3 className='text-3xl font-bold text-white mb-8'>Just Release</h3>  
<div className='flex gap-6 flex-wrap'>
<Movie 
 title="The Flash"
 rating="6.9"
 imageUrl="https://image.tmdb.org/t/p/w500//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
 catagory={["Action","Fantasy"]}
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={298618}
 />
<Movie 
 title="Air"
 rating="7.4"
 imageUrl="https://image.tmdb.org/t/p/w500//76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg"
 catagory={["Drama","Adventure"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={964980}
 />
<Movie 
 title="Dungeons & Dragons: Honor Among Thieves"
 rating="7.5"
 imageUrl="https://image.tmdb.org/t/p/w500//A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
 catagory={["Action","Adventure"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
 movieId={493529}
 />
<Movie 
 title="Spy"
 rating="6.8"
 imageUrl="https://image.tmdb.org/t/p/w500//vPBmfMHxQvRRNGYD5S5ko2KnX56.jpg"
 catagory={["Action","Comedy"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={238713}
 />
<Movie 
 title="Satan's Slaves 2:Communion"
 rating="7.2"
 imageUrl="https://image.tmdb.org/t/p/w500//1kYnSj8pFavFpEVlA42Yww76cTD.jpg"
 catagory={["Action","Adventure"]}
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={925786}/>
</div>

</div>
<div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//AdBXP8e6K3FYdDrMx3Wr6WZqCYF.jpg)` , maxWidth:"100%"}} className='mb-10 bg-cover  lg:h-[600px]  flex lg:flex-row flex-col gap-12 background sm:p-[80px] p-[10px] '>

<FeaturedMovie title="Dungeons & Dragons: Honor Among Thieves" 
storyLine={'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.'}  
rating={7.4}
releaseDate={"2023-03-23"}
/>
<div>
<div className='flex gap-12 flex-col md:flex-row md:p-0 p-10'>
<Movie 
 title="Dungeons & Dragons: Honor Among Thieves"
 rating="7.4"
 imageUrl="https://image.tmdb.org/t/p/w500//A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
 catagory={["Action","Adventure"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={493529}/>
<Movie 
 title="Oppenheimer"
 rating="8.2"
 imageUrl="https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
 catagory={["Action","Adventure"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
 movieId={872585}/>
<Movie 
 title="Smile"
 rating="6.7"
 imageUrl="https://image.tmdb.org/t/p/w500//aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
 catagory={["Horror","Thriller"]}
 selectedId={selectedId}
setSelectedId={setSelectedId}
 movieId={882598}/>
</div>  
</div>
</div>

<div>
 <h3 className='text-3xl font-bold text-white mb-8'>Popular of the Week</h3>
<div className='md:m-[80px] flex gap-7 flex-wrap'>
<PopularMovie
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={624091}
  Number={1} imageUrl="https://image.tmdb.org/t/p/w500//rEmMqgcXvA5Nc5YufekDt57GHTJ.jpg" title="Sri Asih" catagory={["Superhero","Action"]} rating={8.2} type="Movie" year={"2022-11-17".split('-').at(0)}/>
<PopularMovie 
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={925786}
 Number={2} imageUrl="https://image.tmdb.org/t/p/w500//1kYnSj8pFavFpEVlA42Yww76cTD.jpg" title="Satan's Slaves 2:Communion" catagory={["Horror","Action"]} rating={7.2} type="Movie" year={"2012-11-17".split('-').at(0)}/>
<PopularMovie
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={667739}
  Number={3} imageUrl="https://image.tmdb.org/t/p/w500//uTCfTibqtk4f90cC59bLPMOmsfc.jpg" title="The Man from Toronto" catagory={["Comedy","Action"]} rating={6.5} type="Movie" year={"2022-12-23".split('-').at(0)}/>
<PopularMovie
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={512200}
  Number={4} imageUrl="https://image.tmdb.org/t/p/w500//jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg" title="Jumanji: The Next Level" catagory={["Adventure","Action"]} rating={6.9} type="Movie" year={"2019-12-04".split('-').at(0)}/>
<PopularMovie 
 selectedId={selectedId}
 setSelectedId={setSelectedId}
 movieId={6795}
 Number={5} imageUrl="https://image.tmdb.org/t/p/w500//g0HLEZfqJp5dRxMzkgZwW9puP7N.jpg" title="Zathura:A Space Adventure" catagory={["Adventure","Action"]} rating={6.4} type="Movie" year={"2005-11-17".split('-').at(0)}/>
</div>
</div>

<div className='lg:p-[80px] p-[20px]'>
<h3 className='text-3xl font-bold text-white mb-8'>Movies</h3>  
<div className='flex gap-5 md:flex-row flex-col'>
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={361743}
imageUrl={"https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg"} title={"Top Gun: Maverick"} rating={8.2} catagory={["Action","Movie"]} />
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={324857}
imageUrl={"https://image.tmdb.org/t/p/w500//iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"} title={"Spider-Man: Into the Spider-Verse"} rating={8.4} catagory={["Sci-Fi","Movie"]} />
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={505642}
imageUrl={"https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg"} title={"Black Panther: Wakanda Forever"} rating={7.2} catagory={["Action","Movie"]} />
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={209112}
imageUrl={"https://www.themoviedb.org/t/p/w500//5UsK3grJvtQrtzEgqNlDljJW96w.jpg"} title={"Batman v Superman:Dawn of Justice"} rating={6.0} catagory={["Action","Movie"]} />
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
movieId={667538}
imageUrl={"https://image.tmdb.org/t/p/w500//eAi9qEEKMTVruWfDFrZ58wEy5xS.jpg"} title={"Game of Thrones: The Story So Far"} rating={8.3} catagory={["Documentry","Series"]} />
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={667538}
imageUrl={"https://image.tmdb.org/t/p/w500//3sLz2yv6vBDWqBbd8rdnNeoJ2kJ.jpg"} title={"The Witcher: Nightmare of the Wolf"} rating={7.5} catagory={["Horror","Series"]} />
<AnotherMovie 
selectedId={selectedId}
setSelectedId={setSelectedId}
movieId={667538}
imageUrl={"https://image.tmdb.org/t/p/w500//AboUXTrDWEi0PuZUqaft0iwBTm7.jpg"} title={"La Casa de Papel: el fenómeno"} rating={7.4} catagory={["Crime","Series"]} />
</div>
 </div>    

<div className='lg:p-[80px] flex  flex-wrap lg:gap-16 '>

 <FeaturedMovie 
          
            title={"Gundala"}
             storyLine={"Sancaka has lived on the streets since his parents left him. Living a hard life, Sancaka survives by thinking about his own safety. When the condition of the city gets worse and injustice rages throughout the country, Sancaka must decide whether he continues to live to look after himself or rise to become their oppressed hero."}
             rating={7.8}
             releaseDate={"2019-08-29"}
            imageUrl='https://image.tmdb.org/t/p/original//mlaX4c2M6usnhXHG5sYJcKVXflA.jpg'/> 
 <div className='w-[350px]'>
 <h3 className='text-3xl font-bold text-white mb-8'>Fast</h3> 
    <div className='flex flex-col gap-2'>
    <PopularMovie 
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={496450}
    imageUrl="https://image.tmdb.org/t/p/w500//bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg" title="Miraculous:Ladybug & Cat Noir" catagory={["Adventure","Animated"]} rating={7.8} type="Movie" year={2023}/>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={1070514}
     imageUrl="https://image.tmdb.org/t/p/w500/kD35dB3KOHrLo1Y3RU5xXJ1hI7.jpg" title="Bucket List of the Dead" catagory={["Comdey","Family"]} rating={6.6} type="Movie" year={2023}/>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={447277}
     imageUrl="https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg" title="The Little Mermaid"catagory={["Adventure","Sci-fi"]} rating={6.5} type="Movie" year={2023}/>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={988165}
     imageUrl="https://image.tmdb.org/t/p/w500/5KmscR49WkmuPJKjmK4OUmsRn5C.jpg" title="Lovecraft's Witch House" catagory={["Horror","Thriller"]} rating={4.9} type="Movie" year={2022}/>
    </div>
 </div>
 <div className='w-[350px] '>
 <h3 className='text-3xl font-bold text-white mb-8'>Live</h3> 
    <div className='flex flex-col gap-2'>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={1102776}
     imageUrl="https://image.tmdb.org/t/p/w500/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg" title="AKA" catagory={["Action","Thriller"]} rating={6.9} type="Movie" year={2023}/>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={823999}
     imageUrl="https://image.tmdb.org/t/p/w500//8QVbWBv94BAT9u1q9uJccwOxMzt.jpg" title="Diabolik-Ginko Attacks"catagory={["Action","Sci-fi"]} rating={6.0} type="Movie" year={2022}/>
    <PopularMovie 
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={47964}
    imageUrl="https://image.tmdb.org/t/p/w500//evxtv4e8Amm436Y5rW16RkGu8pX.jpg" title="Good Day to Die Hard" catagory={["Action","Thriller"]} rating={5.3} type="Movie" year={2013}/>
    <PopularMovie
    selectedId={selectedId}
    setSelectedId={setSelectedId}
    movieId={76600}
     imageUrl="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" title="Avatar:Way of Water" catagory={["Horror","Thriller"]} rating={7.7} type="Movie" year={2022}/>
    </div>
 </div>
</div>
</>:<SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>

  }
    <Footer/>
 </>

)


}