import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.props.onReset}
        >
          Reset Values
        </button>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.props.onAddCounter}
        >
          Add Counter
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            // value={counter.value}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
