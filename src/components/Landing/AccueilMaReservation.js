import React from 'react'

const AccueilMaReservation = () => {
    return (
        <div className='container-fluid mb-5 d-flex flex-column align-items-center justify-content-center shadow' style={{ backgroundColor: "rgb(206,221,55)", height: "45vh" }}>
            <div className='container '>
                <h1 className='text-white'>Ma réservation</h1>
                <p className='text-white'>Contacter nous pour réserver votre place a bord de la navette, un <button className="btn btn-md text-black maReservationBtn fs-6 shadow" >Navette Premium</button> <button className="btn btn-md text-black maReservationBtn fs-6 shadow"  >Véhicule / Transfert</button> transfert à l'aeroport ou louer un véhicule pour voyager.</p>
            </div>
        </div>
    )
}

export default AccueilMaReservation