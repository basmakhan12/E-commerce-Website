import React from 'react'
import Navbar from '../app/components/Navbar';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Testimonals from './components/Testimonals';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Menu from './components/Menuitems';



function App() {
  return (
    <div className='bg-gradient-to-b from-black to-blue-300 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Banner/>
      <ProductList/>
      <Menu/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Testimonals/>
      <Footer/>
      
    </div>
  )
}

export default App;
