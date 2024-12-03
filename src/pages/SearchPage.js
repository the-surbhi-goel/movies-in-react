import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const SearchPage = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const { data: movieList } = useFetch(apiPath, "&query=" + searchTerm);

  return (
    <>
      <section className="py-5">
        {movieList.length === 0 ? (
          <p className="text-3xl text-gray-700 dark:text-white">{`No Movie Found for ${searchTerm}`}</p>
        ) : (
          <p className="text-3xl text-gray-700 dark:text-white">{`Result for ${searchTerm}`}</p>
        )}
      </section>
      <section className="py-7">
        <div className="flex justofy-start flex-wrap laptop:justify-evenly">
          {movieList && movieList.map((movie, index) => <MovieCard key={index} movie={movie} />)}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
