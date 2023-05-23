import React, { useContext, useEffect, useState } from 'react';
import * as c from './CustomTourSummaryElements';
import CustomTourContext from '../../context/tour/customTourContext';
import Label from '../shared/Form Elements/Label';
import { vehiclePrice, accomodationPrices } from '../../data/prices';
import customTourCost from '../../utils/customTourCost';
import { toast } from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';
import AuthContext from '../../context/auth/authContext';

const CustomTourSummary = ({ distanceData }) => {
  const {
    customTour,
    startDate,
    endDate,
    passengerCount,
    vehicleType,
    vehicleTransmission,
    vehicleFuel,
    customTourName,
  } = useContext(CustomTourContext);

  const { user } = useContext(AuthContext);

  const [duration, setDuration] = useState('-');
  const [totalDistance, setTotalDistance] = useState('');
  const [distanceCost, setDistanceCost] = useState('');
  const [accomodationCost, setAccomodationCost] = useState('');
  const [totalCost, setTotalCost] = useState('');

  useEffect(() => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    // Calculate the difference in milliseconds
    const differenceInMs = Math.abs(date2 - date1);

    // Calculate the difference in days
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    setDuration(differenceInDays);

    const {
      totalDistance,
      totalCost,
      accomodationAllPassengersPrice,
      distanceTotalPrice,
    } = customTourCost(customTour, distanceData, vehicleType, passengerCount);

    setTotalDistance(totalDistance);
    setDistanceCost(distanceTotalPrice);
    setAccomodationCost(accomodationAllPassengersPrice);
    setTotalCost(totalCost);
  }, []);

  const accomodationValues = [
    { label: 'Not required', value: null },
    { label: 'Guest house', value: 'guestHouse' },
    { label: 'Villa', value: 'villa' },
    { label: '1 Star', value: 'star_1' },
    { label: '2 Star', value: 'star_2' },
    { label: '3 Star', value: 'star_3' },
  ];

  const onSubmit = async (e) => {
    const data = {
      customTour,
      name: customTourName,
      startDate,
      endDate,
      duration,
      passengerCount,
      vehicleType,
      vehicleTransmission,
      vehicleFuel,
      totalDistance,
      estimatedVehicleCost: distanceCost,
      estimatedAccomodationCost: accomodationCost,
      estimatedTotalCost: totalCost,
      user: user._id,
    };

    console.log({ data });

    await toast.promise(
      submitForm('/api/v1/custom-tours', data, 'post', {}),
      {
        loading: 'Submitting Tour request...',
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
        <c.FormTitle>Custom tour summary</c.FormTitle>

        <c.Row>
          <c.DescriptionContainer>
            <c.DescGroup>
              <Label labelText={'Tour name'} />
              <h2>{customTourName}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Start Date'} />
              <h2>{startDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'End Date'} />
              <h2>{endDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Duration'} />
              <h2>{duration || '-'} Days</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Passenger count'} />
              <h2>{passengerCount}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle type'} />
              <h2>{vehicleType}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle transmission'} />
              <h2>{vehicleTransmission}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle fuel'} />
              <h2>{vehicleFuel}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Total distance'} />
              <h2>{totalDistance}KM</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle cost'} />
              <h2>$ {distanceCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Accomodation cost'} />
              <h2>$ {accomodationCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Estimated total price'} />
              <h2>$ {totalCost}</h2>
            </c.DescGroup>
          </c.DescriptionContainer>
        </c.Row>

        <c.Row>
          <h3>*click here to view terms and conditions*</h3>
        </c.Row>

        <c.TableContainer>
          <c.Table>
            <c.TableRow>
              <c.TableDataCell th={true}>Day</c.TableDataCell>
              <c.TableDataCell th={true}>City</c.TableDataCell>
              <c.TableDataCell th={true}>Location One</c.TableDataCell>
              <c.TableDataCell th={true}>Location Two</c.TableDataCell>
              <c.TableDataCell th={true}>Location Three</c.TableDataCell>
              <c.TableDataCell th={true}>Location Four</c.TableDataCell>
              <c.TableDataCell th={true}>Accomodation</c.TableDataCell>
            </c.TableRow>
            {customTour.map((tour, i) => {
              return (
                <c.TableRow key={i}>
                  <c.TableDataCell> {i + 1} </c.TableDataCell>
                  <c.TableDataCell> {tour.city} </c.TableDataCell>
                  <c.TableDataCell minwidth="1rem">
                    {tour.locationOne}
                  </c.TableDataCell>
                  <c.TableDataCell className="flex">
                    {tour.locationTwo}
                  </c.TableDataCell>
                  <c.TableDataCell minwidth="1rem">
                    {tour.locationThree}
                  </c.TableDataCell>
                  <c.TableDataCell minwidth="1rem">
                    {tour.locationFour}
                  </c.TableDataCell>
                  <c.TableDataCell minwidth="1rem">
                    {tour.accomodation || 'not-required'}
                  </c.TableDataCell>
                </c.TableRow>
              );
            })}

            {/* {tours.map((tour, key) => {
              return (
                <c.TableRow>
                  <c.TableDataCell>{key + 1} </c.TableDataCell>
                  <c.TableDataCell>{tour.name} </c.TableDataCell>
                  <c.TableDataCell minwidth='1rem'>
                    {tour.price}
                  </c.TableDataCell>
                  <c.TableDataCell className='flex'>
                    {' '}
                    03-06-2023{' '}
                  </c.TableDataCell>
                  <c.TableDataCell minwidth='1rem'>08-06-2023</c.TableDataCell>
                  <c.TableDataCell className='flex' minwidth='1rem'>
                    <c.TableActionBtn
                      onClick={(e) => {
                        onTourUpdate(e, tour);
                      }}
                    >
                      <FiEdit />
                    </c.TableActionBtn>
                    <c.TableActionBtn>
                      <FiTrash2 />
                    </c.TableActionBtn>
                  </c.TableDataCell>
                </c.TableRow>
              );
            })} */}
          </c.Table>
        </c.TableContainer>
        <c.SubmitBtn
          onClick={() => {
            onSubmit();
          }}
        >
          Submit for validation
        </c.SubmitBtn>
      </c.Container>
    </>
  );
};

export default CustomTourSummary;
