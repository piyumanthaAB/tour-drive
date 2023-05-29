import React, { useContext, useEffect, useState } from 'react';
import * as c from './ClientCustomTourElements';
import Label from '../../components/shared/Form Elements/Label';
import TextField from '../../components/shared/Form Elements/TextField';
import DropDown from '../../components/shared/Form Elements/DropDown';
import TextArea from '../shared/Form Elements/TextArea';
import toast from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';
import ListCheckBox from '../shared/Form Elements/ListCheckBox';
import { MdOutlineClose } from 'react-icons/md';
import { CheckBox } from '../shared/Form Elements/Checkbox';
import CustomTourCard from '../shared/CustomTourCard';
import CustomTourContext from '../../context/tour/customTourContext';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ClientCustomTour = ({ customTourLocations }) => {
  const navigate = useNavigate();
  const { updateCustomTour, resetCustomTour, updaetState } =
    useContext(CustomTourContext);
  const { user } = useAuth();
  // al available cities in display
  const [selectedCity, setSelectedCity] = useState(0);

  // cities that customer added to his list
  const [customrSelectedLocations, setCustomrSelectedLocations] = useState([]);
  // console.log({ customrSelectedLocations });

  const [sortedCities, setSortedCities] = useState([]);

  const [locationsInTheCity, setLocationsInTheCity] = useState([]);

  const [tour, setTour] = useState([]);

  const [vehicleType, setVehicleType] = useState({
    label: 'Select vehicle type',
    value: '',
  });

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [transmission, setTransmission] = useState({
    label: 'Auto',
    value: 'auto',
  });
  const [fuel, setFuel] = useState({ label: 'Petrol', value: 'petrol' });

  const [passengerCount, setPassengerCount] = useState(1);
  // const [name, setName] = useState(`${Math.random()}`);
  const [name, setName] = useState(`${user._id.slice(0, 10)}${Date.now()}`);

  // final custom tour data with selected locations in each city
  // const [tour, setTour] = useState([
  //   {
  //     day: 1,
  //     city: 'galle',
  //     visitingLocations: {
  //       loc_1: '',
  //       loc_2: '',
  //       loc_3: '',
  //       loc_4: '',
  //     },
  //     accomodation: '',
  //   },
  // ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    if (customrSelectedLocations.length <= 1) {
      toast.error('Please select at least 2 cities', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      });
    } else {
      console.log({ length: customrSelectedLocations.length });
      const res = await toast.promise(
        submitForm(
          '/api/v1/district-data/locations',
          {
            customSelectedLocations: customrSelectedLocations.map(
              (city) => city.charAt(0).toUpperCase() + city.slice(1)
            ),
          },
          'post',
          {}
        ),
        {
          loading: 'Submitting tour locations...',
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
      // console.log({ res });
      setSortedCities(res.data.data.outputData);
      // console.log({ sortedCities });
    }
  };

  const onEstimation = async (e) => {
    if (from === '') {
      toast.error('Please fill start date', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else if (to === '') {
      toast.error('Please fill end date', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else if (vehicleType.value === '') {
      toast.error('Please select vehicle type', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else {
      updaetState({
        startDate: from,
        endDate: to,
        vehicleTransmission: transmission.value,
        vehicleFuel: fuel.value,
        passengerCount,
        vehicleType: vehicleType.value,
        customTourName: name,
      });
      navigate('/client/custom-tour/summary');
    }
  };

  const vehicleTypesValues = [
    { label: 'Car', value: 'car' },
    { label: 'Van', value: 'van' },
    { label: 'SUV', value: 'suv' },
    { label: 'Cab', value: 'cab' },
  ];
  const vehicleTransmissionTypesValues = [
    { label: 'Auto', value: 'auto' },
    { label: 'Manuel', value: 'maunel' },
  ];
  const vehicleFuelTypesValues = [
    { label: 'Petrol', value: 'petrol' },
    { label: 'Diesal', value: 'diesal' },
  ];

  useEffect(() => {
    if (sortedCities.length > 0) {
      let arr = [];
      const locationsInCities = sortedCities.map((city) => {
        customTourLocations.forEach((loc) => {
          if (loc.city === city) {
            arr.push(loc);
          }
          // return loc.city===city
        });
        // return arr;
      });
      setLocationsInTheCity(arr);
    }
  }, [sortedCities]);

  return (
    <>
      <c.Container>
        <c.FormTitle>Request Custom Tour </c.FormTitle>

        <c.Form onSubmit={onSubmit}>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Tour Request ID'} />
              <TextField
                value={name}
                // setValue={setName}
                placeholder={'Enter tour name here'}
              />
            </c.FormGroup>
            <c.FormGroup></c.FormGroup>
          </c.Row>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Tour Start date'} />
              <c.DateInput
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                type={'date'}
              />
            </c.FormGroup>
            <c.FormGroup>
              <Label labelText={'Tour End date'} />
              <c.DateInput
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type={'date'}
              />
            </c.FormGroup>
          </c.Row>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Passenger count'} />
              <TextField
                value={passengerCount}
                setValue={setPassengerCount}
                placeholder={'Enter passenger count here'}
              />
            </c.FormGroup>
            <c.FormGroup>
              <Label labelText={'Vehicle type'} />

              <DropDown
                dropDownValues={vehicleTypesValues}
                currentDropdownVal={vehicleType}
                setCurrentDropdownVal={setVehicleType}
                onChange={() => {}}
              />
            </c.FormGroup>
          </c.Row>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Vehicle Transmission'} />
              <DropDown
                dropDownValues={vehicleTransmissionTypesValues}
                currentDropdownVal={transmission}
                setCurrentDropdownVal={setTransmission}
                onChange={() => {}}
              />
            </c.FormGroup>
            <c.FormGroup>
              <Label labelText={'Vehicle Fuel type'} />

              <DropDown
                dropDownValues={vehicleFuelTypesValues}
                currentDropdownVal={fuel}
                setCurrentDropdownVal={setFuel}
                onChange={() => {}}
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
                      onClick={() => {
                        setSelectedCity(i);
                        // customrSelectedLocations.push(loc.city);
                        // setCustomrSelectedLocations([
                        //   ...customrSelectedLocations,
                        //   loc.city,
                        // ]);
                      }}
                      key={i}
                    >
                      {i + 1}. {loc.city}
                    </c.ListItem>
                  );
                })}
              </c.CheckBoxListContainer>
              <c.AddCityBtn
                onClick={(e) => {
                  e.preventDefault();
                  setCustomrSelectedLocations([
                    ...customrSelectedLocations,
                    customTourLocations[selectedCity].city,
                  ]);
                }}
              >
                Add selected city to the list
              </c.AddCityBtn>
            </c.FormGroup>
            <c.FormGroup>
              <Label
                labelText={`Locations you can visit in   ${customTourLocations[selectedCity].city} city`}
              />

              <c.ListItemsContainer>
                {customTourLocations[selectedCity].availableLocations.map(
                  (loc, i) => {
                    return (
                      <c.ViewOnlyItem key={i}>
                        {i + 1}. {loc}
                      </c.ViewOnlyItem>
                    );
                  }
                )}
              </c.ListItemsContainer>
            </c.FormGroup>
          </c.Row>

          <c.Row>
            <c.FormGroup>
              <Label labelText={`Currently added cities`} />

              <c.ListItemsContainer>
                {customrSelectedLocations.length === 0 && (
                  <h3>no items available</h3>
                )}
                {customrSelectedLocations.length > 0 &&
                  customrSelectedLocations.map((loc, i) => {
                    return (
                      <>
                        <c.ViewOnlyItem key={i}>
                          {loc.charAt(0).toUpperCase() + loc.slice(1)}
                          {i === 0 && (
                            <c.StartLocationLabel>
                              Start Location
                            </c.StartLocationLabel>
                          )}
                          <c.RemoveIcon
                            onClick={() => {
                              const currentList = customrSelectedLocations;
                              const newList = currentList.filter((item, j) => {
                                return i !== j;
                              });
                              setCustomrSelectedLocations(newList);
                            }}
                          >
                            <MdOutlineClose />{' '}
                          </c.RemoveIcon>
                        </c.ViewOnlyItem>
                      </>
                    );
                  })}
              </c.ListItemsContainer>
              {customrSelectedLocations.length > 0 && (
                <c.ButtonContainer>
                  <c.AddCityBtn
                    width="40%"
                    type="submit"
                    onClick={() => {
                      resetCustomTour([]);
                      setLocationsInTheCity([]);
                    }}
                  >
                    Process list
                  </c.AddCityBtn>
                  <c.AddCityBtn
                    width="40%"
                    type="reset"
                    onClick={() => {
                      resetCustomTour([]);
                      setLocationsInTheCity([]);
                      setCustomrSelectedLocations([]);
                      setSortedCities([]);
                    }}
                  >
                    Clear
                  </c.AddCityBtn>
                </c.ButtonContainer>
              )}
            </c.FormGroup>
          </c.Row>

          <c.Row>
            {' '}
            <c.HR />{' '}
          </c.Row>
          <c.CustomCardContainer>
            {sortedCities.length > 0 &&
              sortedCities.map((loc, i) => {
                // skip rendering for 'acc' values
                if (loc === 'acc') {
                  return null;
                }
                return (
                  <c.CardRow key={i}>
                    {/* <c.FormGroup> */}
                    <CustomTourCard
                      cityName={loc}
                      day={i + 1}
                      // locationsInCity={customTourLocations[i]}
                      // locationsInCity={locationsInTheCity[i]}
                      locationsInCity={
                        sortedCities[i - 1] === 'acc'
                          ? locationsInTheCity[i - 1]
                          : locationsInTheCity[i]
                      }
                      setTour={setTour}
                      tour={tour}
                    />
                    {/* </c.FormGroup> */}
                    {/* <c.FormGroup>
                    <c.AccomodationCardContainer>
                      <DropDown
                        dropDownValues={accomodationDropdownValues}
                        currentDropdownVal={accomodationDropdownValues[i]}
                        setCurrentDropdownVal={setAccomodations}
                      />
                    </c.AccomodationCardContainer>
                  </c.FormGroup> */}
                  </c.CardRow>
                );
              })}
          </c.CustomCardContainer>

          <c.Row>
            {/* <c.FormGroup> */}
            {/* <c.LinkBtn to={'/client/custom-tour/summary'}>
              View Estimation
            </c.LinkBtn> */}
            <c.SubmitBtn
              onClick={(e) => {
                e.preventDefault();
                onEstimation();
              }}
              color="var(--main-color)"
            >
              View estimation
            </c.SubmitBtn>
            {/* </c.FormGroup> */}
          </c.Row>
        </c.Form>
      </c.Container>
    </>
  );
};

export default ClientCustomTour;
