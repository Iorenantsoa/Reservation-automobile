import React, {useState} from 'react'

const ServiceLocationFormContainer = () => {
    const [selectedMotif, setSelectedMotif] = useState('LocationVehicule');

    const handleMotifChange = (e) => {
        setSelectedMotif(e.target.value);
    };
    return (
        <div className='col-lg-8 col-md-7 col-sm-10'>
            <form>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre nom*</label><br />
                        <input className="form-control" htmlFor="name" id="name" type="text" /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre numéro de téléphone*</label><br />
                        <input className="form-control" name="phone" id="phone" type="text" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Votre Email</label><br />
                        <input className="form-control" name="email" id="email" type="email" /><br />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <label>Date de départ*</label><br />
                        <input className="form-control" name="dateLocation" id="dateLocation" type="date" /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10"> 
                        <label className="m-2">
                            <input type="radio" name="motif" value="LocationVehicule" checked={selectedMotif === 'LocationVehicule'} onChange={handleMotifChange} /> Location de véhicule
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10"> 
                        <label>
                            <input type="radio" name="motif" value="TransfertAeroport" checked={selectedMotif === 'TransfertAeroport'} onChange={handleMotifChange} /> Transfert Aéroport
                        </label> 
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label for="passagers">Votre Message*</label><br />
                        <textarea className="form-control" style={{ height: "300px", width: "100%" }} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <input className="navettePremiumBtn btn btn-lg  col-6" type='submit' value="Envoyer" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ServiceLocationFormContainer