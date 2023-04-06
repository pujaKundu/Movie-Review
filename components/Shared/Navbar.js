import React from "react";

const Navbar = ({ setSearchInput }) => {
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="pt-5 flex justify-between bg-transparent top-0 sticky">
      <div className="flex items-center ml-5">
        <img className="w-12 h-12" src="/assets/movie-reel.png" alt="" />
        <h1 className="text-2xl text-cyan-300">Silver Screen</h1>
      </div>
      <div>
        <input
          className="bg-slate-700 rounded shadow-sm w-80 p-3 cursor-text mr-5"
          type="text"
          placeholder="Search movies.."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
