import React, { useState, useEffect, useRef } from 'react';
import * as m from './SingleTourMapElements';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const SingleTourMap = ({ locations }) => {
  const [state, setState] = useState({
    lng: locations[0][1],
    lat: locations[0][0],
    zoom: 10,
  });
  const mapContainer = useRef(null);

  console.log({ locations });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/cherinpiyumantha/cldsfgjm2004a01p5k1aiq0w0',
      center: [state.lng, state.lat],
      zoom: state.zoom,
      accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`,
      interactive: true,
    });

    locations.map((loc) => {
      new mapboxgl.Marker().setLngLat([loc[1], loc[0]]).addTo(map);
    });
    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat([80.7454282860651, 7.9568286487016735])
    //   .addTo(map);
    // const marker2 = new mapboxgl.Marker()
    //   .setLngLat([80.39608299759368, 8.367229171927566])
    //   .addTo(map);
    // const marker3 = new mapboxgl.Marker()
    //   .setLngLat([81.02622412619165, 7.965733992695349])
    //   .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <>
      <m.MapSection>
        <m.Text color='#222' margin='3rem 0' fontweight='700' fontsize='4.5rem'>
          Tour Map
        </m.Text>
        <m.MapContainer ref={mapContainer} />
      </m.MapSection>
    </>
  );
};

export default SingleTourMap;
