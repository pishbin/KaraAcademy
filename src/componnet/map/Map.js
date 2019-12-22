import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';


const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12

  })
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoibnBiOTgiLCJhIjoiY2s0YjVjNWNjMGE0dzNlcXFkNW45NWwwbSJ9.X2z-GTmU_fEQcKWBHAaqLA"
      mapStyle="mapbox://styles/npb98/ck4b8eli80hmg1crirqrandrf"
    />
  )
}

export default Map;

// width: "400px",
        // height: "400px",
        // latitude: 35.69439,
        // longitude: 51.42151,
        // zoom: 8
