import React, { useState } from 'react';
import * as n from './AdminVehicleCreateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import TextArea from '../../shared/Form Elements/TextArea.jsx';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const AdminVehiclecCreateForm = () => {
  const [priceWithDr, setPriceWithDr] = useState('');
  const [priceWithoutDr, setPriceWithoutDr] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [seatsCount, setSeatsCount] = useState('');
  const [milage, setMilage] = useState('');
  const [desc, setDesc] = useState('');
  const [features, setFeatures] = useState('');
  const [coverImg, setCoverImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const [transmission, setTransmission] = useState('Select Transmission');
  const [type, setType] = useState('Select vehicle Type');
  const [driver, setDriver] = useState('Select driver');
  const [fuel, setFuel] = useState('Select fuel type');

  const transmissionVals = ['auto', 'manuel'];
  const typeVals = ['car', 'Van', 'Bike'];
  const driverVals = ['driver_1', 'driver_2', 'driver_3'];
  const fuelVals = ['petrol', 'diesal'];

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0]);
  };

  const handleGalleryImages = (e) => {
    setGalleryImages(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();

    formData.append('vehicle_cover', coverImg);
    formData.append('vehicleNo', vehicleNo);
    formData.append('vehicleBrand', vehicleBrand);
    formData.append('vehicleModel', vehicleModel);
    formData.append('seatsCount', seatsCount);
    formData.append('milage', milage);
    formData.append('desc', desc);
    formData.append('features', features);
    formData.append('type', type);
    formData.append('transmission', transmission);
    formData.append('fuel', fuel);
    formData.append('price_per_day_with_dr', priceWithDr);
    formData.append('price_per_day_without_dr', priceWithoutDr);

    for (const file of galleryImages) {
      formData.append('vehicle_gallery', file);
    }

    await toast.promise(
      submitForm('/api/v1/vehicles', formData, 'post', headers),
      {
        loading: 'Adding Vehicle...',
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
      <n.Container>
        <n.FormTitle>Add Vehicle</n.FormTitle>

        <n.Form onSubmit={onSubmit}>
          <n.FormGroup>
            <Label labelText={'Vehicle No'} />
            <TextField
              value={vehicleNo}
              setValue={setVehicleNo}
              placeholder={'Enter vehicle number'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Transmission'} />
            <DropDown
              dropDownValues={transmissionVals}
              currentDropdownVal={transmission}
              setCurrentDropdownVal={setTransmission}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Brand'} />
            <TextField
              value={vehicleBrand}
              setValue={setVehicleBrand}
              placeholder={'Enter vehicle brand'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Model'} />
            <TextField
              value={vehicleModel}
              setValue={setVehicleModel}
              placeholder={'Enter vehicle model'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Vehicle Fuel'} />
            <DropDown
              dropDownValues={fuelVals}
              currentDropdownVal={fuel}
              setCurrentDropdownVal={setFuel}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Vehicle type'} />
            <DropDown
              dropDownValues={typeVals}
              currentDropdownVal={type}
              setCurrentDropdownVal={setType}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Cover'} />
            <input
              name='coverImg'
              onChange={handleCoverImg}
              type='file'
              placeholder={'Upload vehicle cover image here'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Images'} />
            <input
              name='galleryImages'
              onChange={handleGalleryImages}
              multiple={true}
              type='file'
              placeholder={'Upload vehicle gallery images here'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Price per day without driver'} />
            <TextField
              value={priceWithoutDr}
              setValue={setPriceWithoutDr}
              placeholder={'Enter Price per day without driver'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Price per day with driver'} />
            <TextField
              value={priceWithDr}
              setValue={setPriceWithDr}
              placeholder={'Enter Price per day with driver'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'No 0f seats'} />
            <TextField
              value={seatsCount}
              setValue={setSeatsCount}
              placeholder={'Enter number of seats'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Current Milage'} />
            <TextField
              value={milage}
              setValue={setMilage}
              placeholder={'Enter current milage'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Assign Driver'} />
            <DropDown
              dropDownValues={driverVals}
              currentDropdownVal={driver}
              setCurrentDropdownVal={setDriver}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle description'} />
            <TextArea
              value={desc}
              setValue={setDesc}
              rows={10}
              placeholder={'Enter vehicle description'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Vehicle features'} />
            <TextArea
              value={features}
              setValue={setFeatures}
              rows={10}
              placeholder={'Enter vehicle features'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <n.SubmitBtn>Add vehicle</n.SubmitBtn>
            <n.SubmitBtn color='#333' type='reset'>
              Clear
            </n.SubmitBtn>
          </n.FormGroup>
        </n.Form>
      </n.Container>
    </>
  );
};

export default AdminVehiclecCreateForm;
