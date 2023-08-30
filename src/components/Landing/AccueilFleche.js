import React, { useState, useEffect } from 'react'
import {FaArrowUp  } from "react-icons/fa6";

const AccueilFleche = () => {

    const [isAfficher, setIsAfficher] = useState(false)

    useEffect(() => {

        const doubleInnerHeight = window.innerHeight
        const handleScroll = () => {
            if (window.scrollY > doubleInnerHeight && !isAfficher) {
                setIsAfficher(true)
            } else if (window.scrollY < doubleInnerHeight && isAfficher) {
                setIsAfficher(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [isAfficher])

    const StyleFleche = !isAfficher ? 'hideFleche' : 'showFleche'

    return (
        <div className={StyleFleche}>
            <div className='d-flex justify-content-center align-items-center m-0 p-0 fleche'>
                <a href='#navTop' style={{color:"white"}}><FaArrowUp/></a>
            </div> 
        </div>
    )
}

export default AccueilFleche