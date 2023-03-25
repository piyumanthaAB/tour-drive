import React from 'react';
import * as f from './ViewTourBookingsElements';

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
              <f.TableDataCell th={true}>Status</f.TableDataCell>
            </f.TableRow>
            {bookings.map((item, key) => {
              return (
                <f.TableRow key={key}>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>{item.tour.name} </f.TableDataCell>
                  <f.TableDataCell minwidth='1rem'>2023-05-01</f.TableDataCell>
                  <f.TableDataCell className='flex'> $399 </f.TableDataCell>
                  <f.TableDataCell minwidth='1rem'>upcoming</f.TableDataCell>
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
