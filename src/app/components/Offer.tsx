"use client"
import React from 'react'

type Offer = {
  title: string,
  description: string,

}

const SpecialOffer: React.FC = () => {
const offers: Offer[] = [
  {
    title: "Happy Hour",
    description: "10pm to 10am get 50% discount"
  },

  {
    title: "Family Meal Deal",
    description: "Enjoy you meal"
  },
  {
    title: "Weekly Brunch",
    description: "One free complimentry drink  with weekly brunch"
  },
];

const handleOfferClick = (description: string) => {
  alert(description);
}


return (
<section className='py-10'>
  <div className='container mx-auto text-center'>
    <h2 className='text-4xl font-bold mb-6 text-blue-900'>Special Offer's</h2>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{offers.map((offer, index)=> (
  <button key={index}
  onClick={() => handleOfferClick(offer.description)}
  className='bg-white shadow-lg rounded-lg text-center hover:bg-blue-300 transition duration-300 transform hover:scale-105'>
<h3 className='text-2xl font-semibold text-slate-700'>{offer.title}</h3>
 <p className='text-pink-700 mt-3'>{offer.description}</p>
  </button>
))}
</div>
  </div>

</section>
)
}

export default SpecialOffer;
