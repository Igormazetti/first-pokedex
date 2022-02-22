import React, { Component } from "react";

export class Button extends Component {
  render() {
    const {
      pokes,
      handleButton,
      handleTypes,
      handleAllTypes,
      handleNextButton,
    } = this.props;

    const disabled = handleNextButton();

    const types = [];
    pokes.forEach((pokemon) => {
      if (!types.includes(pokemon.type)) {
        types.push(pokemon.type);
      }
    });

    return (
      <section>
        <button onClick={handleButton} disabled={disabled}>
          Próximo
        </button>
        {types.map((tipo) => (
          <button onClick={handleTypes} key={tipo}>
            {tipo}
          </button>
        ))}
        <button onClick={handleAllTypes}>Todos</button>
      </section>
    );
  }
}

export default Button;
