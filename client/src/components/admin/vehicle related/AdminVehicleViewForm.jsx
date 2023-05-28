import React from 'react';
import * as f from './AdminVehicleViewFormElements.js';
import { useNavigate } from 'react-router-dom';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';

const AdminVehiclecViewForm = ({ vehicles }) => {
  const navigate = useNavigate();
  const onVehicleUpdate = (e, vehicle) => {
    // console.log(vehicle);
    navigate(`/admin/vehicles/update/${vehicle._id}`);
  };
  return (
    <>
      <f.Container>
        <f.FormTitle>View all Vehicles</f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Vehicle No</f.TableDataCell>
              <f.TableDataCell th={true}>Type</f.TableDataCell>
              <f.TableDataCell th={true}>model-make</f.TableDataCell>
              <f.TableDataCell th={true}>Fuel</f.TableDataCell>
              <f.TableDataCell th={true}>status</f.TableDataCell>
              <f.TableDataCell th={true}>actions</f.TableDataCell>
            </f.TableRow>
            {vehicles.map((vehicle, i) => {
              return (
                <f.TableRow key={i}>
                  <f.TableDataCell> {i + 1} </f.TableDataCell>
                  <f.TableDataCell>{vehicle.vehicle_No}</f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    {vehicle.vehicle_type}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex">{`${vehicle.model}, ${vehicle.brand}`}</f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    {vehicle.fuel}
                  </f.TableDataCell>
                  <f.TableDataCell minwidth="1rem">
                    {vehicle.vehicle_state}
                  </f.TableDataCell>
                  <f.TableDataCell className="flex" minwidth="1rem">
                    <f.TableActionBtn
                      onClick={(e) => {
                        onVehicleUpdate(e, vehicle);
                      }}
                    >
                      <FiEdit />
                    </f.TableActionBtn>
                    <f.TableActionBtn>
                      <FiTrash2 />
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

export default AdminVehiclecViewForm;
