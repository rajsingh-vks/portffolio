import React from 'react';
import Banner from '../../components/Banner/Banner';
import Portfolio from '../../components/portfolio/portfolio';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function PortfolioMain() {
  return (
    <div>
       <Header/>
       <Banner/>
       <Portfolio/>
       <Footer/>
    </div>
  );
}
