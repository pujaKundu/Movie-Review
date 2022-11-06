import React from "react";
import { RatingStar } from "rating-star";

const Rating = ({ ratingValue }) => {
  return (
    <div>
      <span>{ratingValue}</span>
    </div>
  );
};

export default Rating;
