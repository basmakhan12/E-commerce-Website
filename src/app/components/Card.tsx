import React from 'react'

const FloatingImageContentBlock = () => {
  return(
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:1/2 md:pr-10'>
      <h2 className='text-3xl font-bold mb-4 text-pink-900'> Many Delicious Pizza</h2>
<p className='text-orange-900'>Experiance the juiciest pizzas in town, made with fresh ingredients and grilled to perfection.</p>
<button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-200'>
  Order Now
</button>

<h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-black'>Coming Soon: Our New Pizza Launches</h3>

<ul>
  <li> <strong>Cheesy BBQ Bacon Pizza:</strong>
      A mouthwwatering blend of cheddar cheese, crispy bacon, and BBQ</li>
  <br/>

  <li> <strong>Spicy Jalapeno Pizza:</strong>
      A fiery delight topped with fresh jalapeno and zesty chipotle mayo</li>
  <br/>

  <li> <strong>Mushroom Swiss pizza:</strong>
      Juicy beef melted swiss cheese for a rich, savory taste</li>
  <br/>

  <li> <strong>Avacado Veggie Pizza:</strong>
      A delicious plant-based option featuring a grilled Veggie pizza</li>
  <br/>

  <li> <strong>Buffalo Chicken Pizza:</strong>
      Crispy Chicken breast tossed in spicy buffalo sauce</li>
  <br/>
</ul>
</div>
<div className='md:w-1/2 mt-6 md:mt-0'>
<img 
src='./image/back.jpg'
alt='Delicious Pizza'
className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>

</div>
   
    </section>
  )
}


export default FloatingImageContentBlock;
