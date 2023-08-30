import React from 'react'

const ContactRightContainer = () => {
    return (
        <div className='col-lg-4 col-md-5 col-sm-10  d-flex flex-column justify-content-start align-items-center ' >
            <div className="conteneur1  mb-3 ">
                <h4>Transferts et location de véhicule</h4>
                <div className="mt-3">
                    <p className='fs-6 '><span className ="fs-6 " style={{fontWeight : "700"}}>Tél (Telma) :</span> +261 34 07 777 90</p>
                    <p className='fs-6 '><span className ="fs-6 " style={{fontWeight : "700"}}>Tél (Orange) :</span> +261 32 05 777 90</p>
                    <p className='fs-6 '><span className ="fs-6 " style={{fontWeight : "700"}}>Tél (Airtel) :</span> +261 33 02 777 90</p>
                    <p className='fs-6 '><span className ="fs-6 " style={{fontWeight : "700"}}>Email :</span> contact@gasycar.com</p>
                    <p className='fs-6 '><span className ="fs-6 " style={{fontWeight : "700"}}>Facebook :</span> {"<"}GasyCar{"/>"}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactRightContainer