import React, { useEffect, useState } from "react";

const Sidebar = ({ setGenreId }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_GENRES_URL;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);

        // console.log(data);
      });
  }, [genres]);

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h1 className="text-indigo-500 mb-3 text-4xl font-bold pl-5">
          Movie Viewer
        </h1>
        <ul className="menu p-4 w-80 bg-transparent text-slate-100 ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <span className="text-cyan-500 font-semibold text-2xl">
              Discover
            </span>
          </li>
          {genres.map((genre) => (
            <li
              className="hover:bg-slate-700 rounded"
              onClick={() => setGenreId(genre?.id)}
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
};

export default Sidebar;
