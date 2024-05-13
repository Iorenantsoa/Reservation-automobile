import React, { useState, useRef } from 'react';

const NavettePremiumCarEco = () => {
    const buttonRefs = useRef([]);
    const [buttonStates, setButtonStates] = useState(Array(23).fill(false)); // Initialisez un tableau d'états avec 23 éléments à false
    

    const handleTakePlace = (e, buttonIndex) => {
        e.preventDefault();
        const newButtonStates = [...buttonStates]; // Créez une copie du tableau d'états actuel
        newButtonStates[buttonIndex] = !newButtonStates[buttonIndex]; // Inversez l'état du bouton
        setButtonStates(newButtonStates); // Mettez à jour le tableau d'états
    };

    const generateSeatButtons = (start, end) => {
        const buttons = [];

        for (let i = start; i <= end; i++) {
            const buttonClass = buttonStates[i] ? 'btn btn-success me-1 ms-1' : 'btn btn-info me-1 ms-1'; // Déterminez la classe du bouton en fonction de l'état

            buttons.push(
                <button
                    ref={(ref) => (buttonRefs.current[i] = ref)}
                    key={i}
                    onClick={(e) => handleTakePlace(e, i)}
                    className={buttonClass}
                    style={{ height: "50px", width: '60px', border: '1px black solid' }}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <center>Choisissez votre place</center>
                <div className='mt-2 d-flex justify-content-center'> {/* Réduction de la marge ici */}
                    <div className="d-flex flex-column pe-0 ps-3" style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "60px 10px 10px 60px " }}>
                        <div className='d-flex p-1 m-1 mb-0 '>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(1, 2)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(3, 4)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(7, 8)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(11, 12)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(15, 16)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(19, 20)}
                            </div>
                        </div>

                        <div className='d-flex p-1 m-1 mt-2'>
                            <div className='d-flex flex-column ' style={{ opacity: 0, display: "none" }} >
                                {generateSeatButtons(0, 0)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(5, 6)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(9, 10)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(13, 14)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(17, 18)}
                            </div>
                            <div className='d-flex flex-column'>
                                {generateSeatButtons(21, 22)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavettePremiumCarEco;
