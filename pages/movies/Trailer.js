import { useState, useEffect } from "react";

const Trailer = ({ movieId, trailerOpen, setTrailerOpen }) => {
  const [trailers, setTrailers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url =
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}` ||
      "";
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrailers(data.results);
        setIsLoading(false);
      });
  }, [movieId]);

  const videoUrl =
    trailers && trailers.length > 0
      ? `https://www.youtube.com/embed/${trailers[0].key}`
      : "";

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle "
        checked={trailerOpen}
        onChange={() => setTrailerOpen(false)}
      />
      <div className="modal ">
        <div className="modal-box relative bg-zinc-900">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <iframe
              className="ml-5 rounded-lg"
              style={{
                width: "420px",
                height: "300px",
              }}
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              title="Movie Video"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Trailer;
