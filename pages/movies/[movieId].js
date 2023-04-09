import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Cast from "../../components/Cast";
import Rating from "../../components/Shared/Rating";
import SimilarMovies from "../../components/SimilarMovies";
import Trailer from "./Trailer";
import ReviewsModal from "../../components/Reviews/ReviewsModal";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const [movie, setMovie] = useState({});
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const handleTrailer = (e) => {
    e.preventDefault();
    setTrailerOpen(true);
  };
  const handleReviews = (e) => {
    e.preventDefault();
    setReviewsOpen(true);
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

  return (
    <>
      <div className="pt-5 flex justify-between bg-zinc-900 ">
        <div className="flex items-center pl-5">
          <img className="w-12 h-12" src="/assets/movie-reel.png" alt="" />
          <h1 className="text-2xl text-cyan-300">Silver Screen</h1>
        </div>
        <div>
          <Link href="/">
            <div className="text-lg text-cyan-300 flex justify-center items-center cursor-pointer mr-5">
              Home
            </div>
          </Link>
        </div>
      </div>
      <div className="hero min-h-screen bg-zinc-900 px-20 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl mr-5" />
          <div className="mt-16">
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
                <div className=" text-slate-100 flex">
                  <span className="text-slate-300 font-bold">
                    {release_date && release_date.slice(0, 4)}{" "}
                    <span className="text-slate-300"> &nbsp;. &nbsp;</span>
                  </span>
                  <span className="text-slate-200 font-bold">
                    {Math.floor(runtime / 60)}h {runtime % 60}m
                  </span>
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
                  onClick={handleTrailer}
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
                {trailerOpen && (
                  <Trailer
                    movieId={movieId}
                    trailerOpen={trailerOpen}
                    setTrailerOpen={setTrailerOpen}
                  />
                )}
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
                <div>
                  <button
                    onClick={handleReviews}
                    className="btn bg-transparent border-cyan-300 hover:bg-slate-900 hover:border-cyan-300 ml-2"
                  >
                    <span className="mr-2">
                      <img
                        src="/assets/reviews.png"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </span>
                    See Reviews
                  </button>
                  {reviewsOpen && (
                    <ReviewsModal
                      movieId={movieId}
                      reviewsOpen={reviewsOpen}
                      setReviewsOpen={setReviewsOpen}
                    />
                  )}
                </div>
              </div>
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
