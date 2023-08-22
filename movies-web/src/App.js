import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from './Pages/About';
import {Discover} from './Pages/Discover'
import { MovieRelease } from './Pages/MovieRelease';
import { Home } from './Pages/Home';
import { MovieDescription } from './Pages/MovieDescription';
import { LoginForm } from './Pages/LoginForm';
import { WatchListMovies } from './Pages/WatchListMovies';

function App() {
 
  const [selectedId,setSelectedId]=useState(0);
  const [movies,setMovies]=useState([])
  const [searched,setSearched]=useState(false);
  const [query, setQuery] = useState('');
  const [login,setLogin]=useState(false)
  const [watchListMovies,setWatchListMovies]=useState([])
  useEffect(function () {
      async function FetchData() {
        
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5a0138bc55a8bb0bb6232eaa470648ed`);
        const data = await res.json();
        setMovies(data.results)
        console.log(data.results)
      }
      FetchData();
    }, [query]);

  return (
  <BrowserRouter>
    <Routes>
          
          <Route path="/" element={<Home watchListMovies={watchListMovies} setWatchListMovies={setWatchListMovies} selectedId={selectedId} setSelectedId={setSelectedId}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery} login={login} setLogin={setLogin}/>} />
          <Route path="/Discover" element={<Discover selectedId={selectedId} setSelectedId={setSelectedId}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery}  login={login} setLogin={setLogin}/>} />
          <Route path="/MovieRelease" element={<MovieRelease selectedId={selectedId} setSelectedId={setSelectedId}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery}  login={login} setLogin={setLogin}/>} />
          <Route path="/About" element={<About selectedId={selectedId} setSelectedId={setSelectedId}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery} />} />
          <Route path="/MovieDescription"  element={<MovieDescription watchListMovies={watchListMovies} setWatchListMovies={setWatchListMovies} selectedId={selectedId} setSelectedId={setSelectedId}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery} login={login} setLogin={setLogin} />} />
          <Route path='/LoginForm' element={<LoginForm login={login } setLogin={setLogin}/>}></Route>
          <Route path='/WatchListMovies' element={<WatchListMovies selectedId={selectedId} setSelectedId={setSelectedId}  watchListMovies={watchListMovies}  movies={movies} setMovies={setMovies} searched={searched} setSearched={setSearched} query={query} setQuery={setQuery} login={login} setLogin={setLogin}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
} 
export default App;





