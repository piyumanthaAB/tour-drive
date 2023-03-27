import React from 'react';
import * as f from './ViewTourBookingsElements';
import { Link } from 'react-router-dom';

const ViewTourBookings = ({ bookings }) => {
  return (
    <>
      <f.Container>
        <f.FormTitle>Tour Bookings</f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Tour Name</f.TableDataCell>
              <f.TableDataCell th={true}>Start Date</f.TableDataCell>
              <f.TableDataCell th={true}>Fee</f.TableDataCell>
              <f.TableDataCell th={true}>View</f.TableDataCell>
            </f.TableRow>
            {bookings.map((item, key) => {
              return (
                <f.TableRow key={key}>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>{item.tour.name} </f.TableDataCell>
                  <f.TableDataCell>
                    {item.tour.start_date?.split('T')[0] || 'not available'}
                  </f.TableDataCell>
                  <f.TableDataCell className='flex'>
                    {' '}
                    ${item.tour.price}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell>
                    <Link to={`/tours/${item.tour._id}`}>View tour</Link>
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

export { ViewTourBookings as TourBookings };
