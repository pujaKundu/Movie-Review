import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import SliderItem from "./SliderItem";

const TopRatedMovies = ({ filteredMovies = [] }) => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_API_TOP_RATED_URL;
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTopMovies(data.results);
        setIsLoading(false);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-12">
      <h1 class="font-bold text-6xl bg-gradient-to-b from-slate-200 via-cyan-300 to-slate-100 text-transparent bg-clip-text ">
        Top Rated
      </h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 mr-15 ml-5">
          <Slider
            {...settings}
            style={{
              width: "870px",
            }}
          >
            {topMovies?.map((movie) => (
              <SliderItem key={movie?.id} movie={movie} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default TopRatedMovies;
