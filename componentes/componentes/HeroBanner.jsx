import React from 'react'
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MITAD TEXTO</h3>
        <img src='' alt='auriculares' className='hero-banner-image'/>

        <div>
          <Link href="/producto/ID">
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <hs>Descripcion</hs>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner