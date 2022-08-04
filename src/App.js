//imports

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
import Login from './login.js';

//API Call
const API_URL = 'http://www.omdbapi.com?apikey=2fca9149';
//Sample Movie info


const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>
    {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('');

        }, []);




    //returns for the virtual DOM
    return (
        <div className="app">
            <h1>MovieLand</h1>



            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img src={SearchIcon} alt="search"
                    onClick={() => searchMovies(searchTerm) }
                />


            </div>

            <Login />

            {
                //if movies length is > 0 render movie card
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => 
                                <MovieCard movie={movie }/>)}
                        </div> 
                //else render text below
                    ) : (
                        <div className="empty">
                            <h2>No movies found </h2>
                        </div>
                        )
                    };


           
           
           



        
        </div>
        //App end div

    );
    //return end


}

export default App;