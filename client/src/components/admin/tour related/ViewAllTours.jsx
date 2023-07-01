import React from 'react';
import * as f from './ViewAllToursElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewAllTours = ({ tours }) => {
  const navigate = useNavigate();
  const onTourUpdate = (e, tour) => {
    // console.log(tour);
    navigate(`/admin/tours/update/${tour._id}`);
  };
  // console.log({ tours });
  return (
    <>
      <f.Container>
        <f.FormTitle>View all Tours</f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Tour</f.TableDataCell>
              <f.TableDataCell th={true}>Price</f.TableDataCell>
              <f.TableDataCell th={true}>Start date</f.TableDataCell>
              <f.TableDataCell th={true}>End date</f.TableDataCell>
              <f.TableDataCell th={true}>Actions</f.TableDataCell>
            </f.TableRow>
            {tours.map((tour, key) => {
              return (
                <f.TableRow>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>{tour.name} </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    {tour.price}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex">
                    {' '}
                    03-06-2023{' '}
                  </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">08-06-2023</f.TableDataCell>
                  <f.TableDataCell className="flex" minwidth="1rem">
                    <f.TableActionBtn
                      onClick={(e) => {
                        onTourUpdate(e, tour);
                      }}
                    >
                      <FiEdit />
                    </f.TableActionBtn>
                    {/* <f.TableActionBtn><FiTrash2 /></f.TableActionBtn> */}
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

export { ViewAllTours as ViewAllToursForm };
