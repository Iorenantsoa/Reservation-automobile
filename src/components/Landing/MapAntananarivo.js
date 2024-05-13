import React, { useMemo } from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api"

const MapAntananarivo = () => {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    return (
        <div className="col-lg-6 col-md-6 col-sm-10 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                    <h3>Antananarivo</h3>
                </div>
                <div>
                    <GoogleMap
                        zoom={10}
                        center={center}
                        mapContainerClassName="map-container"

                    >
                        <Marker position={center} />
                    </GoogleMap>
                </div>

            </div>
        </div>

    )
}

export default MapAntananarivo