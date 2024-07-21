import React from 'react';

export default function Ingredient({ ingredient, addToBurger, removeFromBurger, isInList }) {
  return (
    <li >
      {isInList ? (
        <button onClick={() => addToBurger(ingredient)} 
        type="button"  
        style={{ color: ingredient.color }}

        > {ingredient.name}</button>
      ) : (
        <button onClick={() => removeFromBurger(ingredient)} type="button" style={{ color: ingredient.color }}> {ingredient.name} </button>
      )}
    </li>
  );
}
