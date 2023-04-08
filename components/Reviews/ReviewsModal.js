import { useState, useEffect } from "react";
import Review from "./Review";

const ReviewsModal = ({ movieId, reviewsOpen, setReviewsOpen }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data?.results);
        setIsLoading(false);
      });
  }, [movieId]);

  const handleModalToggle = () => {
    setReviewsOpen((prevState) => !prevState);
  };

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle "
        checked={reviewsOpen}
        onChange={handleModalToggle}
      />
      <div className="modal">
        <div className="modal-box  w-11/12 max-w-5xl  bg-zinc-900">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Review key={review?.id} review={review} />
                ))
              ) : (
                <div>No reviews found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

};

export default ReviewsModal;
