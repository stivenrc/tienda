import React from 'react'
import HeroBanner from '../componentes/componentes/HeroBanner';
import FooterBanner from '../componentes/componentes/FooterBanner';


const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Productos Mas Vendidos</h2>
        <p>Altavoces de muchas variaciones</p>
      </div>

      <div className='products-container'>
        {['Producto 1', 'Producto 2'].map((producto) => producto)}
      </div>
      
      <FooterBanner />
    </>
  )
}

export default Home;