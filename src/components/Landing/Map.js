import React from 'react'
import { useLoadScript } from "@react-google-maps/api"
import MapAntananarivo from './MapAntananarivo';
// import MapAntsirabe from './MapAntsirabe';

const Map = () => {
  const { isLoaded } = useLoadScript({
    GoogleMapsApiKey: "AIzaSyA3z1WtMhWG_02F1N7NF4TpEYItgb4-YDc"
  });
  if (!isLoaded) {
    return (
      <div className=" container d-flex pt-5 justify-content-center align-items-center">
        Loading...
      </div>);
  }

  return (
    <div className="container row">
      <MapAntananarivo />
      {/* <MapAntsirabe /> */}
    </div>

  )
}

export default Map


// function Maps (){
//   const center = useMemo(()=>({lat:44 , lng : -80}) , []);
//   return(
//     <GoogleMap
//         zoom ={10}
//         center = {center}
//         mapContainerClassName = "map-container"
//     >
//       <Marker position = {center} />
//     </GoogleMap>
//   )
// }