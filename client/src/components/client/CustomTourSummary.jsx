import React, { useContext } from 'react';
import * as c from './CustomTourSummaryElements';
import CustomTourContext from '../../context/tour/customTourContext';
import Label from '../shared/Form Elements/Label';
import TextField from '../shared/Form Elements/TextField';

const CustomTourSummary = () => {
  const {
    customTour,
    startDate,
    endDate,
    passengerCount,
    vehicleType,
    vehicleTransmission,
    vehicleFuel,
  } = useContext(CustomTourContext);
  return (
    <>
      <c.Container>
        <c.FormTitle>Custom tour summary</c.FormTitle>

        <c.Row>
          <c.DescriptionContainer>
            <c.DescGroup>
              <Label labelText={'Start Date'} />
              <h2>{startDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'End Date'} />
              <h2>{endDate}</h2>
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
          </c.DescriptionContainer>
        </c.Row>

        <c.TableContainer>
          <c.Table>
            <c.TableRow>
              <c.TableDataCell th={true}>#</c.TableDataCell>
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
                    {tour.accomodation}
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
        <c.SubmitBtn>Submit for validation</c.SubmitBtn>
      </c.Container>
    </>
  );
};

export default CustomTourSummary;
