import React from 'react'
import NavettePremiumFormContainer from './NavettePremiumFormContainer'
import NavettePremiumRightContainer from './NavettePremiumRightContainer'

const NavettePremiumContainer = () => {
    return (
        <div className="m-5">
            <div className='row '>
                <NavettePremiumFormContainer />
                <NavettePremiumRightContainer />
            </div>
        </div>
    )
}

export default NavettePremiumContainer