import { useEffect, useState } from "react";
import { ApiBaseURL } from "../constants/APIsCons";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`${ApiBaseURL}${url}?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      setData(data.results);
    }

    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
