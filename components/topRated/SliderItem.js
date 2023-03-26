import React, { useState } from "react";
import Link from "next/link";

const SliderItem = ({ movie }) => {
  const { title, id, poster_path } = movie;
  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;
  if (movie !== {}) {
  }
  return (
    <Link href={`/movies/${id}`} className="cursor-pointer">
      <div className="card glass mr-5 ">
        <figure className="hover:scale-125 duration-300 ease-in-out">
          <img src={img} alt={title} />
        </figure>
      </div>
    </Link>
  );
};

export default SliderItem;
