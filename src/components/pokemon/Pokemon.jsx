import React from "react";
import "./Pokemon.css";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon">
        <div className="poke-info">
          <span>{this.props.pokemon.name}</span>
          <span>{this.props.pokemon.type}</span>
          <span>
            Average weight: {this.props.pokemon.averageWeight.value}{" "}
            {this.props.pokemon.averageWeight.measurementUnit}{" "}
          </span>
        </div>

        <img src={this.props.pokemon.image} alt="" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pokemon;
