import React, { useState } from 'react';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';
import Label from '../../shared/Form Elements/Label';
import TextArea from '../../shared/Form Elements/TextArea';
import TextField from '../../shared/Form Elements/TextField';
import * as c from './AdminTourCreateFormElements';

const SingleCustomTourView = ({ tour }) => {
  const [priceComment, setPriceComment] = useState(
    tour?.adminPriceComment || 'not available'
  );
  const [locationComment, setLocationComment] = useState(
    tour?.adminLocationComment || 'not available'
  );
  const [vehicleComment, setVehicleComment] = useState(
    tour?.adminVehicleComment || 'not available'
  );
  const [otherComment, setOtherComment] = useState(
    tour?.adminOtherComment || 'not available'
  );

  const [finalPrice, setFinalPrice] = useState(
    tour?.finalCost || 'not available'
  );

  const onSubmit = async (e, type) => {
    e.preventDefault();

    console.log({ type });
    const data = {
      adminPriceComment: priceComment,
      adminLocationComment: locationComment,
      adminVehicleComment: vehicleComment,
      adminOtherComment: otherComment,
      finalCost: finalPrice,
      status: type === 'accept' ? 'approved' : 'rejected',
    };

    if (priceComment === '') {
      toast.error('Please fill price comment..', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else if (locationComment === '') {
      toast.error('Please fill location comment..', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else if (vehicleComment === '') {
      toast.error('Please fill vehicle comment..', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } else {
      await toast.promise(
        submitForm(`/api/v1/custom-tours/${tour._id}`, data, 'patch', {}),
        {
          loading: 'Updating the request ...',
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
    }

    console.log({ data });

    // const headers = {
    //   // "Content-Type": "application/json",
    // };
    // const tdata = { review };

    // await toast.promise(
    //   submitForm(`/api/v1/custom-tours/${tour._id}`, tdata, 'patch', headers),
    //   {
    //     loading: 'Adding review....',
    //     success: (data) => {
    //       console.log({ data });
    //       return `${data.data.message}` || 'success';
    //     },
    //     error: (err) => `${err.response.data.message}`,
    //   },
    //   {
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //       fontSize: '2rem',
    //     },
    //   }
    // );
  };
  return (
    <>
      <c.Container>
        <c.FormTitle>
          {tour.status === 'approved' && (
            <>
              Requested tour summary{' '}
              <c.StatusLabel backgroundColor={'#23b239'}>
                {tour.status}
              </c.StatusLabel>{' '}
            </>
          )}
          {tour.status === 'rejected' && (
            <>
              Requested tour summary{' '}
              <c.StatusLabel backgroundColor={'#ff2200'}>
                {tour.status}
              </c.StatusLabel>{' '}
            </>
          )}
          {tour.status === 'pending' && (
            <>
              Requested tour summary{' '}
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
              <h2>{tour?.name}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Passenger count'} />
              <h2>{tour?.passengerCount}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Start Date'} />
              <h2>{tour?.startDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'End Date'} />
              <h2>{tour?.endDate}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Duration'} />
              <h2>{tour?.duration || '-'} Days</h2>
            </c.DescGroup>

            <c.DescGroup>
              <Label labelText={'Vehicle type'} />
              <h2>{tour?.vehicleType}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle transmission'} />
              <h2>{tour?.vehicleTransmission}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle fuel'} />
              <h2>{tour?.vehicleFuel}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Total distance'} />
              <h2>{tour?.totalDistance}KM</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Vehicle cost'} />
              <h2>$ {tour?.estimatedVehicleCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Accomodation cost'} />
              <h2>$ {tour?.estimatedAccomodationCost}</h2>
            </c.DescGroup>
            <c.DescGroup>
              <Label labelText={'Estimated total price'} />
              <h2>$ {tour?.estimatedTotalCost}</h2>
            </c.DescGroup>
          </c.DescriptionContainer>
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
            {tour?.customTour.map((tour, i) => {
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
          </c.Table>
        </c.TableContainer>
      </c.Container>
      <c.Container>
        <c.FormTitle>Validate tour</c.FormTitle>
        <c.Form>
          <c.FormGroup>
            <Label labelText={'Enter final total cost ( $ )'} />
            <TextField
              placeholder={'Enter final total cost here'}
              value={finalPrice}
              setValue={setFinalPrice}
            />
          </c.FormGroup>
          <c.FormGroup></c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Enter any price changes here '} />
            <TextArea
              placeholder={'Enter your comment'}
              value={priceComment}
              setValue={setPriceComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Enter any location changes here '} />
            <TextArea
              placeholder={'Enter your comment'}
              value={locationComment}
              setValue={setLocationComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Enter any vechile changes here '} />
            <TextArea
              placeholder={'Enter your comment'}
              value={vehicleComment}
              setValue={setVehicleComment}
            />
          </c.FormGroup>
          <c.FormGroup>
            <Label labelText={'Enter any other comment here '} />
            <TextArea
              placeholder={'Enter your comment'}
              value={otherComment}
              setValue={setOtherComment}
            />
          </c.FormGroup>
        </c.Form>
        {tour.status === 'pending' && (
          <c.ButtonRow>
            <c.SubmitBtn
              onClick={(e) => {
                e.preventDefault();
                onSubmit(e, 'accept');
              }}
              backgroundColor="var(--main-color)"
              type="submit"
            >
              Accept
            </c.SubmitBtn>
            <c.SubmitBtn
              onClick={(e) => {
                e.preventDefault();
                onSubmit(e, 'reject');
              }}
              type="reset"
            >
              Reject
            </c.SubmitBtn>
          </c.ButtonRow>
        )}
      </c.Container>
    </>
  );
};

export default SingleCustomTourView;
