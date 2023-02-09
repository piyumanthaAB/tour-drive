import React, { useState,useEffect,useRef } from 'react'
import * as m from './SingleTourMapElements';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const SingleTourMap = () => {

    const [state, setState] = useState({
        lng: 2.294717332498816,
        lat: 48.85850419523487,
        zoom: 12
    });
    const mapContainer = useRef(null);
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/cherinpiyumantha/cldsfgjm2004a01p5k1aiq0w0',
            center: [state.lng, state.lat],
            zoom: state.zoom,
            accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`,
            interactive:true
        });
        const marker1 = new mapboxgl.Marker()
            .setLngLat([2.294717332498816,48.85850419523487])
            .addTo(map);
        
        
            
        return () => map.remove();
    }, []);
    return (
        <>
            <m.MapSection>
                <m.Text color='#222' margin='3rem 0' fontweight='700' fontsize='4.5rem' >Tour Map</m.Text>
                <m.MapContainer ref={mapContainer}/>
            </m.MapSection>
        </>
    );
}

export default SingleTourMap