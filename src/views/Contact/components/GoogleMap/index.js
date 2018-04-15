import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './styles.json';

const Map = withScriptjs(withGoogleMap(({
  isMarkerShown, centerLocation, markerLocations, styles
}) => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={centerLocation}
    defaultOptions={{ disableDefaultUI: true, styles }}
  >
    {isMarkerShown && markerLocations.map(location => <Marker position={location} />)}
  </GoogleMap>
)));

const ConnectedMap = () => (
  <Map
    isMarkerShown
    markerLocations={[{ lat: 52.271354, lng: 17.007668 }, { lat: 50.070521, lng: 19.93884 }]}
    centerLocation={{ lat: 51.93273, lng: 19.175577 }}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA41MS-4ke4fZCjrY1T7nTQENgOblP8jUc&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    styles={mapStyles}
  />
);

export default ConnectedMap;
