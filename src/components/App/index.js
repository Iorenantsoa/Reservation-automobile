import React from 'react';
import '../../App.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Accueil from '../Landing/Accueil';
import NavettePremium from '../Landing/NavettePremium';
import ServiceLocation from '../Landing/ServiceLocation';
import Contact from '../Landing/Contact';
import PageNotFound from '../Landing/PageNotFound';
import { IconContext } from 'react-icons';
import Footer from '../Footer/Footer';
import Map from '../Landing/Map';
const App = () => {

  return (
    <BrowserRouter>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <div className='App'>
          <div className='header'>
            <Header />
          </div>
          <div className='landing'>
            <Routes>
              <Route path='Accueil/' element={<Accueil />} />
              <Route exact path='/' element={<Accueil />} />
              <Route path='NavettePremium/' element={<NavettePremium />} >
                <Route exact path='Accueil/' element={<Accueil />} />
              </Route>
              <Route path='ServicesLocation/' element={<ServiceLocation />} >
                <Route exact path='Accueil/' element={<Accueil />} />
              </Route>
              <Route path='Contact/' element={<Contact />} />
              <Route path='Map/' element={<Map />} />
              <Route element={<PageNotFound />} />
            </Routes>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </IconContext.Provider>

    </BrowserRouter>

  )
}

export default App;
// AIzaSyBpgUsObCgjKiJyqINMMgPXfYHf0poUktE