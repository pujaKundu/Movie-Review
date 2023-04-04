import React, { useState, useEffect } from "react";
import MovieItem from "./MovieList/MovieItem";

const SimilarMovies = ({ movieId }) => {

  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data?.results);
        setIsLoading(false)
      });
  }, []);

  return (
    <div className="bg-zinc-900 px-20">
      <h1 className="text-6xl text-cyan-500 font-bold pt-5 bg-gradient-to-b from-slate-200 via-cyan-300 to-slate-100 text-transparent bg-clip-text ">
        Recommended
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 mr-20">
        {movies?.map((movie) => (
          <MovieItem key={movie?.id} movie={movie} />
        ))}
        {
          isLoading && <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default SimilarMovies;
