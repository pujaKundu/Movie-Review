import React from 'react';
import MovieList from './MovieList.js/MovieList';

const Homepage = () => {
    return (
      <div className=' flex flex-col mt-10 items-center justify-center'>
            <h1 className="text-indigo-500 my-8 text-6xl font-bold">Movie Viewer</h1>
            <MovieList></MovieList>
      </div>
    );
};

export default Homepage;