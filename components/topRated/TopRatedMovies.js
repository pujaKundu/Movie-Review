import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import SliderItem from "./SliderItem";
import { ThreeDots } from "react-loader-spinner";

const TopRatedMovies = () => {
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
    slidesToScroll: 3,
  };
  return (
    <div className="pt-12">
      <h1 class="font-semibold text-5xl bg-gradient-to-b from-slate-200 via-cyan-300 to-slate-100 text-transparent bg-clip-text ">
        Top Rated
      </h1>

      {isLoading ? (
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
      ) : (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 mr-15 ml-5">
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
