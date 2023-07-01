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
              <f.TableDataCell th={true}>Type</f.TableDataCell>
              <f.TableDataCell th={true}>Start Date</f.TableDataCell>
              <f.TableDataCell th={true}>Fee</f.TableDataCell>
              <f.TableDataCell th={true}>View</f.TableDataCell>
            </f.TableRow>
            {bookings.map((item, key) => {
              return (
                <f.TableRow key={key}>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>
                    {item.tour?.name || item.customTour.name || ''}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell>{item.bookingType || ''} </f.TableDataCell>
                  <f.TableDataCell>
                    {item?.tour?.start_date?.split('T')[0] ||
                      item.customTour.startDate ||
                      'not available'}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex">
                    {' '}
                    ${item.tour?.price || item.customTour.finalCost}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell>
                    {item.bookingType === 'custom-tour' && (
                      <Link
                        to={`/client/my-custom-tours/${item?.customTour._id}`}
                      >
                        View tour
                      </Link>
                    )}
                    {item.bookingType === 'tour' && (
                      <Link to={`/tours/${item?.tour?._id}`}>View tour</Link>
                    )}
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
