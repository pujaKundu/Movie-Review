import { useRouter } from "next/router";
import React from "react";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;
    return <div>{movieId}</div>;
};

export default Movie;
