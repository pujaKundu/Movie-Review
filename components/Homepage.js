import { useState, useEffect } from "react";
import MovieList from "./MovieList/MovieList";
import Navbar from "./Shared/Navbar";
import Sidebar from "./Shared/Sidebar";
import TopRatedMovies from "./topRated/TopRatedMovies";
import Banner from "./Banner/Banner";
import UpcomingMovies from "./upcoming/UpcomingMovies";
import LatestMovies from "./latest/LatestMovies";
import { ThreeDots } from "react-loader-spinner";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  //genres filter
  const [genreId, setGenreId] = useState("");

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {" "}
      <div className="z-0">
        <div className="fixed">
          <Sidebar setGenreId={setGenreId} />
        </div>
        <div className="ml-96 mb-16">
          <MovieList movies={movies} />
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
          <TopRatedMovies />
          <LatestMovies />
          <UpcomingMovies />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
