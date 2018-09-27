import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    title: "",
    completed: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data.id,
          title: data.title,
          completed: data.completed
        });
      });
  }
  // componentWillMount() {
  //   console.log("component WILL mount...");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "something"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("componentBeforeProps...");
  // }

  render() {
    const { id, title, completed } = this.state;
    return (
      <div>
        <h1>
          {id} {title}
        </h1>
        <p>{completed}</p>
      </div>
    );
  }
}

export default Test;
