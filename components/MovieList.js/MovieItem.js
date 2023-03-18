import React from "react";
import Link from "next/link";
import Rating from "../Shared/Rating";

const MovieItem = ({ movie }) => {
  const { title, overview, id, poster_path, vote_average } = movie;
  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const genresContainer = <div>
    
  </div>
  return (
    <div className="card w-80 glass m-5 ">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-violet-100">{title}</h2>
        <Rating vote_average={vote_average} />
        {genres.map((genre) => (
          <p>{genre}</p>
        ))}
        <p className="truncate text-white">{overview}</p>

        <div className="card-actions justify-end">
          <Link href={`/movies/${id}`}>
            <button className="btn btn-primary">Learn now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
