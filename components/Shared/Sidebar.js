import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

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
    content = (
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
    );
  } else {
    content = (
      <div className="drawer drawer-mobile overflow-hidden sticky">
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
        <div className="drawer-side  overflow-hidden">
          <ul className="menu p-4 w-80 bg-transparent text-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <span className="text-cyan-500 font-semibold text-2xl">
                Discover
              </span>
            </li>
            <li
              className="hover:bg-zinc-800 rounded"
              onClick={() => setGenreId("")}
            >
              <span>
                <img src="/assets/science-fiction.png" alt="" width={20} />
               All
              </span>
              
            </li>
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="hover:bg-zinc-800 rounded"
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
