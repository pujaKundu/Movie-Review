import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/banner1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <h1>Silver Screen</h1>
    </div>
  );
};

export default Banner;
