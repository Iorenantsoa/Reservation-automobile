import React from 'react';
import chaletRoses from '../../images/chalet-des-roses-300x225.jpg';
import residenceSociale from '../../images/residence-sociale-300x225.jpg'


const Footer = () => {
    return (
        <div className="container-fluid shadow " id="footer-container" style={{  backgroundColor: "rgb(2,114,130)" }} >
            <div className='container d-flex flex-column  pt-5 '>
                <div className='row '> 
                    <div className='col row '>
                        <h4 className='footerTitle'>Antananarivo</h4>
                        <div className='col'>
                            <img className="rounded " src={chaletRoses} alt="..." />
                        </div>
                        <div className=' col mt-4'>
                            <p className='footerParagraphe'>Départs quotidiens</p>
                            <p className='footerParagraphe'>Le Châlet des Roses,Antsahavola</p>
                            <p className='footerParagraphe'>5 départs/jour : <br /> 7h, 9h, 11h, 14h et 16h.</p>
                        </div>
                    </div>
                    <div className='col row'>
                        <h4 className='footerTitle'>Antsirabe</h4>
                        <div className='col'>
                            <img className=" rounded " src={residenceSociale} alt="..." />
                        </div>
                        <div className=' col mt-4' >
                            <p className='footerParagraphe'>Départs quotidiens</p>
                            <p className='footerParagraphe'>La Résidence des Hauts-plateaux, Maison de Retraite</p>
                            <p className='footerParagraphe'>6 départs/jour : <br /> 5h, 7h, 9h, 11h, 13h et 15h.</p>
                        </div>
                    </div>
                </div>
                    <hr />
                <div className='d-flex justify-content-center ' id= 'bottomFooter'>
                    <p className='copyrightFooter fs-6'>© 2023 GASYkAR VIP Tous droits réservés / Contact / dev Undefined</p>
                </div>
            </div>

        </div>
    )
}

export default Footer