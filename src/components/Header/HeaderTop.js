import React from 'react'
import { FaEnvelope , FaFacebook  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
const HeaderTop = () => {
    return (
        <div  style={{"backgroundColor":"rgba(0,0,0,0.4)"}} id="navTop">
            <div className='container d-flex justify-content-center pt-2 '>
                <div className='container d-flex  justify-content-between flex-wrap'>
                    <div>
                        <ul className='d-flex justify-content-between flex-wrap ' style={{color:"whitesmoke"}}>
                            <li className='m-2' ><BiPhoneCall/> 0340777790</li>
                            <li className='m-2' ><FaLocationDot/>Ambohimanarina, Antananarivo</li>
                            <li className='m-2' ><FaEnvelope/> contact@gasyCar.com</li>
                            <li className='m-2' ><FaFacebook/> {"<"}GasyCar{"/>"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop 