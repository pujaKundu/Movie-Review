import React from "react";
import Link from "next/link";
import Rating from "../Shared/Rating";

const MovieItem = ({ movie }) => {
  const { title, id, poster_path, vote_average } = movie;
  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link href={`/movies/${id}`} className='cursor-pointer'>
      <div className="card glass">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-violet-100 pt-5">{title}</h2>
          <Rating vote_average={vote_average} />
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
