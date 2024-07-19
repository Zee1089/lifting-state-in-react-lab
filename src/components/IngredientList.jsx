import React from 'react'
import Ingredient from './Ingredient.jsx'

export default function IngredientList({banana, onButtonClick, addtoBurger}) {
  return (
    <div>
        {banana.map((ingredient) => (
        <Ingredient 
        key={ingredient.id} 
        ingredient={ingredient}
        addtoBurger = {addtoBurger}

        // onButtonClick={() => addtoBurger(ingredient)}
        />
        ))}
    </div>
  );
}

