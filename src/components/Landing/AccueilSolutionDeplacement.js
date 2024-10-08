import React, { useState, useEffect, useRef } from 'react'
import carSide from '../../images/car-side.png'
import carSide2 from '../../images/car-side2.png'
import plane from '../../images/plane.png'

const AccueilSolutionDeplacement = () => {

    const myElementRef = useRef(null);

    const [isAfficher, setIsAfficher] = useState(false)
    const [elementPositionTop, setElementPositionTop] = useState(null)
    const [elementHeight, setElementHeight] = useState(null)


    useEffect(() => {

        const element = myElementRef.current
        if (element) {
            const rect = element.getBoundingClientRect()
            setElementPositionTop(rect.top)
            setElementHeight(rect.height)

        }
        var positionTop = elementPositionTop + window.scrollY - (window.innerHeight) / 2
        const showElement = () => {

            if (window.scrollY > positionTop && !isAfficher) {
                setIsAfficher(true)
            } else if (window.scrollY < positionTop && isAfficher) { 
                setIsAfficher(false)
            }
        }

        window.addEventListener('scroll', showElement)

        return () => {
            window.removeEventListener('scroll', showElement)
        }
    }, [elementPositionTop, elementHeight, isAfficher])





    const containerStyle = !isAfficher ? " styleHideContainer" : "styleShowContainer "

    const navettePremiumStyle = !isAfficher ? "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleHideNavettePremium" : "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleShowNavettePremium"
    const locationVoiture = !isAfficher ? "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleHideLocationVoiture" : "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleShowLocationVoiture"
    const transfertIvato = !isAfficher ? "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleHidePlane" : "col-md-3 col-lg-3 col-sm-12 shadow p-2 m-3 styleShowPlane"

    return (
        <div ref={myElementRef}  className='container-fluid mt-5  container-AccueilSolutionDeplacement'>
            <div className={containerStyle}>

                <div className='container mt-5 mb-5' >
                    <center >
                        <div className=' d-flex flex-column justify-content-center align-items-center ' >
                            <h1 className='bold'>La solution pour vos déplacement</h1>
                            <div className='col-lg-7 col-md-6 col-sm-8 mt-2'>
                                <p className='text-center'>Notre société est spécialisée dans le convoyage et les transferts régionnaux ainsi que la location de vehicules pour vos déplacements et voyages à Madagascar</p>
                            </div>
                        </div>
                    </center>


                    <div className='row mt-3 d-flex justify-content-center align-items-center'>
                        <div className={navettePremiumStyle}>
                            <div className='solution-deplacement-image-container d-flex flex-column justify-content-center align-items-center' >
                                <img src={carSide} alt='imageNavette' />
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h5>Navete Premium</h5>
                                <p className='text-center'>Vos trajets entre Tana et Antsirabe. Confort, ponctualité et sécurité.</p>
                            </div>
                        </div>
                        <div className={transfertIvato}>
                            <div className='solution-deplacement-image-container d-flex flex-column justify-content-center align-items-center' >
                                <img src={plane} alt='imagePlane' />
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h5>Tansfet Ivato</h5>
                                <p className='text-center'>Votre accueil personnalisé entre l'aéroport et votre hôtel et vice-versa.</p>
                            </div>
                        </div>
                        <div className={locationVoiture}>
                            <div className='solution-deplacement-image-container d-flex flex-column justify-content-center align-items-center'  >
                                <img src={carSide2} alt='imageCar' />
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h5>location de voirures</h5>
                                <p className='text-center'>Service de location de voiture avec chauffeur dans tout le pays.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default React.memo(AccueilSolutionDeplacement) 