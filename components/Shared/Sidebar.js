import React, { useEffect, useState } from "react";

const Sidebar = ({ setGenreId }) => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      const url = process.env.NEXT_PUBLIC_API_GENRES_URL;
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
      setIsLoading(false);
    };
    fetchGenres();
  }, []);

  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <div className="drawer drawer-mobile overflow-x-hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center overflow-x-hidden">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side overflow-x-hidden">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <h1 className="text-indigo-500 mb-3 text-4xl font-bold pl-5">
            Movie Mate
          </h1>
          <ul className="menu p-4 w-80 bg-transparent text-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <span className="text-cyan-500 font-semibold text-2xl">
                Discover
              </span>
            </li>
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="hover:bg-black rounded"
                onClick={() => setGenreId(genre.id)}
              >
                <span>
                  <img src="/assets/science-fiction.png" alt="" width={20} />
                  {genre.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Sidebar;
