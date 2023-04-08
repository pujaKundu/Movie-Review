import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CastItem from "./CastItem";
import { ThreeDots } from "react-loader-spinner";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCast(data?.cast);
        setIsLoading(false);
      });
  }, [movieId]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      <p className="text-xl font-semibold text-slate-300 mt-5">Cast:</p>
      <div style={{ display: "flex", marginTop: "30px" }}>
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
          <Slider
            {...settings}
            style={{
              width: "690px",
              marginLeft: "25px",
            }}
          >
            {cast &&
              cast.map((c) => (
                <CastItem
                  key={c.id}
                  profile_path={c.profile_path}
                  name={c.name}
                  character={c.character}
                />
              ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default Cast;
