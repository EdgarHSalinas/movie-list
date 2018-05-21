import React from "react";
import App from "./App";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

  }

  handleInputAddMovie(e) {
   this.props.handleAddMovieInputChange(e.target.value);
   this.setState({
     value: e.target.value
   });
 }

  render() {
    return (
       
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Add movie title here"
          value={this.state.value}
          onChange={this.handleInputAddMovie.bind(this)}
        />
        <button className="btn baddtn-success" type="submit">
          Add
        </button>
      </div>
       
    );
  }

}

export default AddMovie;