import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const MovieListPage = ({ apiPath, title }) => {
  const { data } = useFetch(apiPath);
  const movieList = data.results;
  useTitle(title);

  return (
    <section className="py-7">
      <div className="flex justofy-start flex-wrap laptop:justify-evenly">
        {movieList && movieList.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </section>
  );
};

export default MovieListPage;
