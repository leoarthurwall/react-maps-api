import "../index.css";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

const Map= () => {
  const defaultProps = {
    center: {
      lat: 51.5072,
      lng: 0.1276,
    },
    zoom: 6,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
