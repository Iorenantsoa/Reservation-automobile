import React, {useState , useEffect , useRef} from 'react'
import { FaUserPlus, FaUserCircle, FaUserShield } from "react-icons/fa"


const AccueilTarifNavette = () => {

    const elementRef = useRef(null)
    const [isAfficher , setIsAfficher] =useState(false)
    const [elementPositionTop , setElementPositionTop] = useState(null)
    const [elementHeight , setElementHeight] = useState(null)

    useEffect(()=>{
        const element = elementRef.current

        if(element){
            const rect = element.getBoundingClientRect()
            setElementPositionTop(rect.top)
            setElementHeight(rect.height)
        }
        
        const positionTop = elementPositionTop + window.scrollY - (window.innerHeight) / 2
        const handleScroll = ()=>{
            if (window.scrollY > positionTop && !isAfficher){
                setIsAfficher(true)
            }else if (window.scrollY < positionTop && isAfficher){
                setIsAfficher(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    })

    

    const styleTarifNavette = isAfficher ? "container-fluid  mb-5  styleShowTarifNavette "  : "container-fluid  mb-5  styleHideTarifNavette"

    return (
        <div  ref = {elementRef} className={styleTarifNavette}>
        
            <div className='container mt-5 mb-5' >
                <center >
                    <div className=' d-flex flex-column justify-content-center align-items-center ' >
                        <h1 className='bold'>Tarifs de la navette</h1>
                        <div className='col-lg-7 col-md-6 col-sm-8 mt-2'>
                            <p className='text-center'>Choisissez la catégorie qui vous convient pour votre voyage en Navette premium.</p>
                            <p className='text-center'>**PACK : Inclut une collation sur Behenjy ou Antsirabe + le ramassage ou transfert UNIQUEMENT sur Antsirabe.</p>
                        </div>
                    </div>
                </center>
            </div>
            <div className='container shadow'>
                <div className='row d-flex justify-content-center align-items-center  ' >
                    <div className='col-md-4 p-5 h-auto col-lg-4 col-sm-12 d-flex flex-column align-items-center justify-content-center '  >
                        <h2>Eco</h2>
                        <h1><FaUserCircle /></h1>
                        <p>Ar <span className='fs-1 fw-bolder text-black'>20 000</span>/pers.</p>
                        <p>Véhicule de type Crafter.</p>
                        <p>Pack** à 28 000 Ar.</p>

                        <button className='btn btn-lg btn-outline-info'>RÉSERVER</button>

                    </div>
                    <div className='col-md-4 h-auto p-5 col-lg-4  col-sm-12 d-flex flex-column align-items-center justify-content-center  bg-secondary ' style={{transform:"scale(1 , 1.15 )" , borderRadius:"5px" }}  >
                        <h2 className='text-white'>Gold</h2>
                        <h1 className='text-white'><FaUserShield /></h1>
                        <p className='text-white'>Ar <span className='fs-1 fw-bolder text-white'>40 000</span>/pers.</p>
                        <p className='text-white'>Grand Starex. 2 personnes/rangée</p>
                        <p className='text-white'>Pack** à 48 000 Ar.</p>
                        <button className='btn btn-lg btn-info'>RÉSERVER</button>
                    </div>
                    <div className='col-md-4 p-5 h-auto  col-lg-4  col-sm-12 d-flex flex-column align-items-center justify-content-center ' >
                        <h2>Standard</h2>
                        <h1><FaUserPlus /></h1>
                        <p>Ar <span className='fs-1 fw-bolder text-black'>25 000</span>/pers.</p>
                        <p>Grand Starex. 3 personnes/rangée.</p>
                        <p>Pack** à 33 000 Ar.</p>
                        <button className='btn btn-lg btn-outline-info'>RÉSERVER</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccueilTarifNavette