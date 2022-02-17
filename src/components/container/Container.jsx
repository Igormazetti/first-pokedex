import React from "react";
import Pokedex from "../pokedex/Pokedex";
import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <div className="cont-father">
        <div className="container">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default Container;
