import React from 'react'
import * as f from './AdminVehicleViewFormElements.js';

const AdminVehiclecViewForm =()=>{
    <h1>Vehicle Details</h1>
  return (
    <>
      <f.Container>
        <f.FormTitle>
          View all Vehicles
        </f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Vehicle No</f.TableDataCell>
              <f.TableDataCell th={true}>Type</f.TableDataCell>
              <f.TableDataCell th={true}>Status</f.TableDataCell>
              <f.TableDataCell th={true}>Fuel</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>1</f.TableDataCell>
              <f.TableDataCell>CBC-1111</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>car</f.TableDataCell>
              <f.TableDataCell className="flex"> available </f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>petrol</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>2</f.TableDataCell>
              <f.TableDataCell>pw-1245</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>van</f.TableDataCell>
              <f.TableDataCell className="flex">rented</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>diesal</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>3</f.TableDataCell>
              <f.TableDataCell>tw-2563</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>bike</f.TableDataCell>
              <f.TableDataCell className="flex">rented</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>petrol</f.TableDataCell>
            </f.TableRow>
          </f.Table>
        </f.TableContainer>

      </f.Container>
    </>
  );
}

export default AdminVehiclecViewForm