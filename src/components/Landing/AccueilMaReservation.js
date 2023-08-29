import React, { useState, useEffect, useRef } from 'react'

const AccueilMaReservation = () => {
    const elementRef = useRef(null)
    const [isAfficher, setIsAfficher] = useState(false)
    const [elementPositionTop, setElementPositionTop] = useState(null)
    const [elementHeight, setElementHeight] = useState(null)

    useEffect(() => {
        const element = elementRef.current

        if (element) {
            const rect = element.getBoundingClientRect()
            setElementPositionTop(rect.top)
            setElementHeight(rect.height)
        }

        const positionTop = elementPositionTop + window.scrollY - (window.innerHeight) / 1.5
        
        const handleScroll = () => {
            if (window.scrollY > positionTop && !isAfficher) {
                setIsAfficher(true)
            } else if (window.scrollY < positionTop && isAfficher) {
                setIsAfficher(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [elementPositionTop, elementHeight, isAfficher])

    const styleMaReservation = !isAfficher ? 'container-fluid  d-flex flex-column align-items-center justify-content-center shadow styleHideMaReservation' : 'container-fluid  d-flex flex-column align-items-center justify-content-center shadow styleShowMaReservation'

    return (
        <div ref={elementRef} style={{ minHeight: "40vh" ,  overflowX : 'hidden' }} className='mb-5 p-3'>
            <div className={styleMaReservation} style={{ backgroundColor: "rgb(206,221,55)", minHeight: "40vh" }}>
                <div className='container '>
                    <h1 className='text-white'>Ma réservation</h1>
                    <p className='text-white'>Contacter nous pour réserver votre place a bord de la navette, un <button className="btn btn-md text-black maReservationBtn fs-6 shadow m-2" >Navette Premium</button> <button className="btn btn-md text-black maReservationBtn fs-6 shadow m-2"  >Véhicule / Transfert</button> transfert à l'aeroport ou louer un véhicule pour voyager.</p>
                </div>
            </div>
        </div>

    )
}

export default AccueilMaReservation