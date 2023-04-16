import React, { useState } from 'react';
import * as n from './AdminVehicleUpdateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import TextArea from '../../shared/Form Elements/TextArea.jsx';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const AdminVehicleUpdateForm = ({ vehicle, availableDrivers }) => {
  console.log({ vehicle });
  const [vehicleNo, setVehicleNo] = useState(
    vehicle?.vehicle_No || 'not available'
  );
  const [priceWithDr, setPriceWithDr] = useState(
    vehicle?.price_per_day_with_dr || 'not available'
  );
  const [priceWithoutDr, setPriceWithoutDr] = useState(
    vehicle?.price_per_day_without_dr || 'not available'
  );
  const [brand, setBrand] = useState(vehicle?.brand || 'not available');
  const [fuel, setFuel] = useState({
    label: vehicle?.fuel || 'not available',
    value: vehicle?.fuel || '',
  });
  const [model, setModel] = useState(vehicle?.model || 'not available');
  const [seats, setSeats] = useState(vehicle?.seats || 'not available');
  const [milage, setMilage] = useState(vehicle?.milage || 'not available');
  const [description, setDescription] = useState(
    vehicle?.description || 'not available'
  );
  const [features, setFeatures] = useState(
    vehicle?.features || 'not available'
  );

  const [vehicleStatus, setVehicleStatus] = useState({
    label: vehicle?.vehicle_state || 'not available',
    value: vehicle?.vehicle_state || 'not available',
  });

  const [transmission, setTransmission] = useState({
    label: vehicle?.transmission || 'Select Transmission',
    value: vehicle?.transmission || 'Select Transmission',
  });
  const [type, setType] = useState({
    label: vehicle?.vehicle_type || 'Select vehicle Type',
    value: vehicle?.vehicle_type || 'Select vehicle Type',
  });
  const [driver, setDriver] = useState({
    label: vehicle.driver?.name || 'not available',
    value: vehicle.driver?._id || 'not available',
  });

  const transmissionVals = [
    { label: 'Auto', value: 'auto' },
    { label: 'Manuel', value: 'manuel' },
  ];
  const typeVals = [
    { label: 'Car', value: 'car' },
    { label: 'Van', value: 'van' },
    { label: 'Bike', value: 'bike' },
    { label: 'Suv', value: 'suv' },
  ];
  const fuelVals = [
    { label: 'Petrol', value: 'petrol' },
    { label: 'Diesal', value: 'diesal' },
  ];
  const vehicleStatusVals = [
    { label: 'Rented', value: 'rented' },
    { label: 'Available', value: 'available' },
    { label: 'Maintenance', value: 'maintenance' },
  ];
  const driverVals = availableDrivers.map((val) => {
    return {
      label: val.name,
      value: val._id,
    };
  });

  const [coverImg, setCoverImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0]);
    // let url = URL.createObjectURL(e.target.files[0]);
    //     url=url.replace('blob:', '');
    //     // setSingleImg(url);
    //     console.log({singleImg:new URL(url)});
  };
  const handleGalleryImages = (e) => {
    setGalleryImages(e.target.files);
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();

    formData.append('vehicleNo', vehicleNo);
    formData.append('brand', brand);
    formData.append('seats', seats);
    formData.append('model', model);
    formData.append('milage', milage);
    formData.append('description', description);
    formData.append('features', features);
    formData.append('transmission', transmission.value);
    formData.append('type', type.value);
    formData.append('fuel', fuel.value);
    formData.append('vehicle_cover', coverImg);
    formData.append('price_per_day_with_dr', priceWithDr);
    formData.append('price_per_day_without_dr', priceWithoutDr);

    for (const file of galleryImages) {
      formData.append('vehicle_gallery', file);
    }

    await toast.promise(
      submitForm(`/api/v1/vehicles/${vehicle._id}`, formData, 'patch', headers),
      {
        loading: 'Updating Vehicle...',
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

  const onUpdateDriver = async (e, action) => {
    e.preventDefault();

    const formData = {
      action: action === 'update' ? 'update' : 'remove',
      driver: driver.value,
    };

    await toast.promise(
      submitForm(
        `/api/v1/vehicles/driver/${vehicle._id}`,
        formData,
        'patch',
        {}
      ),
      {
        loading: 'Updating driver...',
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
    if (action === 'remove') {
      window.location.reload();
    }
  };

  const onUpdateVehicleStatus = async (e) => {
    e.preventDefault();
    const formData = {
      vehicle_state: vehicleStatus.value,
    };

    await toast.promise(
      submitForm(
        `/api/v1/vehicles/update-state/${vehicle._id}`,
        formData,
        'patch',
        {}
      ),
      {
        loading: 'Updating vehicle state...',
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
    window.location.reload();
  };

  return (
    <>
      <n.Container>
        <n.FormTitle>Update Vehicle Status</n.FormTitle>
        <n.Form>
          <n.FormGroup>
            <Label labelText={'Select status'} />

            <DropDown
              dropDownValues={vehicleStatusVals}
              currentDropdownVal={vehicleStatus}
              setCurrentDropdownVal={setVehicleStatus}
            />
          </n.FormGroup>
          <n.FormGroup></n.FormGroup>

          <n.FormGroup>
            <n.SubmitBtn
              type="submit"
              onClick={(e) => {
                onUpdateVehicleStatus(e);
              }}
            >
              Update state
            </n.SubmitBtn>
          </n.FormGroup>
        </n.Form>
        <n.FormTitle>Update Driver</n.FormTitle>

        <n.Form>
          <n.FormGroup>
            <Label labelText={'Select Driver'} />

            <DropDown
              dropDownValues={driverVals}
              currentDropdownVal={driver}
              setCurrentDropdownVal={setDriver}
            />
          </n.FormGroup>
          <n.FormGroup></n.FormGroup>

          <n.FormGroup>
            <n.SubmitBtn
              type="submit"
              onClick={(e) => {
                onUpdateDriver(e, 'update');
              }}
            >
              Update driver
            </n.SubmitBtn>
            <n.SubmitBtn
              onClick={(e) => {
                onUpdateDriver(e, 'remove');
              }}
              color="#333"
              type="reset"
            >
              Remove driver
            </n.SubmitBtn>
          </n.FormGroup>
        </n.Form>

        <n.FormTitle>Update Vehicle</n.FormTitle>

        <n.Form onSubmit={onUpdate}>
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
              value={brand}
              setValue={setBrand}
              placeholder={'Enter vehicle brand'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Model'} />
            <TextField
              value={model}
              setValue={setModel}
              placeholder={'Enter vehicle model'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Cover'} />
            <input
              name="coverImg"
              onChange={handleCoverImg}
              type="file"
              placeholder={'Upload vehicle cover image here'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Vehicle Images'} />
            <input
              name="galleryImages"
              onChange={handleGalleryImages}
              multiple={true}
              type="file"
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
            <Label labelText={'Vehicle type'} />
            <DropDown
              dropDownValues={typeVals}
              currentDropdownVal={type}
              setCurrentDropdownVal={setType}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Fuel type'} />
            <DropDown
              dropDownValues={fuelVals}
              currentDropdownVal={fuel}
              setCurrentDropdownVal={setFuel}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'No 0f seats'} />
            <TextField
              value={seats}
              setValue={setSeats}
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

          {/* <n.FormGroup>
            <Label labelText={'Assign Driver'} />
            <DropDown
              dropDownValues={driverVals}
              currentDropdownVal={driver}
              setCurrentDropdownVal={setDriver}
            />
          </n.FormGroup> */}

          <n.FormGroup>
            <Label labelText={'Vehicle description'} />
            <TextArea
              value={description}
              setValue={setDescription}
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
            <n.SubmitBtn>Update vehicle</n.SubmitBtn>
            <n.SubmitBtn color="#333" type="reset">
              Clear
            </n.SubmitBtn>
          </n.FormGroup>
        </n.Form>
      </n.Container>
    </>
  );
};

export default AdminVehicleUpdateForm;
