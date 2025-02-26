import React from 'react'
import foodList from './foodList'

const conditionalreact = () => {
    const food = ["rice","beans","potato"];

  return (
<ul>
    {food.map((items) => (
        <foodList  food= {items}/>
    ))}
</ul>
  )
}

export default conditionalreact
