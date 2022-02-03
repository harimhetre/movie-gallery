import React from "react";

const Moviecard = ({ movieName, poster }) => {
  const missingPoster = () => {
    var im = document.getElementById("moviePoster");
    im.src = "/Slices/placeholder_for_missing_posters.png";
  };
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden"
        style={{ paddingTop: "2.25rem" }}
      >
        <img
          src={`/Slices/${poster}`}
          onError={missingPoster}
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
