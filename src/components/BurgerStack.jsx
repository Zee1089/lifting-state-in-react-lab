import React from 'react'
import Ingredient from './Ingredient.jsx'

export default function BurgerStack({banana, onButtonClick, removeFromBurger}) {
    if (banana.length === 0)
        console.log('No Ingredient');
    
  return (
    <div>
    {banana.map((ingredient) => (
    <Ingredient
     key={ingredient.id}  
     ingredient={ingredient}

     onButtonClick={() => removeFromBurger(Ingredient)}
     />

    )
    )}
</div>
  )
}



