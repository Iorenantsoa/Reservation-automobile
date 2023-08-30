import React from 'react'
import  imgServiceLocation from '../../images/service-location-vehicule-1024x682.jpg'
import  navetteAmpefy from '../../images/Navette-Ampefy.jpg'

const ServiceLocationRightContainer = () => {
    return (
        <div className='col-lg-4 col-md-5 col-sm-10  d-flex flex-column justify-content-center align-items-center ' >
            <div className="conteneur1  mb-3 d-flex flex-column align-items-center justify-content-center">
                <h4>Transferts et location de véhicule</h4>
                <img src={imgServiceLocation} style={{ objectFit: "contain", objectPosition: "contain", }} className="col-12  w-75 mt-3" alt='...' />
            </div>
            <div className="conteneur1 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center">
                <h4>Navette pour Ampefy le week-end</h4>
                <img src={navetteAmpefy} style={{ objectFit: "contain", objectPosition: "contain", }} className="col-12  w-75 mt-3" alt='...' />
            </div>
        </div>
    )
}

export default ServiceLocationRightContainer