import { useState, useEffect } from "react";

const Trailer = ({ movieId, isOpen, setIsOpen }) => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrailers(data.results);
      });
  }, [movieId]);

  const videoUrl = `https://www.youtube.com/embed/${trailers[0]?.key}`;

  return (
    <>
      {/* <label
        htmlFor="my-modal-3"
        className="btn"
        onClick={() => setIsOpen(true)}
      >
        Watch Trailer
      </label> */}
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle "
        checked={isOpen}
        onChange={() => setIsOpen(false)}
      />
      <div className="modal ">
        <div className="modal-box relative bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <iframe
            className="p-2 w-full"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Movie Video"
          />
        </div>
      </div>
    </>
  );
};

export default Trailer;
