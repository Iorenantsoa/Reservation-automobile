import React from 'react'

const NavettePremiumFormContainer = () => {
    return (
        <div className='col-lg-8 col-md-7 col-sm-10'>
            <form>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre nom*</label><br />
                        <input className="form-control" for="name" id="name" type="text" /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre numéro de téléphone*</label><br />
                        <input name="phone" id="phone" type="text" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre Email</label><br />
                        <input name="email" id="email" type="email" /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Date de départ*</label><br />
                        <input name="dateDepart" id="dateDepart" type="date" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label for="tarjetEtHoraireDepart">Trajet et horaire de départ*</label>
                        <select >
                            <option>---</option>
                            <option>Tana vers Antsirabe : 5h</option>
                            <option>Tana vers Antsirabe : 7h</option>
                            <option>Tana vers Antsirabe : 9h</option>
                            <option>Tana vers Antsirabe : 13h</option>
                            <option>Tana vers Antsirabe : 15h</option>
                            <option></option>
                            <option>Antsirabe vers Tana : 5h</option>
                            <option>Antsirabe vers Tana : 7h</option>
                            <option>Antsirabe vers Tana : 9h</option>
                            <option>Antsirabe vers Tana : 13h</option>
                            <option>Antsirabe vers Tana : 15h</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label for="tarif">Tarif*</label><br />
                        <label className="m-2">
                            <input type="radio" name="tarif" value="Eco" checked /> Eco
                        </label>
                        <label>
                            <input type="radio" name="tarif" value="Standard" /> Standard
                        </label>
                        <label className="m-2">
                            <input type="radio" name="tarif" value="Gold" /> Gold
                        </label><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label for="formules">Formules*</label><br />
                        <label className="m-2">
                            <input type="radio" name="formule" value="Eco" checked /> Simple
                        </label>
                        <label className="m-2">
                            <input type="radio" name="formule" value="Standard" /> Pack
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label for="passagers">Passagers*</label><br />
                        <input type="number" name="passagerEnfants" /> <label>enfants</label>
                        <input type="number" name="passagerAdultes" /> <label>adultes</label><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label for="passagers">Votre Message*</label><br />
                        <textarea style={{ height: "300px", width: "100%" }} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <button className="navettePremiumBtn btn btn-lg btn-primary">Envoyer</button>
                    </div>
                </div>
            </form>

            <div>
                <div className="m-3">
                    <p>Droits de bagages : 1 bagage normal (23 kg) + 1 bagage à main (10 kg).<br />Excédent tarifé.</p>
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
                    <p>Si vous ratez la navette à cause d’un retard, vous devrez payer le montant total de vos réservations.

                    </p>

                </div>
                <div className="m-3">

                </div>
            </div>
        </div>
    )
}

export default NavettePremiumFormContainer