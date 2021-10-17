import React, { Component } from "react";
import NavbarComp from "./component/navbar/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabel from "./component/tabel/Tabel";
import Formulir from "./component/form/Formulir"; //jangan kasi nama form
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      id: 0,
      username: "",
      description: "",
      title: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        total: [
          ...this.state.total,
          {
            id: this.state.total.length + 1,
            title: this.state.title,
            description: this.state.description,
            username: this.state.username,
          },
        ],
      });
    } else {
      const ExceptchossenData = this.state.total
        .filter((totals) => totals.id !== this.state.id)
        .map((filterData) => {
          return filterData;
        });

      this.setState({
        total: [
          ...ExceptchossenData,
          {
            id: this.state.total.length + 1,
            title: this.state.title,
            description: this.state.description,
            username: this.state.username,
          },
        ],
      });
    }

    this.setState({
      id: 0,
      username: "",
      description: "",
      title: "",
    });
  };

  editData = (id) => {
    const chossenData = this.state.total
      .filter((totals) => totals.id === id)
      .map((filterData) => {
        return filterData;
      });

    this.setState({
      id: chossenData[0].id,
      username: chossenData[0].username,
      description: chossenData[0].description,
      title: chossenData[0].title,
    });
  };

  deleteData = (id) => {
    const newChossenData = this.state.total
      .filter((totals) => totals.id !== id)
      .map((filterData) => {
        return filterData;
      });

    this.setState({
      total: newChossenData,
    });
  };

  render() {
    console.log(this.state.total);
    return (
      <div>
        <NavbarComp />
        <div className="container mt-4">
          <Tabel total={this.state.total} editData={this.editData} deleteData={this.deleteData} />
          <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
