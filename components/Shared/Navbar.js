import { useState } from "react";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setSearchInput(searchQuery);
    if (searchQuery === "") {
      setSearchResults([]);
      setShowModal(false);
      return;
    }
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.results);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-5 flex justify-between bg-transparent top-0 sticky z-20">
      <div className="flex items-center ml-5">
        <img className="w-12 h-12" src="/assets/movie-reel.png" alt="" />
        <h1 className="text-2xl text-cyan-300">Silver Screen</h1>
      </div>
      <div>
        <input
          className="bg-zinc-800 rounded shadow-sm w-96 p-3 cursor-text mr-10 text-slate-200 placeholder-slate-400"
          type="text"
          placeholder="Search movies.."
          onChange={handleSearch}
        />
        {showModal && (
          <div className="fixed mt-2  z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-800 p-8 rounded shadow-lg">
              <h2 className="text-lg text-slate-300 font-medium mb-4">
                Search results for {searchInput}
              </h2>
              <ul className="space-y-4">
                {searchResults.map((movie) => (
                  <div
                    className="flex items-center justify-start"
                    key={movie.id}
                  >
                    <img
                      className="w-10 h-10 rounded mr-2"
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      alt=""
                    />
                    <li className="text-slate-300">{movie.title}</li>
                  </div>
                ))}
              </ul>
              <button
                className="absolute top-0 right-0 p-3 text-slate-300"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
