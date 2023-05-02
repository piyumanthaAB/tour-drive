import React, { useContext, useState } from 'react';
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

const ClientCustomTour = ({ customTourLocations }) => {
  const { updateCustomTour } = useContext(CustomTourContext);
  // al available cities in display
  const [selectedCity, setSelectedCity] = useState(0);

  // cities that customer added to his list
  const [customrSelectedLocations, setCustomrSelectedLocations] = useState([]);

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

    await toast.promise(
      // submitForm('/api/v1/custom-tours', formData, 'post', headers),
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

  return (
    <>
      <c.Container>
        <c.FormTitle>Request Custom Tour </c.FormTitle>

        <c.Form onSubmit={onSubmit}>
          <c.Row>
            <c.FormGroup>
              <Label labelText={'Tour Start date'} />
              <TextField
                // value={name}
                // setValue={setName}
                placeholder={'Enter tour start date here'}
              />
            </c.FormGroup>
            <c.FormGroup>
              <Label labelText={'Tour duration'} />
              <TextField
                // value={name}
                // setValue={setName}
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
                      {loc.city}
                    </c.ListItem>
                  );
                })}
              </c.CheckBoxListContainer>
              <c.AddCityBtn
                onClick={() => {
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
                    return <c.ViewOnlyItem key={i}>{loc}</c.ViewOnlyItem>;
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
                          {loc}

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
              {/* {customrSelectedLocations.length > 0 && (
                <c.AddCityBtn>Process the list</c.AddCityBtn>
              )} */}
            </c.FormGroup>
          </c.Row>

          <c.Row>
            {' '}
            <c.HR />{' '}
          </c.Row>

          {customrSelectedLocations.length > 0 &&
            customrSelectedLocations.map((loc, i) => {
              return (
                <c.Row key={i}>
                  <c.FormGroup>
                    <CustomTourCard
                      cityName={loc}
                      day={i + 1}
                      locationsInCity={customTourLocations[i]}
                      // setTour={setTour}
                      // tour={tour}
                    />
                  </c.FormGroup>
                  <c.FormGroup>
                    <c.AccomodationCardContainer></c.AccomodationCardContainer>
                  </c.FormGroup>
                </c.Row>
              );
            })}

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
