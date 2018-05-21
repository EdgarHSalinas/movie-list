import React from "react";
import App from "./App";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
   this.props.handleSearchInputChange(e.target.value);
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
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Go!
        </button>
      </div>
       
    );
  }


}



export default Search;