import React from 'react'
import * as f from './ViewAllToursElements';

const ViewAllTours = () => {
  return (
    <>
      <f.Container>
        <f.FormTitle>
          View all Tours
        </f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Tour</f.TableDataCell>
              <f.TableDataCell th={true}>Guides</f.TableDataCell>
              <f.TableDataCell th={true}>Start date</f.TableDataCell>
              <f.TableDataCell th={true}>End date</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>1</f.TableDataCell>
              <f.TableDataCell>tour 1</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>mark,mathew</f.TableDataCell>
              <f.TableDataCell className="flex"> Active </f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>03-06-2023</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>2</f.TableDataCell>
              <f.TableDataCell>tour 2</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>john, derek</f.TableDataCell>
              <f.TableDataCell className="flex">Inactive</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>13-05-2023</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>3</f.TableDataCell>
              <f.TableDataCell>tour 3</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>stephan,tony</f.TableDataCell>
              <f.TableDataCell className="flex">Active</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>25-05-2023</f.TableDataCell>
            </f.TableRow>
          </f.Table>
        </f.TableContainer>

      </f.Container>
          
    </>
  )
}

export {ViewAllTours as ViewAllToursForm}