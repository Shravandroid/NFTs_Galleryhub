import React from 'react'
import "./brandsIntegration.css";


const BrandsIntegration = () => {
  return (
    <div className='top-bi'>
      <div className='brands-integration'>
        <img src={require('../../assets/Exodus.jpg')} className='bi-logos' alt='brand-logos' />
        <img src={require('../../assets/Safepal.png')} className='bi-logos' alt='brand-logos' />
        <img src={require('../../assets/Coingecko.webp')} className='bi-logos' alt='brand-logos' />
      </div>
      <div className='brands-integration'>
        <img src={require('../../assets/Metamask.jpg')} className='bi-logos' alt='brand-logos' />
        <img src={require('../../assets/Trustwallet.jpg')} className='bi-logos' alt='brand-logos' />
      </div>

    </div>
  );
};

export default BrandsIntegration;