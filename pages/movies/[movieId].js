import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Cast from "../../components/Cast";
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
    original_language,
    tagline,
    runtime,
    imdb_id,
  } = movie;

  const img = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const imdbUrl = `https://www.imdb.com/title/${imdb_id}/`;
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-gray-900 via-cyan-900 to-gray-900">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-slate-200 mb-3">{title}</h1>
            <h3 className="text-lg font-semibold text-slate-300 my-5">
              {tagline}
            </h3>

            <div className="flex mt-2 items-center justify-between">
              <div className="flex items-center">
                <Rating vote_average={vote_average} />
                <small className="text-slate-200 mx-1">( {vote_count} )</small>
              </div>
              <div className="flex">
                <div className="ml-2 text-amber-400 flex">
                  <span className="mr-2">
                    <img
                      src="/assets/translate.png"
                      alt="Language"
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="uppercase">{original_language}</span>
                </div>
                <div className="ml-2 text-slate-100 flex">
                  <span className="mr-2">
                    <img
                      src="/assets/time.png"
                      alt="Duration"
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="text-amber-400">{runtime}</span>
                </div>
                <div className="ml-2 text-slate-100 flex">
                  <span className="mr-2">
                    <img
                      src="/assets/calendar.png"
                      alt="Release date"
                      width={18}
                      height={18}
                    />
                  </span>
                  <span className="text-amber-400">{release_date}</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {genres &&
                genres.map((genre, index) => (
                  <p
                    key={index}
                    className="text-slate-100 inline mr-2 rounded py-1 px-2 border border-cyan-300"
                  >
                    {genre.name}
                  </p>
                ))}
            </div>

            <p className="py-6 text-slate-100 text-justify">{overview}</p>
            <div className="flex justify-between">
              <div className="flex">
                <button
                  className="btn bg-transparent border-cyan-300 hover:bg-slate-900 hover:border-cyan-300 mr-2"
                  onClick={handleWatch}
                >
                  <span className="mr-2">
                    <img
                      src="/assets/video.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </span>
                  Watch Trailer
                </button>
                <Trailer
                  movieId={movieId}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
                <a
                  className="btn bg-transparent border-cyan-300 hover:bg-slate-900 hover:border-cyan-300"
                  rel="noreferrer"
                  href={imdbUrl}
                  target="_blank"
                >
                  <span className="mr-2">
                    <img src="/assets/link.png" alt="" width={18} height={18} />
                  </span>
                  IMDB
                </a>
              </div>
              <Link href="/">
                <div className="text-lg text-cyan-300 flex justify-center items-center cursor-pointer">
                  <span className="mr-2">
                    <img src="/assets/left-arrow.png" alt="" width={18} height={18} />
                  </span>
                  Back to home
                </div>
              </Link>
            </div>
            <Cast movieId={movieId} />
          </div>
        </div>
      </div>
      <SimilarMovies movieId={movieId} />
    </>
  );
};

export default Movie;
