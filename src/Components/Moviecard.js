import React from "react";

const Moviecard = ({ movieName, poster }) => {
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden"
        style={{ paddingTop: "2.25rem" }}
      >
        <img
          src={`/movie-gallery/Slices/${poster}`}
          width="100%"
          height="100%"
          id="moviePoster"
          alt="poster"
        />
        <span className="text-white">{movieName}</span>
      </div>
    </>
  );
};

export default Moviecard;
