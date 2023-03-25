import React, { useState, useEffect } from "react";
import MovieItem from "./MovieList/MovieItem";

const SimilarMovies = ({ movieId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="bg-gradient-to-r from-gray-900 via-cyan-900 to-gray-900 px-20">
      <h1 className="text-5xl text-cyan-500 font-semibold pt-5">
        You May Also Like
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 mr-20">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
