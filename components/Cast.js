import { useState, useEffect } from "react";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCast(data?.cast);
      });
  }, []);

    return (
      <>
        <p className="text-xl font-semibold text-slate-300 mt-5">Cast:</p>
        <div style={{ display: "flex", marginTop: "30px" }}>
          {cast.slice(0, 7).map((c) => (
            <img
              key={c.id}
              src={`https://image.tmdb.org/t/p/original/${c.profile_path}`}
              alt={c.name}
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
          ))}
        </div>
      </>
    );
};

export default Cast;
