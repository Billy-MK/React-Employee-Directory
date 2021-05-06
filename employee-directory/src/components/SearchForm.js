import React from "react";

function SearchForm(props) {
  return (
    <div className="container text-center">
      <form>
        <div className="form-group">
          <label className="display-5" style={{"margin": "12px"}} htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search by Name"
            id="search"
            style={{"width":"70%", "transform": "translate(22%)", "textAlign": "center"}}
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
          <button onClick={props.handleReset} style={{"marginLeft": "5px"}} className="btn btn-primary mt-3">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
