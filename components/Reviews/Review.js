import React from "react";

const Review = ({ review }) => {
  const { author_details, content, created_at } = review || {};
  const avatarUrl = author_details?.avatar_path
    ? `https://image.tmdb.org/t/p/w185${author_details.avatar_path}`
    : "/assets/default-avatar.png";

  return (
    <div className="flex flex-col bg-zinc-800 p-4 rounded-lg shadow-md mb-4" >
      <div className="flex items-center mb-2">
        <img
          src={avatarUrl}
          alt={author_details?.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div >
          <p className="font-medium text-cyan-500 mt-5">
            {author_details?.name ? author_details?.name : "Anonymous"}
          </p>
          {author_details?.rating && (
            <p className="text-yellow-500">
              {author_details.rating.toFixed(1)}/10
            </p>
          )}
          <p className="text-gray-500 text-sm">
            {new Date(created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="text-slate-200 text-justify pb-5 px-2">{content}</p>
    </div>
    
  );
};

export default Review;
