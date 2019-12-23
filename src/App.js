import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer }  from 'react-google-maps';

let mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  }
];

const MapComponent = withGoogleMap((props) => {
  const [directions, setDirections] = useState("")
  
  useEffect(() => {
    let google = window.google
    let DirectionsService = new google.maps.DirectionsService();
  
    DirectionsService.route({
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      status === google.maps.DirectionsStatus.OK ? setDirections(result) 
      : console.error(`error fetching directions ${result}`);
    })
  
  }, [])
  
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 41.8507300, lng: -87.6512600 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {/* {props.marker && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  )
  
})

function App() {

  return (
    <>
      <MapComponent 
        marker={false}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3QzhoUs4GVR_lGdpciw92E4VDFYE3EVc"
        loadingElement={<div style={{ height: `100vh` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `98vh` }} />}
      />
      <h1 style={{ position: `absolute`, right: `8%`, bottom: `8%`, color: `red`, fontStyle: `italic`, fontSize: 88 }}>Mappematics</h1>
    </>
  )
}

export default App;