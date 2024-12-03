import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const SearchPage = ({ apiPath, title }) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const { data } = useFetch(apiPath, "&query=" + searchTerm);
  const movieList = data.results;
  useTitle(`${title} ${searchTerm}`);

  return (
    <>
      <section className="py-5">
        {movieList && movieList.length === 0 ? (
          <p className="text-3xl text-gray-700 dark:text-white">{`No Movie Found for ${searchTerm}`}</p>
        ) : (
          <p className="text-3xl text-gray-700 dark:text-white">{`Result for ${searchTerm}`}</p>
        )}
      </section>
      <section className="py-7">
        <div className="flex justofy-start flex-wrap laptop:justify-evenly">
          {movieList && movieList.length && movieList.map((movie, index) => <MovieCard key={index} movie={movie} />)}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
