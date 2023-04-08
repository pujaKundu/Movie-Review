import React, { useState, useEffect } from "react";
import SimliarMovieItem from "./SimilarMovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from "./topRated/SliderItem";
import { ThreeDots } from "react-loader-spinner";

const SimilarMovies = ({ movieId }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data?.results);
        setIsLoading(false);
        console.log(movies);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="bg-zinc-900 px-20 pb-20">
      <h1 className="text-5xl text-cyan-500 font-semibold pt-5 bg-gradient-to-b from-slate-200 via-cyan-300 to-slate-100 text-transparent bg-clip-text ">
        Recommended
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16 mr-15 ml-5">
        <Slider
          {...settings}
          style={{
            width: "1200px",
          }}
        >
          {movies?.map((movie) => (
            <SliderItem key={movie?.id} movie={movie} />
          ))}
          {isLoading && (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="cyan"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarMovies;
