import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Rating from "../../components/Shared/Rating";
import SimilarMovies from "../../components/SimilarMovies";
import Trailer from "./Trailer";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const handleWatch = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const {
    title,
    genres,
    overview,
    popularity,
    release_date,
    vote_average,
    poster_path,
    status,
    vote_count,
    spoken_languages,
  } = movie;

  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        
      });
  }, [movieId]);
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-gray-900 via-cyan-900 to-gray-900">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-slate-400 mb-3">{title}</h1>
            <div className="flex mt-2 items-center justify-between">
              <div className="flex items-center">
                <Rating vote_average={vote_average} />
                <small className="text-slate-200 mx-1">( {vote_count} )</small>
              </div>
              <p className="ml-2 text-slate-100">{release_date}</p>
            </div>
            <p className="text-slate-100 mt-3">
              Genres: {genres && genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="py-6 text-slate-100 text-justify">{overview}</p>
            <button className="btn btn-primary" onClick={handleWatch}>
              <span className="mr-2">
                <img src="/assets/video.png" alt="" width={25} height={25} />
              </span>
              Watch Trailer
            </button>
           <Trailer movieId={movieId} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <SimilarMovies movieId={movieId} />
    </>
  );
};

export default Movie;
