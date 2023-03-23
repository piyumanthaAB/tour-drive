import React from 'react'
import * as f from './ViewTourBookingsElements';

const ViewTourBookings = () => {
  return (
      <>
          <f.Container>
        <f.FormTitle>
          Tour Bookings
        </f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Tour Name</f.TableDataCell>
              <f.TableDataCell th={true}>Start Date</f.TableDataCell>
              <f.TableDataCell th={true}>Fee</f.TableDataCell>
              <f.TableDataCell th={true}>Status</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>1</f.TableDataCell>
              <f.TableDataCell>Sea explorer</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>2023-05-01</f.TableDataCell>
              <f.TableDataCell className="flex"> $399 </f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>upcoming</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>2</f.TableDataCell>
              <f.TableDataCell>Mountain climber</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>2023-01-15</f.TableDataCell>
              <f.TableDataCell className="flex">$699</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>completed</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>3</f.TableDataCell>
              <f.TableDataCell>City gazer</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>2022-06-25</f.TableDataCell>
              <f.TableDataCell className="flex">$999</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>completed</f.TableDataCell>
            </f.TableRow>
          </f.Table>
        </f.TableContainer>

      </f.Container>
    </>
  )
}

export { ViewTourBookings as TourBookings}