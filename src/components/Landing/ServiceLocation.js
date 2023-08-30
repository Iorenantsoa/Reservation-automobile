import React from 'react'
import { Link } from 'react-router-dom'
import ServiceLocationContainer from './ServiceLocationContainer'

const ServiceLocation = () => {
  return (
    <div className='container mt-5'>
      <p><Link style={{ color: "rgba(0, 0, 0, 0.6)" }} to='../Accueil'>Accueil</Link> {'> '} Nos services de location de véhicules </p>
      <h1>Nos services de location de véhicules</h1>
      <ServiceLocationContainer />
    </div>
  )
}

export default ServiceLocation