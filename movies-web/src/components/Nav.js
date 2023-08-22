import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Nav({query,setQuery,setSearched,login,setLogin}) {
  let q = '';
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  
  return (
    <nav className={`navbar z-10 `}>
      <div className="nav-logo text-white font-bold hover:cursor-pointer"  > <Link to='/' onClick={()=>{
        setSearched(false)
      }
        }>MoviesEra</Link></div>
      <div className="nav-toggle" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`font-bold text-xl nav-list gap-2 mq:flex lg:bg-transparent ssm:bg-black/90 ${isNavOpen ? 'open' : ''}`}>
      <li className='lg:hidden block'>
        {searchOpen ? <form onSubmit={(e) => {
          e.preventDefault();
          setQuery(q);
          setSearched(true)
         
        }} className='mt-2'>
          <input type='text' placeholder='search...' className='input p-1 bg-white/50 w-[150px] rounded-md shadow-sm ' onChange={(e) => {
            q = e.target.value;
          }}></input>
        </form> : <div className="mt-3 flex justify-center">
          <svg onClick={() => toggleSearch()}  xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={2} stroke="white "  className=" w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg></div>}
        </li>
        <li className='hover:scale-125 transition-all ease-in-out cursor-pointer'><Link to='/' onClick={()=>{
        setSearched(false)      
      }
        } >Home</Link></li>
        <li className='hover:scale-125 transition-all ease-in-out'><Link to="/Discover"  onClick={()=>{
        setSearched(false)
      }
        }>Discover</Link></li>
        <li className='hover:scale-125 transition-all ease-in-out'><Link to='/MovieRelease'  onClick={()=>{
        setSearched(false)
      }
        }>Movies Release</Link></li>
        <li className='hover:scale-125 transition-all ease-in-out'><Link to='/About'  onClick={()=>{
        setSearched(false)
      }
        } >About</Link></li>
        <li className='hover:scale-125 transition-all ease-in-out'><Link  onClick={()=>{
        setSearched(false)
      }
        }
        to='/WatchListMovies'  >WatchList</Link></li>
        
      </ul>
      <div className='lg:flex lg:justify-around gap-4 hidden   '>
        {searchOpen ? <form onSubmit={(e) => {
          e.preventDefault();
          setQuery(q);
          setSearched(true)
         
        }} className='mt-2'>
          <input type='text' placeholder='search...' className='input p-1 bg-white/50 w-[100px] rounded-md shadow-sm' onChange={(e) => {
            q = e.target.value;
          }}></input>
        </form> : <div className="mt-3">
          <svg onClick={() => toggleSearch()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg></div>}


        <Link to='/LoginForm' onClick={()=>{
          setLogin(false)
        }} className="text-white bg-transparent hover:bg-transparent focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:hover:bg-transparent focus:outline-none dark:focus:bg-transparent border-2 border-white">Login</Link>
        <Link to='/LoginForm'
         onClick={()=>{
          setLogin(true)
        }} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">SignUp</Link>
      </div>
    </nav>);
}
