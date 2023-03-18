import { useState, useEffect } from "react";
import MovieList from "./MovieList.js/MovieList";
import Navbar from "./Shared/Navbar";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  ///search
  const [searchInput, setSearchInput] = useState("");
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false)
      });
  }, [movies.length]);

  const filteredMovies = movies.filter((movie) =>
    movie?.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log(movies);
  console.log(filteredMovies);
  return (
    <div className=" flex flex-col pt-10 items-center justify-center">
      <Navbar setSearchInput={setSearchInput} />
      <h1 className="text-indigo-500 mb-8 text-6xl font-bold">Movie Viewer</h1>
      <MovieList filteredMovies={filteredMovies} />
      {isLoading && <p>Loading</p>}
    </div>
  );
};

export default Homepage;
