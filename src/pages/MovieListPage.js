import React from "react";
import MovieCard from "../components/MovieCard";

const MovieListPage = () => {
  return (
    <section className="py-7">
      <div className="flex justofy-start flex-wrap">
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieListPage;
