import React from "react";
import App from "./App.js";



var MovieListItem = (props) => (
   <li className="list-group-item">
     
      {props.movie.title}
    </li>
);




export default MovieListItem;