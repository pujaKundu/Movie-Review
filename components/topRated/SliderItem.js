import React, { useState } from "react";
import Link from "next/link";
import Rating from "../Shared/Rating";

const SliderItem = ({ movie }) => {
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
      <div className="my-5">
        {isHovered ? (
          <div
            className="card w-92 h-56 bg-base-100 shadow-xl image-full mr-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
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
            className="card glass  w-92 h-56 mr-5"
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

export default SliderItem;
