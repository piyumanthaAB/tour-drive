import React, { useEffect, useState } from 'react';
import * as f from './ViewAllCustomToursTableElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const ViewAllCustomToursTable = ({ tours }) => {
  const navigate = useNavigate();

  const [clickedTour, setClickedTour] = useState('');
  const { data, isPending, isError } = useFetch(
    `/api/v1/custom-tours/my-custom-tours/${clickedTour}`
  );

  if (data) {
    console.log({ data });
  }

  const onPayment = async (e, id) => {
    // alert(id);
    setClickedTour(id);
    const tourData = {
      tourName: data.data.myCustomTour[0].name,
      tourDesc:
        data.data.myCustomTour[0].description || 'no description for this tour',
      price: data.data.myCustomTour[0].finalCost,
      bookingType: 'custom-tour',
      tourID: data.data.myCustomTour[0]._id,
      vehicle: null,
      vehicleName: null,
      user: data.data.myCustomTour[0].user,
      noOfSeats: data.data.myCustomTour[0].passengerCount,
      from: data.data.myCustomTour[0].startDate,
      to: data.data.myCustomTour[0].endDate,
    };

    try {
      const res = await axios({
        method: 'POST',
        url: '/api/v1/booking/create-checkout-session',
        data: tourData,
        headers: {
          Content: 'application/json',
        },
      });
      // const res = await axios.post('/api/v1/booking/create-checkout-session', {
      //   tourData,
      // },);

      if (res.status === 201) {
        window.location.href = res.data.data.url;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>View all Custom Tour Requests</f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Tour</f.TableDataCell>
              <f.TableDataCell th={true}>Status</f.TableDataCell>
              <f.TableDataCell th={true}>Start date</f.TableDataCell>
              <f.TableDataCell th={true}>End date</f.TableDataCell>
              <f.TableDataCell th={true}>Price</f.TableDataCell>
              <f.TableDataCell th={true}>Actions</f.TableDataCell>
            </f.TableRow>
            {tours.map((tour, key) => {
              if (tour.isPaid) {
                return null;
              }
              return (
                <f.TableRow>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>{tour.name} </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    <f.LabelGroup>
                      {tour.status === 'pending' && (
                        <f.LabelIndicator backgroundColor={'#dac912'} />
                      )}
                      {tour.status === 'rejected' && (
                        <f.LabelIndicator backgroundColor={'#ff2200'} />
                      )}
                      {tour.status === 'approved' && (
                        <f.LabelIndicator backgroundColor={'#23b239'} />
                      )}

                      {tour.status}
                    </f.LabelGroup>{' '}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex">
                    {' '}
                    {tour.startDate}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    {tour.endDate}
                  </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    $ {tour.estimatedTotalCost}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex" minwidth="1rem">
                    {tour.status === 'approved' && (
                      <f.TableActionBtn
                        onClick={(e) => {
                          e.preventDefault();
                          // onTourUpdate(e, tour);
                          onPayment(e, tour._id);
                        }}
                      >
                        Payment
                      </f.TableActionBtn>
                    )}
                    <f.TableActionBtn
                      color={'#333'}
                      backgroundColor={'#ccc'}
                      onClick={() => {
                        navigate(`/client/my-custom-tours/${tour._id}`);
                      }}
                    >
                      View
                    </f.TableActionBtn>
                  </f.TableDataCell>
                </f.TableRow>
              );
            })}
          </f.Table>
        </f.TableContainer>
      </f.Container>
    </>
  );
};

export default ViewAllCustomToursTable;
