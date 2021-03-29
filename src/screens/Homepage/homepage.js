import React from 'react';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/portfolio/portfolio';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function HomeScreen() {
  return (
    <div>
       <Header/>
       <Banner/>
       <Skills/>
       <Portfolio/>
       <Footer/>
    </div>
  );
}
