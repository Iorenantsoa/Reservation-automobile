import React from 'react'
import ContactFormContainer from './ContactFormContainer'
import ContactRightContainer from './ContactRightContainer'

const ContactContainer = () => {
  return (
    <div className="mt-5 mb-5">
      <div className='row '>
        <ContactFormContainer />
        <ContactRightContainer />
      </div>
    </div>
  )
}

export default ContactContainer 