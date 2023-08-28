import React from 'react';
import navetteEcoAntsirabe from "../../images/navette-eco-antsirabe-370x240.jpg"
import NavetteAmpefy from '../../images/Navette-Ampefy-370x240.jpg'
import locationVoiture from '../../images/location-voiture-370x240.jpg'
import transfertsIvato from '../../images/transferts-ivato-370x240.jpg'
import navettePremiumAntananarivoAntsirabe from '../../images/navette-premium-antananarivo-antsirabe-370x240.jpg';
import portfolioAntsirabe from '../../images/portfolio-antsirabe-370x240.jpg'



const AccueilActualiteInformation = () => {
    return (
        <div className='container mt-5'>
            <div className='container mt-5' >
                <center >
                    <div className=' d-flex flex-column justify-content-center align-items-center ' >
                        <h1 className='bold'>Actualités & informations</h1>
                    </div>
                </center>
            </div>
            <div className=" p-5 row g-4">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={navetteEcoAntsirabe} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Navette Premium entre Antananarivo et Antsirabe – Tarifs 2022</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">31 octobre 2022 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={NavetteAmpefy} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Une navette Gasy’Car VIP pour vos week-end à Ampefy</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">31 octobre 2022 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={locationVoiture} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Location de voiture à Madagascar</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">29 janvier 2019 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={transfertsIvato} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Transfert depuis/vers l’aéroport d’Antananarivo</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">29 janvier 2019 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={navettePremiumAntananarivoAntsirabe} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">La Navette Premium entre Antananarivo et Antsirabe</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">29 janvier 2019 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <img src={portfolioAntsirabe} className="card-img-top" alt="..." style={{objectFit:"cover",objectPosition:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">Portfolio Antsirabe</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">12 octobre 2018 Gasy'Car VIP.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5' >
                <center >
                    <div className=' d-flex flex-column justify-content-center align-items-center ' >
                        <button className='btn btn-lg shadow text-white btnAccueilVoirTousArticles' >VOIR TOUS LES ARTICLES</button>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default AccueilActualiteInformation