import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }  from 'react-google-maps';



const MapComponent = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.marker && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

function App() {
  return (
    <>
      <MapComponent 
        marker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3QzhoUs4GVR_lGdpciw92E4VDFYE3EVc&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <h1 style={{ position: `absolute`, right: `8%`, bottom: `8%`, color: `red`, fontStyle: `italic`, fontSize: 88 }}>Mappematics</h1>
    </>
  )
}

export default App;


// API KEY:
// ^v^
// AIzaSyB3QzhoUs4GVR_lGdpciw92E4VDFYE3EVc