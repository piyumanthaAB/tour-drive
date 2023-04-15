import React, { useEffect, useState, useRef } from 'react';
import * as f from './SingleRequestElements';
import Label from '../shared/Form Elements/Label';
import TextField from '../shared/Form Elements/TextField';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import TextArea from '../shared/Form Elements/TextArea';
import toast from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';

const SingleRequest = ({ request }) => {
  const [state, setState] = useState({
    lng: request.coordinates.long,
    lat: request.coordinates.lat,
    zoom: 15,
  });
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/cherinpiyumantha/cldsfgjm2004a01p5k1aiq0w0',
      style: 'mapbox://styles/cherinpiyumantha/clgih5ylw006801pj91yv3tmp',
      center: [state.lng, state.lat],
      zoom: state.zoom,
      accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`,
      interactive: true,
    });

    // locations.map((loc) => {
    //   new mapboxgl.Marker().setLngLat([loc[1], loc[0]]).addTo(map);
    // });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([state.lng, state.lat])
      .addTo(map);
    // const marker2 = new mapboxgl.Marker()
    //   .setLngLat([80.39608299759368, 8.367229171927566])
    //   .addTo(map);
    // const marker3 = new mapboxgl.Marker()
    //   .setLngLat([81.02622412619165, 7.965733992695349])
    //   .addTo(map);

    return () => map.remove();
  }, []);

  const onMarkAsComplete = async (e) => {
    e.preventDefault();

    const formData = {
      status: 'solved',
    };

    await toast.promise(
      submitForm(`/api/v1/emergencies/${request._id}`, formData, 'patch', {}),
      {
        loading: 'Updating request status...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success';
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      }
    );
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>View Emergency Request</f.FormTitle>
        <f.MapContainer ref={mapContainer} />
        <f.Form onSubmit={onMarkAsComplete}>
          <f.FormGroup>
            <Label labelText={"User's name"} />
            <TextField
              value={request.user?.name || 'name not availabe'}
              // setValue={setName}
              // placeholder={'Enter tour name here'}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Mobile Number'} />
            <TextField
              value={request.user?.mobile || 'mobile not availabe'}
              // setValue={setName}
              // placeholder={'Enter tour name here'}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Message'} />
            <TextArea
              value={request.message || 'message not availabe'}
              // setValue={setName}
              // placeholder={'Enter tour name here'}
            />
          </f.FormGroup>
          <f.FormGroup></f.FormGroup>
          {/* <f.FormGroup>
            <Label labelText={'Vehicle type'} />
            <TextField
            // value={name}
            // setValue={setName}
            // placeholder={'Enter tour name here'}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Vehicle number'} />
            <TextField
            // value={name}
            // setValue={setName}
            // placeholder={'Enter tour name here'}
            />
          </f.FormGroup> */}
          {/* <f.FormGroup> */}
          <f.SubmitBtn type="submit">Mark as Completed</f.SubmitBtn>
          {/* </f.FormGroup> */}
        </f.Form>
      </f.Container>
    </>
  );
};

export default SingleRequest;
