import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ filteredMovies=[] }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-5">
      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
