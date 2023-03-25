import React, { useState } from 'react';
import Label from '../../shared/Form Elements/Label.jsx';
import * as n from './UpdateUserElements.js';
import TextField from '../../shared/Form Elements/TextField.jsx';
import TextArea from '../../shared/Form Elements/TextArea';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';
const UpdateUser = ({ user }) => {
  const [fName, setFname] = useState(
    user.name?.split(' ')[0] || 'not available'
  );
  const [lName, setLname] = useState(
    user.name?.split(' ')[1] || 'not available'
  );
  const [email, setEmail] = useState(user.email || 'not available');
  const [id, setId] = useState(user.id || 'not available');
  const [mobile, setMobile] = useState(user.mobile || 'not available');

  const [role, setRole] = useState(user.role || 'not available');

  const availableGuides = ['driver', 'tour_guide'];

  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    await toast.promise(
      submitForm(
        `/api/v1/users/${user._id}`,
        {
          name: `${fName} ${lName}`,
          id,
          mobile,
          role,
        },
        'patch',
        headers
      ),
      {
        loading: 'Updating User...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success';
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
      <n.Container>
        <n.FormTitle>Update User</n.FormTitle>

        <n.Form onSubmit={onSubmit}>
          <n.FormGroup>
            <Label labelText={'First Name'} />
            <TextField
              value={fName}
              setValue={setFname}
              placeholder={"Enter user's first name here"}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Last Name'} />
            <TextField
              value={lName}
              setValue={setLname}
              placeholder={"Enter user's last name here"}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Email'} />
            <TextField
              value={email}
              //   setValue={setEmail}
              placeholder={'Enter email here'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'Select user role'} />
            <DropDown
              dropDownValues={availableGuides}
              currentDropdownVal={role}
              setCurrentDropdownVal={setRole}
            />
          </n.FormGroup>

          <n.FormGroup>
            <Label labelText={'ID'} />
            <TextField
              value={id}
              setValue={setId}
              placeholder={'Enter ID number here'}
            />
          </n.FormGroup>
          <n.FormGroup>
            <Label labelText={'Mobile'} />
            <TextField
              value={mobile}
              setValue={setMobile}
              placeholder={'Enter mobile number here'}
            />
          </n.FormGroup>

          <n.FormGroup>
            <n.SubmitBtn>Update user</n.SubmitBtn>
            <n.SubmitBtn color='#333' type='reset'>
              Clear
            </n.SubmitBtn>
          </n.FormGroup>
        </n.Form>
      </n.Container>
    </>
  );
};

export default UpdateUser;
