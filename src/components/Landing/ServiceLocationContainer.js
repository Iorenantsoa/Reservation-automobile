import React from 'react'
import ServiceLocationFormContainer from './ServiceLocationFormContainer'
import ServiceLocationRightContainer from './ServiceLocationRightContainer'

const ServiceLocationContainer = () => {
  return (
    <div className="mt-5 mb-5">
            <div className='row '>
                <ServiceLocationFormContainer/>
                <ServiceLocationRightContainer/>
            </div>
    </div>
  )
}

export default ServiceLocationContainer