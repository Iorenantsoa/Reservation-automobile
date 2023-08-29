import React, { useRef, useEffect, useState } from 'react'

const AccueilTemoignage = () => {
    const [isAfficher, setIsAfficher] = useState(false)
    const [elementPositionTop, setElementPositionTop] = useState(null)
    const [elementHeight, setElementHeight] = useState(null)

    const elementRef = useRef(null)

    useEffect(() => {

        const element = elementRef.current

        if (element) {
            const rect = element.getBoundingClientRect()
            setElementPositionTop(rect.top)
            setElementHeight(rect.height)
        }
        const topvalue = elementPositionTop + window.scrollY - (window.innerHeight)/2


        const handleScroll = () => {

            if (window.scrollY < topvalue && isAfficher) {
                setIsAfficher(false)
            } else if (window.scrollY > topvalue && !isAfficher) {
                setIsAfficher(true)
            }
        } 
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [elementPositionTop, elementHeight, isAfficher])

    const styleTemoignage = !isAfficher ? 'mb-5 styleHideTemoignage' : 'mb-5 styleShowTemoignage'

    return (
        <div ref={elementRef} >
            <div className={styleTemoignage}>
                <div className='container mt-5 '>
                    <div className='container mt-5' >
                        <center >
                            <div className=' d-flex flex-column justify-content-center align-items-center ' >
                                <h1 className='bold'>Nos clients témoignent</h1>
                            </div>
                        </center>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">BRITNEY DAWKINGS</h5>
                                    <p className="card-text">Voyage très agréable, chauffeur au top! Ma sœur a réellement voyage en toute quiétude...Merci Gasy Car. Je recommande vivement 😊</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">VALISOA RANAIOARIMALALA</h5>
                                    <p className="card-text">J'ai envoyé des colis trois fois! SUPER SERVICE. Les colis arrivent dans l’état d'envoi, les destinataires sont notifiés quand les colis sont là, et les prix sont à défi...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">MIHAJANIAINA RAJOHNSON</h5>
                                    <p className="card-text">Impeccable, essayez et vous verrez 😊. Je recommande sans hésitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">RAKOTONDRAJAO NOMENJANAHARY ZO</h5>
                                    <p className="card-text">Mankahery anareo ekipan'ny Gasicar VIP hatrany nanana fahasahiana sy finiavana nampivoatra ny kalitaon'ny fitanteram-bahoaka Tompoko...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">RAYMOND PINOIT</h5>
                                    <p className="card-text">Le sérieux et le professionnalisme du personnel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">ABDOUL AKBARALI</h5>
                                    <p className="card-text">Aucune critique à formuler. J'ai toujours été satisfait des services que vous offrez.Accueil, gentillesse, sécurité et professionnalisme. Bravo. Je recommande...</p>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">MIHAJA RAJERISON</h5>
                                    <p className="card-text">Professionnel, innovant, propre et calme. Longue vie à GasyCar VIP.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">FREDERICK BOUCHARD</h5>
                                    <p className="card-text">Professionnel, sécuritaire, très à l’écoute. Un service impeccable. Merci pour tout. Frederick du Canada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">MANOA RALANTOMANANA</h5>
                                    <p className="card-text">Afapo t@ dia teny an-dalana. Indro kely: ni commande petit dejeuner "complet" izahay tao Ambatolampy vao niainga taty Tana. Tonga ilay izy: Mofo + confiture + boisson chaude + atody + croissant + petit paté. Tena gaga sy talanjona hoe "wouaouhh", zany ka "complet". Rehefa handoha vola teo @ caisse nefa dia hay kay ilay croissant sy petit paté tsy compris tao anatin'ilay izy. kanefa tsy no-commandenay akory... Tsy nampaninona anay ny nadoa ilay vola fa kosa mba hafatra ho @ilay olona ao hoe mila confirmena tsara ny commande fa sao manahirana. Sinon, Chapeau à vous GasyCar VIP. Mahafinaritra ny ezaka.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">HANITRA RAKOTOMALALA</h5>
                                    <p className="card-text">Professionnel, suis toujours satisfaite de vos services mais attends des nouvelles horizons comme ligne Antsirabe - Morondava ou Antsirane - Tamatave, on peut toujours rever 😊!</p>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">MANUELLA RAMANANKASINA</h5>
                                    <p className="card-text">Une équipe professionnelle. Parfait. Rien à redire. Je recommande.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">FLORIAN MICHEL RAKOTO</h5>
                                    <p className="card-text">Le Professionnalisme! Merci!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">BRITNEY DAWKINGS</h5>
                                    <p className="card-text">Love GasyCar VIP! It's a favorite among the Peace Corps Community. Fast friendly, and efficient.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">THIERRY MINETO</h5>
                                    <p className="card-text">Service de transport très compétitif à Madagascar.....avec un sérieux, de la rigueur, ainsi qu'une maîtrise de la conduite et de la ponctualité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccueilTemoignage