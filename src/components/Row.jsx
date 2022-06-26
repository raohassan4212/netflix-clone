import { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css"

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              className="row-poster"
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
