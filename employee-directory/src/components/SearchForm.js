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
            placeholder="Jon Snow"
            id="search"
            style={{"width":"70%", "transform": "translate(22%)", "textAlign": "center"}}
          />
          <button onClick={props.handleFormSubmit} className="btn mt-3 btn-primary">
            Search
          </button>
          <button onClick={props.handleReset} style={{"marginLeft": "5px"}} className="btn btn-primary mt-3">
            Reset
          </button>
          <button type="button" style={{"marginLeft": "5px"}} className="btn btn-secondary mt-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sort 
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button className="dropdown-item" onClick={props.sortFirstName}>First Name</button></li>
            <li><button className="dropdown-item" onClick={props.sortLastName}>Last Name</button></li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
