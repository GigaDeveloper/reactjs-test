import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: this.generateCountersArr()
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - Updated");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  generateCountersArr() {
    let arr = [];
    for (let i = 1; i < 5; i++) {
      arr.push({ id: i, value: 0, selected: true });
    }
    return arr;
  }

  handleReset = () => {
    console.log("reset");
    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    // console.time("Test");
    // Version 1
    // const counters = this.state.counters.map(item => {
    //   if (item.id === counter.id) {
    //     item.value = item.value + 1;
    //   }
    //   return item;
    // });
    // Version 2
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.timeEnd("Test");
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(item => item.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
