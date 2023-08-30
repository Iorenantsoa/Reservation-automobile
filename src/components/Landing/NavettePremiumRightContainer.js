import React from 'react'
import imgHoraire from '../../images/Tarifs-et-horaires-2022.jpg'
import imgBagage from '../../images/bagages-navette-antsirabe.jpg'
import imgEco from '../../images/navette-eco-antsirabe.jpg'
const NavettePremiumRightContainer = () => {

    return (
        <div className='col-lg-4 col-md-5 col-sm-10  d-flex flex-column justify-content-center align-items-center ' > 
            <div className="conteneur1  mb-3 d-flex flex-column align-items-center justify-content-center">
                <h4>Horaires de la navette</h4>
                <img src={imgHoraire}  style= {{objectFit : "contain" , objectPosition:"contain",}} className="col-12  w-75 mt-3" alt='...' />
            </div>
            <div className="conteneur1 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center">
                <h4>Vos bagages à bord</h4>
                <img src={imgEco}  style= {{objectFit : "contain" , objectPosition:"contain", }} className="col-12  w-75 mt-3" alt='...' />
            </div>
            <div className="conteneur1 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center">
                <h4>Navette à tarif Eco</h4>
                <img src={imgBagage}  style= {{objectFit : "contain" , objectPosition:"contain", }} className="col-12  w-75 mt-3" alt='...' />
            </div> 
        </div>
    )
}

export default NavettePremiumRightContainer 