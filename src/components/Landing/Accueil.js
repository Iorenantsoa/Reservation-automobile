import React from 'react'
import AccueilActualiteInformation from './AccueilActualiteInformation'
import AccueilCharteQualite from './AccueilCharteQualite'
import AccueilMaReservation from './AccueilMaReservation'
import AccueilNosEngagement from './AccueilNosEngagement'
import AccueilSolutionDeplacement from './AccueilSolutionDeplacement'
import AccueilTarifNavette from './AccueilTarifNavette'
import AccueilTemoignage from './AccueilTemoignage'
import Banner from './Banner'

const Accueil = () => {
  return (
    <div className='container-accueil' >
        <Banner/>
        <AccueilSolutionDeplacement/>
        <AccueilTarifNavette/>
        <AccueilCharteQualite/>
        <AccueilNosEngagement/>
        <AccueilMaReservation/>
        <AccueilActualiteInformation/>
        <AccueilTemoignage/>
    </div>
  )
}

export default Accueil