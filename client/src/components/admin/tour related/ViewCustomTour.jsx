import React, { useEffect, useState } from 'react';
import * as f from './ViewCustomTourElements';
import { FiBookOpen, FiDelete, FiTrash, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewCustomTour = ({ tours }) => {
  const navigate = useNavigate();
  const onTourView = (e, tour) => {
    navigate(`/admin/custom-tours/${tour._id}`);
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>Requested Custom Tours</f.FormTitle>
        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableData th={true}>#</f.TableData>
              <f.TableData th={true}>Tour Name</f.TableData>
              <f.TableData th={true}>Status</f.TableData>
              <f.TableData th={true}>Start date</f.TableData>
              <f.TableData th={true}>Duration</f.TableData>
              <f.TableData th={true}>Actions</f.TableData>
            </f.TableRow>
            {tours.map((tour, key) => {
              return (
                <f.TableRow>
                  <f.TableData>{key + 1}</f.TableData>
                  <f.TableData>{tour.name}</f.TableData>
                  <f.TableData>
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
                  </f.TableData>
                  <f.TableData>{tour.startDate}</f.TableData>
                  <f.TableData minwidth="1 rem">{tour.duration}</f.TableData>
                  <f.TableData className="flex" minwidth="1rem">
                    <f.TableActionBtn
                      onClick={(e) => {
                        onTourView(e, tour);
                      }}
                    >
                      <FiBookOpen />
                    </f.TableActionBtn>
                    <f.TableActionBtn
                      onClick={(e) => {
                        console.log('custom tour deletion');
                      }}
                    >
                      <FiTrash2 />
                    </f.TableActionBtn>
                  </f.TableData>
                </f.TableRow>
              );
            })}
          </f.Table>
        </f.TableContainer>
      </f.Container>
    </>
  );
};

export default ViewCustomTour;
