import React from 'react'
import { Link } from 'react-router-dom'
import ContactContainer from './ContactContainer'

const Contact = () => {
  return (
    <div className='container mt-5'>
      <p><Link style={{ color: "rgba(0, 0, 0, 0.6)" }} to='../Accueil'>Accueil</Link> {'> '} Contactez-nous </p>
      <h1>Contactez-nous</h1>
      <ContactContainer />
    </div>
  )
}

export default Contact