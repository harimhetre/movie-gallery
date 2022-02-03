import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Moviecard from "./Components/Moviecard";
import { getRomanticComedyMovies } from "./redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { romanticComedyMovies, totalRomanticComedyMovies } = useSelector(
    (state) => ({
      romanticComedyMovies: state?.romanticComedyReducer?.romanticComedyMovies,
      totalRomanticComedyMovies:
        state?.romanticComedyReducer?.totalRomanticComedyMovies,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getRomanticComedyMovies(data, page));
    setData(romanticComedyMovies);
  }, [page, JSON.stringify(romanticComedyMovies)]);

  useEffect(() => {
    if (searchValue !== "") {
      let filteredData =
        romanticComedyMovies &&
        romanticComedyMovies.filter((value) => {
          return value?.name
            ?.toLowerCase()
            ?.includes(searchValue.toLowerCase());
        });
      setData(filteredData);
    } else {
      setData(romanticComedyMovies);
    }
  }, [searchValue]);
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2 text-white" style={{ padding: "1rem" }}>
        <div style={{ display: "flex" }}>
          <span>
            <img
              src="/movie-gallery/Slices/Back.png"
              alt="back"
              style={{
                width: "1rem",
                marginTop: "0.4rem",
                marginRight: "0.3rem",
              }}
            ></img>
          </span>
          <span style={{ fontSize: "1.2rem" }}>Romantic Comedy</span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {!showSearchInput && (
            <img
              src="/movie-gallery/Slices/search.png"
              alt="search"
              style={{ width: "1.5rem", height: "1.5rem" }}
              onClick={() => setShowSearchInput(true)}
            ></img>
          )}

          {showSearchInput && (
            <input
              type="search"
              style={{ padding: "0rem", marginLeft: "1rem" }}
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
            ></input>
          )}
        </div>
      </div>
      <div
        id="infiniteScrollTagrgrt"
        style={{ overflow: "auto", height: "900px" }}
      >
        <InfiniteScroll
          dataLength={data?.length}
          next={() => setPage(page + 1)}
          hasMore={
            !showSearchInput
              ? data?.length < totalRomanticComedyMovies
                ? true
                : false
              : false
          }
          scrollableTarget="infiniteScrollTagrgrt"
        >
          <div
            className="grid grid-cols-3 gap-3"
            style={{ padding: "0.75rem", overflow: "auto" }}
          >
            {data &&
              data.map((movie, index) => {
                return (
                  <Moviecard
                    key={`${movie?.name}${index + 1}`}
                    movieName={movie?.name}
                    poster={movie["poster-image"]}
                  />
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
