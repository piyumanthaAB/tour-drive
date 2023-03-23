import React from 'react'
import * as f from './ViewAllUsersElements';

const ViewAllUsers = () => {
  return (
      <>
          <f.Container>
        <f.FormTitle>
          View all Users
        </f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Name</f.TableDataCell>
              <f.TableDataCell th={true}>Email</f.TableDataCell>
              <f.TableDataCell th={true}>Status</f.TableDataCell>
              <f.TableDataCell th={true}>User type</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>1</f.TableDataCell>
              <f.TableDataCell>sadeepa</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>sadeepa@mail.com</f.TableDataCell>
              <f.TableDataCell className="flex"> active </f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>user</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>2</f.TableDataCell>
              <f.TableDataCell>janith</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>janith@mail.com</f.TableDataCell>
              <f.TableDataCell className="flex">active</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>driver</f.TableDataCell>
            </f.TableRow>
            <f.TableRow>
              <f.TableDataCell>3</f.TableDataCell>
              <f.TableDataCell>asela</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>asela@mail.com</f.TableDataCell>
              <f.TableDataCell className="flex">deactive</f.TableDataCell>
              <f.TableDataCell minwidth='1rem'>tour_guide</f.TableDataCell>
            </f.TableRow>
          </f.Table>
        </f.TableContainer>

      </f.Container>
    </>
  )
}

export default ViewAllUsers