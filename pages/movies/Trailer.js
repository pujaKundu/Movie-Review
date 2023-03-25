import { useState, useEffect } from "react";

const Trailer = ({ movieId }) => {
  //api.themoviedb.org/3/movie/804150/videos?api_key=ccf6dc083edb8082c2f902a4052b7fc6
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrailers(data.results);
      });
  }, [trailers?.length]);
    
  const videoUrl = `https://www.youtube.com/embed/${trailers[0]?.key}`;
  console.log(videoUrl);
  return (
    <div className="video-container ">
      <iframe
        className="mt-5"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Movie Video"
      />
    </div>
  );
};

export default Trailer;
