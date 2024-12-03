import { useEffect, useState } from "react";
import { ApiBaseURL } from "../constants/APIsCons";

const useFetch = (apiUrl, query = "") => {
  const [data, setData] = useState([]);
  const url = `${ApiBaseURL}${apiUrl}?api_key=${process.env.REACT_APP_API_KEY}${query}`;

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }

    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
