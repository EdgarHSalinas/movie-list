import React from "react";
import MovieListItem from "./MovieListItem";
import App from "./App.js";

var MovieList = (props) => (
  
   <div className="card">
     
     <ul className="list-group list-group-flush" >
      {
          props.movies.map((movie) =>
          <MovieListItem
            movie={movie}
          />

        )}
      </ul>
   </div>
);


export default MovieList;