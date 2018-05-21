import React from "react";
import "./App.css";
import Search from "./Search";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    };

  }
 
  render() {
    console.log('Props passing '+ this.state.movies);
    return (
    

        <div className="container-fluid" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="#" > MovieList </a>
           
         </nav>

          
          <div className="row">
            <div className="col-md">
              <AddMovie />
            </div>
           </div>


          <div className="row">
            <div className="col-md">
              <Search />
            </div>
           </div>

          

          <div className="row">
            <div className="col-md">

              <MovieList
                movies={this.state.movies}
              />
            </div>
          </div>
        </div>
      
    );
  }
};





export default App;