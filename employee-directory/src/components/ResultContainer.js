import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import searchFilter from "../utils/search"

class ResultContainer extends Component {
  state = {
    search: "",
    results: [],
    employees: []
  };

  // When this component mounts, get ten employees
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ results: res.data.results, employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ results: searchFilter(this.state.employees, this.state.search) })
  };

  handleReset = event => {
    event.preventDefault();
    this.setState({ results:this.state.employees })
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleReset={this.handleReset}
        />
        <EmployeeList results={this.state.results} />
      </div>
    );
  }
}

export default ResultContainer;
