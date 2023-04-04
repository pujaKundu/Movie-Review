import { useState, useEffect } from "react";
import MovieList from "./MovieList/MovieList";
import Navbar from "./Shared/Navbar";
import Sidebar from "./Shared/Sidebar";
import TopRatedMovies from "./topRated/TopRatedMovies";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  ///search
  const [searchInput, setSearchInput] = useState("");
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

  const filteredMovies = movies
    .filter((movie) =>
      movie?.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter((movie) => genreId === "" || movie?.genre_ids.includes(genreId));

  return (
    <>
      <Navbar setSearchInput={setSearchInput} />
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="fixed">
          <Sidebar setGenreId={setGenreId} />
        </div>
        <div className="ml-96">
          <MovieList movies={filteredMovies} />
          {isLoading && <p>Loading</p>}
          <TopRatedMovies />
        </div>
      </div>
    </>
  );
};

export default Homepage;
