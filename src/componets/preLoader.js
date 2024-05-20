import React, { Component } from "react";
import "../styles/preLoader.css";

class SplitText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

function PreLoader() {
  return (
    <div className="preloader">
      <h1>
        <div className="title">
          <SplitText copy="Lucas DRÉANO" role="heading" />
        </div>
        <div className="cont">
          <span className="reveal">Portfolio</span>{" "}
        </div>
      </h1>
    </div>
  );
}

export default PreLoader;
