import React from "react";

const MovieItem = ({ movie }) => {
  const { title } = movie;
  return (
    <div className="card w-96 glass m-5">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-violet-300">{title}</h2>
        <p>{movie.overview}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
