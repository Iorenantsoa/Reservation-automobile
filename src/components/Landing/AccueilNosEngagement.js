import React, { useRef, useState, useEffect } from 'react'

const AccueilNosEngagement = () => {
    const elementRef = useRef(null)
    const [isAfficher, setIsAfficher] = useState(false)
    const [elementPositionTop, setElementPositionTop] = useState(null)
    const [elementHeight, setElementHeight] = useState(null)

    useEffect(() => {
        const element = elementRef.current

        if (element) {
            const rect = element.getBoundingClientRect()
            setElementPositionTop(rect.top)
            setElementHeight(rect.height)
        }

        const positionTop = elementPositionTop + window.scrollY - (window.innerHeight) / 2
        const handleScroll = () => {
            if (window.scrollY > positionTop && !isAfficher) {
                setIsAfficher(true)
            } else if (window.scrollY < positionTop && isAfficher) {
                setIsAfficher(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [elementPositionTop , elementHeight , isAfficher])

    const styleNosEngagement = !isAfficher ? "container-fluid d-flex flex-column align-items-center justify-content-center shadow styleHideNosEngagement": "container-fluid   d-flex flex-column align-items-center justify-content-center shadow styleShowNosEngagement" 

    return (
        <div ref={elementRef} style={{minHeight: "40vh" }} className='mt-5 p-3 '>
            <div className={styleNosEngagement} style={{ backgroundColor: "rgb(246,246,246)", minHeight: "40vh" }}>
                <div className='container col-lg-10'>
                    <h3>Nos engagements</h3>
                    <p>Fort de nos services de qualités, notre entreprise est leader dans le convoyage de personnes. Avec GasyKar VIP, les chauffeurs sont tous hautement qualifiées,expérimentés et tous formés en conduite défensive afin de voyager dans la tranquillité et en toute quiétude. En choisissant nos services, vous garandissez le succè de vos voyages tout en affirmant ...</p>
                    <button className='btn btn-sm btn-outline-secondary'>Nos engagements</button>
                </div>
            </div>
        </div>

    )
}

export default AccueilNosEngagement