import { useState } from 'react';//use significa que es un Hook, es una regla
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  //console.log('render');//cuando se cambia el estado, se dispara nuevamente el functional component
  //cuando cambiamos un estado, no conviene que se dispare, porque se puede agregar nuevamente datos
  //pero hay hooks especialziados para impedir eso.
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (event) => {
    setCounter( counter + 1 );
  };

  const handleSubstract = (event) => {
    setCounter( counter - 1 );
  };

  const handleReset = (event) => {
    setCounter( value );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h3> { counter } </h3>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
