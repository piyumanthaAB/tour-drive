import React from 'react';
import * as f from './ViewAllCustomToursTableElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewAllCustomToursTable = ({ tours }) => {
  const navigate = useNavigate();
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
                          // onTourUpdate(e, tour);
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
