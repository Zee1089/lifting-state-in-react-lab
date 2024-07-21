import React from 'react';
import Ingredient from './Ingredient.jsx';

export default function IngredientList({ availableIngredients, addToBurger }) {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((ingredient) => (
          <Ingredient 
            key={ingredient.name} 
            ingredient={ingredient}
            addToBurger={addToBurger}
            isInList={true}
          />
        ))}
      </ul>
    </div>
  );
}
