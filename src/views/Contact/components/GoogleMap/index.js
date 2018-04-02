import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './styles.json';

const Map = withScriptjs(withGoogleMap(({ isMarkerShown, location, styles }) => (
  <GoogleMap defaultZoom={10} defaultCenter={location} defaultOptions={{ styles }}>
    {isMarkerShown && <Marker position={location} />}
  </GoogleMap>
)));

const ConnectedMap = () => (
  <Map
    isMarkerShown
    location={{ lat: 52.271354, lng: 17.007668 }}
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    styles={mapStyles}
  />
);

export default ConnectedMap;
