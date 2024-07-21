import React from 'react';

export default function Ingredient({ ingredient, addToBurger, removeFromBurger, isInList }) {
  return (
    <li style={{ color: ingredient.color }}>
      {ingredient.name}
      {isInList ? (
        <button onClick={() => addToBurger(ingredient)} type="button"> + </button>
      ) : (
        <button onClick={() => removeFromBurger(ingredient)} type="button"> x </button>
      )}
    </li>
  );
}
