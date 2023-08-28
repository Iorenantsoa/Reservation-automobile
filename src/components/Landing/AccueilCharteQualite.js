import React from 'react';

import { AiFillDashboard, AiFillClockCircle } from "react-icons/ai";
import { VscReferences } from "react-icons/vsc";
import { GiTrophyCup } from "react-icons/gi";
import imageChartQualite from "../../images/accueil-charte-qualite.jpg"

const AccueilCharteQualite = () => {
    return (
        <div className='container pt-5'>
            <div className=' row  mt-3 ' style={{ minHeight: "60vh" }}>
                <div className='col-lg-7 col-md-6 col-sm-10'>
                    <div className='mb-4'>
                        <h1 className='mb-3'>Charte de Qualité</h1>
                        <p>Dans un milieu fortement concurrentiel, notre challenge chaque année consiste à fournir à nos clients des prestations performantes, fiables et en adéquation avec leurs attentes.</p>
                        <p>Au nom de notre équipe, nous nous engageons à démontrer en permanence notre savoir-faire et à mettre en pratique les règles suivantes :</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-10 mb-3'>
                            <h3><AiFillDashboard /> Sécurité</h3>
                            <p>Une politique de sécurité très stricte : « La sécurité avant tout ». Nos chauffeurs sont hautement qualifiés et formés sur des véhicules soigneusement révisés.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-10 mb-3'>
                            <h3><VscReferences /> Référence</h3>
                            <p>Nous améliorons constamment nos services et méthodes de travail pour satisfaire nos clients et rester le numéro 1.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-10 mb-3'>
                            <h3><AiFillClockCircle /> Ponctualité</h3>
                            <p>Nous respectons les horaires que nous avons mis en place à tous les niveaux de notre organisation.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-10 mb-3'>
                            <h3><GiTrophyCup /> Excellence</h3>
                            <p>Nous mettons toute notre énergie à réussir et satisfaire nos clients. Vous méritez le meilleur.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center '>
                    <img className="w-100  h-75" style={{ ojectFit: "cover", objectPosition: "cover"}} src={imageChartQualite} alt="Accueil charte qualité" />
                </div>
            </div>
        </div>
    )
}

export default AccueilCharteQualite