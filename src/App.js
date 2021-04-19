import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters.jsx";
import React, { Component } from "react";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleAddCounter = () => {
    console.log("handle add counter");
    let { counters } = this.state;
    counters.push({ id: counters.length + 1, value: 0 });
    this.setState(counters);
  };

  handleReset = () => {
    console.log("handle reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (ctr) => {
    console.log("handle delete ", ctr);
    let counters = this.state.counters;
    counters = counters.filter((counter) => counter.id !== ctr.id);
    this.setState({ counters });
  };

  handleIncrement = (ctr) => {
    console.log("handle increment ", ctr);
    let counters = this.state.counters;
    counters[counters.indexOf(ctr)].value++;
    this.setState({ counters });
  };

  handleDecrement = (ctr) => {
    console.log("handle decrement ", ctr);
    let counters = this.state.counters;
    counters[counters.indexOf(ctr)].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAddCounter={this.handleAddCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
