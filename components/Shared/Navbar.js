import React from "react";

const Navbar = ({ setSearchInput }) => {
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <input
        className="bg-slate-700 rounded shadow-sm w-80 mr-5 p-3 right-0 absolute"
        type="text"
        placeholder="Search movies.."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
