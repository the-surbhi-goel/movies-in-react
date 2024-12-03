import React from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

const MovieListPage = ({ apiPath }) => {
  const { data: movieList } = useFetch(apiPath);

  return (
    <section className="py-7">
      <div className="flex justofy-start flex-wrap laptop:justify-evenly">
        {movieList && movieList.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </section>
  );
};

export default MovieListPage;
