import React, { useEffect, useState, createRef } from 'react'

//Google Maps
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'


const Map = ({coordinates}) => {
    const [location, setLocation] = useState({lat: 6.28832113880824, lng: -73.14794790092702})
    const mapRef = createRef()

    useEffect(() => {
        if(coordinates){
            const [ lat, lng ] = coordinates.split(',').map(el => Number(el.trim()))
            mapRef.current.panTo({lat: lat, lng: lng})
            setLocation({lat: lat, lng: lng})
        }
    }, [coordinates]) 

    return (
        <GoogleMap
            ref={mapRef}
            defaultZoom={15}
            defaultCenter={{ lat: 6.28832113880824, lng: -73.14794790092702 }}
            center={location}
        >
            <Marker position={location} />
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(Map)
)
