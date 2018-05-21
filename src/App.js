import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }
 
  render() {
    return(
      <div className="App">
      
      <h1>MovieList</h1>
    
      </div>
    );
  }
}

export default App;