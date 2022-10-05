import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'


const Map = ({setCoordinates, setBounds, coordinates}) => {


    const defaultProps = {
        center: {
          lat:  51.5007,
          lng: -0.1246
        },
        zoom: 14
      };


  return (
    <div className='map-container'>
       <GoogleMapReact
       bootstrapURLKeys={{key: process.env.REACT_APP_MAP_API_KEY,}}
       defaultCenter={defaultProps.center}
       center={defaultProps.center}
       defaultZoom={defaultProps.zoom}
    //    margin={[50, 50, 50, 50]}
    //    options={''}
       onChange={(e) => {
        console.log(e)
        setCoordinates({lat: e.center.lat, lng: e.center.lng})
       }}
    //    onChildClick={''}
    //    onChildMouseEnter={this.onChildMouseEnter}
    //    onChildMouseLeave={this.onChildMouseLeave}

       >

       </GoogleMapReact>
    </div>
  )
}

export default Map