import React, { useState } from 'react';
import * as f from './AdminUserCreateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import TextArea from '../../shared/Form Elements/TextArea.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';
import { toast } from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm.js';

const AdminUserCreateForm = () => {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [mobile, setMobile] = useState('');

  const [role, setRole] = useState({ label: 'Select user role', value: '' });

  const availableGuides = ['driver', 'tour_guide'];

  const userRolesValues = [
    { label: 'admin', value: 'admin' },
    { label: 'driver', value: 'driver' },
    { label: 'tour_guide', value: 'tour_guide' },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    await toast.promise(
      submitForm(
        '/api/v1/users',
        { fName, lName, email, id, mobile, role: role.value },
        'post',
        headers
      ),
      {
        loading: 'Creating user account...',
        success: (data) => {
          console.log({ data });
          return ` ${data?.data?.message} ` || 'success';
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      }
    );
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>Add User</f.FormTitle>
        <f.Form onSubmit={onSubmit}>
          <f.FormGroup>
            <Label labelText={'First Name'} />
            <TextField
              value={fName}
              setValue={setFname}
              placeholder={"Enter user's first name here"}
            />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Last Name'} />
            <TextField
              value={lName}
              setValue={setLname}
              placeholder={"Enter user's last name here"}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Email'} />
            <TextField
              value={email}
              setValue={setEmail}
              placeholder={'Enter email here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select user role'} />
            <DropDown
              dropDownValues={userRolesValues}
              currentDropdownVal={role}
              setCurrentDropdownVal={setRole}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'ID'} />
            <TextField
              value={id}
              setValue={setId}
              placeholder={'Enter national ID here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Mobile'} />
            <TextField
              value={mobile}
              setValue={setMobile}
              placeholder={'Enter mobile number here'}
            />
          </f.FormGroup>

          <f.FormGroup>
            <f.SubmitBtn>Add User</f.SubmitBtn>
            <f.SubmitBtn color="#333" type="reset">
              Clear
            </f.SubmitBtn>
          </f.FormGroup>
        </f.Form>
      </f.Container>
    </>
  );
};

export default AdminUserCreateForm;
