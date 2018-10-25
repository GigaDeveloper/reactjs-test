import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // imageUrl: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3", "tag4", "tag4"]
  // };

  styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>There are not tags!</p>;
  //   }

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag, index) => (
  //         <li key={"tag" + tag + index}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = e => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
