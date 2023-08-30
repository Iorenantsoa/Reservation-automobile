import React from 'react'
import {Link} from 'react-router-dom'
import NavettePremiumContainer from './NavettePremiumContainer'


const NavettePremium = () => {
  return (
    <div className='container mt-5'>
        <p><Link style={{color:"rgba(0, 0, 0, 0.6)"}} to='../Accueil'>Accueil</Link> {'> '} Navette Premium : réservation </p>
        <h1>Navette Premium : réservation</h1>
        <NavettePremiumContainer/>
    </div>
  )
}
 
export default NavettePremium