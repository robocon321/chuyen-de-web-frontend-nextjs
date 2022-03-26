import React from 'react'
import GoogleMapReact from 'google-map-react';

import styles from './Map.module.css';

const AnyReactComponent = ({ text }) => <div className={styles.mark}><p>{text}</p></div>;

const Map = (props) => {
  return (
    <div className={styles.map}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBZc3RNFRm_YdlcOcw12XEA0TRyXx-SInY'}}
      defaultCenter={{
      lat: 10.87,
      lng: 106.78
    }}
      defaultZoom={11}
      yesIWantToUseGoogleMapApiInternals
    >
      <AnyReactComponent
        lat={10.87}
        lng={106.78}
        text='Trụ sở chính'
      />    
    </GoogleMapReact>
  </div>  )
}

export default Map;