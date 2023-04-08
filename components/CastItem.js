import React from "react";

const CastItem = ({ profile_path, name, character }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt={name}
        className="rounded-full mr-4"
        style={{ width: "90px", height: "90px" }}
      />

      <p className="text-slate-200 text-center my-2">{name}</p>
      <small className="text-slate-400 text-center">{character}</small>
    </div>
  );
};

export default CastItem;
