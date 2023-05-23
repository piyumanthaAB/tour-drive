import React from 'react';
import * as c from './SingleCustomTourElements';
import Label from '../shared/Form Elements/Label';
import TextArea from '../shared/Form Elements/TextArea';

const SingleCustomTour = ({ tour }) => {
  return (
    <>
      <c.Container>
        <c.FormTitle>
          {tour.status === 'approved' && (
            <>
              Custom tour summary{' '}
              <c.StatusLabel backgroundColor={'#23b239'}>
                {tour.status}
              </c.StatusLabel>{' '}
            </>
          )}
          {tour.status === 'rejected' && (
            <>
              Custom tour summary{' '}
              <c.StatusLabel backgroundColor={'#ff2200'}>
                {tour.status}
              </c.StatusLabel>{' '}
            </>
          )}
          {tour.status === 'pending' && (
            <>
              Custom tour summary{' '}
              <c.StatusLabel backgroundColor={'#dac912'}>
                {tour.status}
              </c.StatusLabel>{' '}
            </>
          )}
        </c.FormTitle>

        <c.Row>
          <c.DescriptionContainer>
            <c.DescGroup>
              <Label labelText={'Tour name'} />
              <h2>{tour.name}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Start Date'} />
              <h2>{tour.startDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'End Date'} />
              <h2>{tour.endDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Duration'} />
              <h2>{tour.duration || '-'} Days</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Passenger count'} />
              <h2>{tour.passengerCount}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle type'} />
              <h2>{tour.vehicleType}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle transmission'} />
              <h2>{tour.vehicleTransmission}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle fuel'} />
              <h2>{tour.vehicleFuel}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Total distance'} />
              <h2>{tour.totalDistance}KM</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle cost'} />
              <h2>$ {tour.estimatedVehicleCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Accomodation cost'} />
              <h2>$ {tour.estimatedAccomodationCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Estimated total price'} />
              <h2>$ {tour.estimatedTotalCost}</h2>
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
            {tour.customTour.map((tour, i) => {
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
        <c.Container>
          <c.FormTitle>Rejection comments</c.FormTitle>

          <c.FormGroup>
            <Label labelText={'Pricing related '} />
            <TextArea
              //   placeholder={'Enter your comment'}
              value={tour?.adminPriceComment || 'currently not available'}
              //   setValue={setPriceComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Location related '} />
            <TextArea
              //   placeholder={'Location related'}
              value={tour?.adminLocationComment || 'currently not available'}
              //   setValue={setLocationComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Vehicle related '} />
            <TextArea
              //   placeholder={'Enter your comment'}
              value={tour?.adminVehicleComment || 'currently not available'}
              //   setValue={setVehicleComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Other'} />
            <TextArea
              //   placeholder={'Enter your comment'}
              value={tour?.adminOtherComment || 'currently not available'}
              //   setValue={setOtherComment}
            />
          </c.FormGroup>
        </c.Container>
      </c.Container>
    </>
  );
};

export default SingleCustomTour;
