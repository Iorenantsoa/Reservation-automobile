import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { URI } from '../../utils/API'
import NavettePremiumCarEco from './NavettePremiumCarEco'

const NavettePremiumFormContainer = () => {


    const [messageAlert, setMessageAlert] = useState({ error: null, success: null })
    // const [success, setSuccess] = useState(null)
    const [selectedTarif, setSelectedTarif] = useState('Eco');
    const [selectedFormule, setSelectedFormule] = useState('Simple');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dateDepart, setDateDepart] = useState('')
    const [trajet, setTrajet] = useState('---')
    const [passagers, setPassagers] = useState('')
    const [message, setMessage] = useState('')


    const resetForm = () => {
        setSelectedFormule('Simple')
        setSelectedTarif('Eco')
        setName('')
        setPhone('')
        setEmail('')
        setDateDepart('')
        setTrajet('---')
        setPassagers('')
        setMessage('')
    }

    const handleFormuleChange = (e) => {
        setSelectedFormule(e.target.value);
    };

    const handleTarifChange = (e) => {
        setSelectedTarif(e.target.value);
    };
    const handleTrajetChange = e => {
        setTrajet(e.target.value);
        console.log(trajet)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlephoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleDateDepartChange = (e) => {
        setDateDepart(e.target.value)
    }
    const handlePassagersChange = (e) => {
        setPassagers(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() !== "" && phone.trim() !== "" && dateDepart.trim() !== "" && passagers.trim() !== "" && message.trim() !== "") {
            const dateDepartObj = new Date(dateDepart)
            const dateActuelle = new Date()

            if (trajet.trim() !== "" && trajet.trim() !== "---") {
                if (dateDepartObj <= dateActuelle) {
                    setMessageAlert({ error: "Veuillez entrer une date posterieur", success: null })
                } else {
                    axios.post(`${URI}/api/addNavettePremiuemReservation/`,
                        {
                            name,
                            phone,
                            email,
                            dateDepart,
                            trajet,
                            tarif: selectedTarif,
                            formule: selectedFormule,
                            passagers,
                            message
                        }
                    ).then(response => {
                        setMessageAlert({ success: "Réservation ajoutée avec succès", error: null });
                        resetForm()
                    }).catch(err => {
                        setMessageAlert({ error: err.response.data, success: null })
                    })
                }

            } else {
                setMessageAlert({ error: "veuillez completer bien la trajet", success: null })
            }

        } else {
            setMessageAlert({ error: "Veuillez completer tous les champs", success: null });
        }
    }
    useEffect(() => {
        if (messageAlert.error) {
            const timer = setTimeout(() => {
                setMessageAlert({ error: null })
            }, 10000);

            return () => {
                clearTimeout(timer)
            }
        }
        if (messageAlert.success) {
            const timer = setTimeout(() => {
                setMessageAlert({ success: null })
            }, 10000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [messageAlert])


    return (
        <div className='col-lg-8 col-md-7 col-sm-10'>
            {messageAlert.error && <p className="m-0 mt-3 text-center text-white bg-danger">{messageAlert.error}  </p>}
            {messageAlert.success && <p className="m-0 mt-3 text-center text-white bg-success">{messageAlert.success}</p>}
            <form >
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre nom* </label><br />
                        <input className="form-control" htmlFor="name" id="name" type="text" value={name} onChange={handleNameChange} /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre numéro de téléphone*</label><br />
                        <input className="form-control" name="phone" id="phone" type="text" value={phone} onChange={handlephoneChange} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre Email</label><br />
                        <input className="form-control" name="email" id="email" type="email" value={email} onChange={handleEmailChange} /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Date de départ*</label><br />
                        <input className="form-control" name="dateDepart" id="dateDepart" type="date" value={dateDepart} onChange={handleDateDepartChange} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label htmlFor="tarjetEtHoraireDepart">Trajet et horaire de départ*</label>
                        <select className="form-control" name='trajet' value={trajet} onChange={handleTrajetChange}>
                            <option value="---" >---</option>
                            <option value="Tana vers Antsirabe : 5h">Tana vers Antsirabe : 5h</option>
                            <option value="Tana vers Antsirabe : 7h">Tana vers Antsirabe : 7h</option>
                            <option value="Tana vers Antsirabe : 9h">Tana vers Antsirabe : 9h</option>
                            <option value="Tana vers Antsirabe : 13h">Tana vers Antsirabe : 13h</option>
                            <option value="Tana vers Antsirabe : 15h">Tana vers Antsirabe : 15h</option>
                            <option value=' '></option>
                            <option value="Antsirabe vers Tana : 5h">Antsirabe vers Tana : 5h</option>
                            <option value="Antsirabe vers Tana : 7h">Antsirabe vers Tana : 7h</option>
                            <option value="Antsirabe vers Tana : 9h">Antsirabe vers Tana : 9h</option>
                            <option value="Antsirabe vers Tana : 13h">Antsirabe vers Tana : 13h</option>
                            <option value="Antsirabe vers Tana : 15h">Antsirabe vers Tana : 15h</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label htmlFor="tarif">Tarif*</label><br />
                        <label className="m-2">
                            <input type="radio" name="tarif" value="Eco" checked={selectedTarif === 'Eco'} onChange={handleTarifChange} /> Eco
                        </label>
                        <label>
                            <input type="radio" name="tarif" value="Standard" checked={selectedTarif === 'Standard'} onChange={handleTarifChange} /> Standard
                        </label>
                        <label className="m-2">
                            <input type="radio" name="tarif" value="Gold" checked={selectedTarif === 'Gold'} onChange={handleTarifChange} /> Gold
                        </label><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label htmlFor="formules">Formules*</label><br />
                        <label className="m-2">
                            <input type="radio" name="formule" value="Simple" checked={selectedFormule === 'Simple'} onChange={handleFormuleChange} /> Simple
                        </label>
                        <label className="m-2">
                            <input type="radio" name="formule" value="Pack" checked={selectedFormule === 'Pack'}
                                onChange={handleFormuleChange} /> Pack
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label htmlFor="passagers">Passagers*</label>
                        <div className="m-3 d-flex flex-row  align-items-center justify-content-center">
                            <input className="form-control" type="number" name="passagers" value={passagers} onChange={handlePassagersChange} />
                        </div>
                    </div>
                </div>
                <div>
                    <NavettePremiumCarEco/>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="passagers">Votre Message*</label><br />
                        <textarea name='message' className="form-control" style={{ height: "300px", width: "100%" }} value={message} onChange={handleMessageChange} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <input className="navettePremiumBtn btn btn-lg  col-6" type='submit'  onClick={handleSubmit} value="Envoyer" />
                    </div>
                </div>
            </form>

            <div>
                <div className="m-3">
                    <p style={{ fontStyle: "italic" }}>Droits de bagages : 1 bagage normal (23 kg) + 1 bagage à main (10 kg).<br />Excédent tarifé.</p>
                </div>
                <div className="m-3">
                    <h3>Lieu de pause sur la route</h3>
                    <p>A Antsirabe ou à BEHENJY apres 1H30mn de route de Tana et 2H30mn de route d’Antsirabe.</p>
                </div>
                <div className="m-3">
                    <h3>Annulations</h3>
                    <p>En cas d’annulation, nous vous remercions de nous prévenir au plus tard 24h avant la date de votre départ. Au-delà de 24h, nous sommes dans l’obligation de vous facturer 50% du montant total de vos réservations. Dans le cas où vous ne vous présentez pas au moment de votre départ, nous sommes dans l’obligation de vous facturer le montant total de vos réservations.</p>
                </div>
                <div className="m-3">
                    <h3>Retards</h3>
                    <p>Si vous ratez la navette à cause d’un retard, vous devrez payer le montant total de vos réservations. </p>

                </div>
            </div>
        </div>
    )
}

export default NavettePremiumFormContainer