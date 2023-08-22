import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import { SearchData } from "../components/SearchData"

export function About( {selectedId,setSelectedId,movies, setMovies, searched,setSearched, query, setQuery,login,setLogin}){
    return(
        <>
       <div className=" md:pl-[80px] md:pr-[80px] pt-10">
       <Nav query={query} setQuery={setQuery} setSearched={setSearched} login={login} setLogin={setLogin}  />

       </div>

       {
         !searched? <div className="flex flex-col justify-center p-5 md:p-[100px] mb-[200px] z-0">
         <div className="flex-col flex  h-[300px] w-full text-center mt-[100px] p-3 md:pl-[50px] md:pr-[100px]">
          <h3 className="text-3xl text-white"> About Us</h3>
         <p className="text-white ">
         Welcome to MoviesEra, where the world of cinema comes alive at your fingertips. Our mission is to connect movie enthusiasts with the magic of storytelling,
         providing a platform that celebrates the art of film in all its forms.
          At MoviesEra, we're not just a platform; we're a community of passionate cinephiles, united by our love for the art of film.

         </p>
         </div>
         <div className="flex-col flex  h-[300px] w-full text-center mt-[100px] p-3 md:pl-[50px] md:pr-[100px] md:mb-0 mb-[160px]">
             <h3 className="text-3xl text-white">Our Vision </h3>
             <p className="text-white text-center">
             Imagine a world where every individual can immerse themselves in the captivating world of cinema, regardless of geographical boundaries. 
             Our vision at MoviesEra is to create a global hub that connects movie enthusiasts, 
             transcending cultural and linguistic differences through the universal language of film.
             In an era where streaming options abound, we stand out by celebrating the richness of cinematic history. 
              Our vision is to provide a haven for those seeking more than just the latest releases. We curate a collection that embraces cinema's legacy, 
              where classics are revered and contemporary masterpieces find their place alongside them.

             </p>
         </div>
     </div>:<SearchData movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>

       }
       
        <Footer/>        
        </>
    )
    }