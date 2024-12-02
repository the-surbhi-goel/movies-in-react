import { Routes, Route } from "react-router-dom";
import { MovieDetailPage, MovieListPage, PageNotFound, SearchPage } from "../pages"

const AllRoutes = () => {
  return (
    (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="" element={<MovieListPage apiPath="movie/now_playing" title="Home" />} />
                <Route path="movie/:id" element={<MovieDetailPage />} />
                <Route path="movies/popular" element={<MovieListPage apiPath="movie/popular" title="Popular" />} />
                <Route path="movies/top" element={<MovieListPage apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="movies/upcoming" element={<MovieListPage apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<SearchPage apiPath="search/movie" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
      )
  )
}

export default AllRoutes
