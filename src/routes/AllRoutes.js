import { Routes, Route } from "react-router-dom";
import { MovieDetailPage, MovieListPage, PageNotFound, SearchPage } from "../pages"

const AllRoutes = () => {
  return (
    (
        <div className="">
            <Routes>
                <Route path="" element={<MovieListPage apiPath="movie/now_playing" title="Home" />} />
                <Route path="movie/:id" element={<MovieDetailPage />} />
                <Route path="movies/popular" element={<MovieListPage apiPath="movie/popular" title="Popular" />} />
                <Route path="movies/top" element={<MovieListPage apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="movies/upcoming" element={<MovieListPage apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<SearchPage apiPath="search/movie" title="Search Result For" />} />
                <Route path="*" element={<PageNotFound title="Page Not Found" />} />
            </Routes>
        </div>
      )
  )
}

export default AllRoutes
