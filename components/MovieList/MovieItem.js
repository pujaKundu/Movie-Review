import React, { useState } from "react";
import Link from "next/link";
import Rating from "../Shared/Rating";

const MovieItem = ({ movie, index }) => {
  const { title, id, poster_path, vote_average, overview } = movie;

  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/movies/${id}`} className="cursor-pointer">
      <div className="flex">
        <h1
          className=" -mt-16 z-0 mr-5"
          style={{
            "-webkit-text-stroke": "1px cyan",
            textStroke: "1px cyan",
            color: "transparent",
            fontSize: "72px",
          }}
        >
          {index + 1}
        </h1>
        {isHovered ? (
          <div
            className="card w-92 h-56 bg-base-100 image-full scale-110 duration-300 ease-in-out z-10"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={{
              boxShadow: isHovered
                ? "0px 0px 20px rgba(0, 255, 255, 0.2)"
                : "0px 0px 0px transparent",
              transition: "box-shadow 0.3s ease-in-out",
            }}
          >
            <figure>
              <img src={img} alt={title} />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{title}</h2>
              <Rating vote_average={vote_average} />
              <p className="text-slate-300 text-sm text-justify">
                {overview.slice(0, 75)}...
              </p>
            </div>
          </div>
        ) : (
          <div
            className="card glass w-92 h-56 z-10"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <figure className="hover:scale-125 duration-300 ease-in-out">
              <img src={img} alt={title} />
            </figure>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieItem;
