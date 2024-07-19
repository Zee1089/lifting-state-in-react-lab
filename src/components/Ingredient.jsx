import React from 'react'

export default function Ingredient({ingredient, addtoBurger, removeFromBurger, isInStack}) {
  return (
   
    <li 
    style={{color: ingredient.color}}>
    
    {ingredient.name}

    
    <button onClick={(onButtonClick) =>addtoBurger(ingredient)}  type='submit'> + </button>

    
    {!isInStack && (
        <button onClick={() => removeFromBurger(ingredient)} type='submit'> x </button>
      )}
    
    </li>
     
  )
}
 