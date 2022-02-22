import React from "react";
import pokemons from "../../data";
import Pokemon from "../pokemon/Pokemon";
import Button from "../button/Button";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.handleButton = this.handleButton.bind(this);
    this.handleTypes = this.handleTypes.bind(this);
    this.handleAllTypes = this.handleAllTypes.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);

    this.state = {
      index: 0,
      pokes: pokemons,
    };
  }

  handleButton() {
    this.setState((estadoAnterior) => ({
      index: (estadoAnterior.index + 1) % this.state.pokes.length,
      type: "",
    }));
  }

  handleNextButton() {
    if (this.state.pokes.length <= 1) {
      return true;
    } else return false;
  }

  handleAllTypes() {
    this.setState({ pokes: pokemons });
  }

  handleTypes(event) {
    const newPokes = [];
    pokemons
      .filter((pokemon) => pokemon.type === event.target.textContent)
      .forEach((item) => newPokes.push(item));
    this.setState({ pokes: newPokes });
  }

  render() {
    const {
      state: { pokes, index },
    } = this;

    return (
      <section>
        <div className="pokedex">
          <Pokemon key={pokes[index].id} pokemon={pokes[index]} />
        </div>
        <Button
          handleNextButton={this.handleNextButton}
          handleAllTypes={this.handleAllTypes}
          handleButton={this.handleButton}
          pokes={pokemons}
          handleTypes={(e) => this.handleTypes(e)}
        />
      </section>
    );
  }
}

export default Pokedex;
