import React from 'react';
import './App.css';
import BrandsIntegration from './components/BrandsIntegration';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import TopFold from './components/TopFold';



function App() {


 
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <InfoSection />
      <Footer />
      
    </div>

  );


  };


export default App;
