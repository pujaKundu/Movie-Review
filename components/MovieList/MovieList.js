import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ filteredMovies = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-12">
      <h1
        className="text-indigo-500 font-bold text-5xl
      "
      >
        Popular
      </h1>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 mr-20">
        <Slider {...settings} style={{ width: "800px" }}>
          {filteredMovies.map((movie) => (
            <MovieItem key={movie?.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;
