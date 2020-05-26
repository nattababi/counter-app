import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <span style={this.styles}
              className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-sm col-md-auto">
            <button onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2">+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={!this.props.counter.value}>-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2">x</button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

