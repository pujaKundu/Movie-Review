import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ filteredMovies = [] }) => {
  return (
    <div className="pt-12">
      <h1 class="font-bold text-6xl bg-gradient-to-b from-slate-200 via-cyan-300 to-slate-100 text-transparent bg-clip-text ">
        Popular
      </h1>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 mr-20">
        {filteredMovies?.map((movie) => (
          <MovieItem key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
