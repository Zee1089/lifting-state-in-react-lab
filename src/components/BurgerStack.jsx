import React from 'react';
import Ingredient from './Ingredient.jsx';

export default function BurgerStack({ stack, removeFromBurger }) {
  if (stack.length === 0) {
    console.log('No Ingredient');
  }

  return (
    <div>
      <h2>Burger Stack</h2>
      <ul>
        {stack.map((ingredient) => (
          <Ingredient
            key={ingredient.name}  
            ingredient={ingredient}
            removeFromBurger={removeFromBurger}
            isInList={false}
          />
        ))}
      </ul>
    </div>
  );
}
