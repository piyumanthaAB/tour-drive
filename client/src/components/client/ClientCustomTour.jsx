import React, { useState } from 'react';
import * as c from './ClientCustomTourElements';
import Label from '../../components/shared/Form Elements/Label';
import TextField from '../../components/shared/Form Elements/TextField';
import DropDown from '../../components/shared/Form Elements/DropDown';
import TextArea from '../shared/Form Elements/TextArea';
import toast from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';
import ListCheckBox from '../shared/Form Elements/ListCheckBox';

const ClientCustomTour = ({ customTourLocations }) => {
  const [selectedCity, setSelectedCity] = useState(0);

  const [customrSelectedLocations, setCustomrSelectedLocations] = [];

  const availableCategory = [
    'hiking',
    'camping',
    'Pilgrimage',
    'traditional excursion',
  ];

  const availableVehicle = [
    'Car (economy 4 Passengers 2 bags)',
    'car (standard 5 Passengers 3 bags)',
    'car (Premium 5 passengers 4 bags)',
    'SUV (Compact 5 passengers 3 bags)',
    'SUV (Standard 5 passengers 4 bags)',
    'SUV (Premium 6 passengers 5 bags)',
    'Minivan (7-8 passengers 5 bags)',
    'van (8-12 passengers 8 bags)',
  ];

  const availableTypes = ['Budget', 'Standard', 'Premium', 'Luxury'];

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [highlights, setHighlights] = useState('');
  // const [locations, setLocations] = useState("");
  const [tourType, setTourType] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('vehicle', vehicle);
    formData.append('duration', duration);
    formData.append('description', description);
    formData.append('highlights', highlights);
    // formData.append("location", locations);
    formData.append('tourType', tourType);

    console.log(formData, 'form data...............');

    for (const file of galleryImages) {
      formData.append('galleryImg', file);
    }

    await toast.promise(
      submitForm('/api/v1/custom-tours', formData, 'post', headers),
      {
        loading: 'Adding Custom Tour...',
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

  const handleGalleryImg = (e) => {
    setGalleryImages(e.target.files);
  };

  return (
    <>
      <c.Container>
        <c.FormTitle>Request Custom Tour </c.FormTitle>

        <c.Form onSubmit={onSubmit}>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Tour Start date'} />
              <TextField
                value={name}
                setValue={setName}
                placeholder={'Enter tour start date here'}
              />
            </c.FormGroup>
            <c.FormGroup>
              <Label labelText={'Tour duration'} />
              <TextField
                value={name}
                setValue={setName}
                placeholder={'Enter tour duration'}
              />
            </c.FormGroup>
          </c.Row>

          <c.Row>
            {' '}
            <c.HR />{' '}
          </c.Row>

          <c.Row>
            <c.FormGroup>
              <Label labelText={'Select cities you wish to visit'} />

              <c.CheckBoxListContainer>
                {customTourLocations.map((loc, i) => {
                  return (
                    <c.ListItem
                      selected={selectedCity === i}
                      onClick={() => setSelectedCity(i)}
                      key={i}
                    >
                      {loc.city}
                    </c.ListItem>
                  );
                })}
              </c.CheckBoxListContainer>
              <button>add</button>
            </c.FormGroup>
            <c.FormGroup>
              <Label
                labelText={`Locations you can visit in   ${customTourLocations[selectedCity].city} city`}
              />

              <c.ListItemsContainer>
                {customTourLocations[selectedCity].availableLocations.map(
                  (loc, i) => {
                    return <c.ViewOnlyItem key={i}>{loc}</c.ViewOnlyItem>;
                  }
                )}
              </c.ListItemsContainer>
            </c.FormGroup>
          </c.Row>

          {/* <c.Row>
            <c.FormGroup>
              <c.SubmitBtn type="submit">Submit Request</c.SubmitBtn>
              <c.SubmitBtn color="#333" type="reset">
                Clear
              </c.SubmitBtn>
            </c.FormGroup>
          </c.Row> */}
        </c.Form>
      </c.Container>
    </>
  );
};

export default ClientCustomTour;
