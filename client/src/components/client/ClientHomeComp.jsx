import React, { useState } from 'react';
import Label from '../shared/Form Elements/Label';
import TextField from '../shared/Form Elements/TextField';
import * as c from './ClientHomeElements';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';

const ClientHomeComp = () => {
  const { user } = useAuth();

  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [newPwd, setNewPwd] = useState('');

  const [email, setEmail] = useState(user?.email || 'not available');
  const [name, setName] = useState(user?.name || 'update your name ..');
  const [mobile, setMobile] = useState(
    user?.mobile || 'update your mobile number'
  );
  const [country, setCountry] = useState('Sri Lanka');
  const [local, setLocal] = useState(true);
  const [passportID, setPassportID] = useState(
    user?.passportID || 'update your passport or ID here'
  );

  const onPwdReset = async (e) => {
    e.preventDefault();

    const data = {
      passwordCurrent: pwd,
      password: newPwd,
      passwordConfirm: pwdConfirm,
    };

    setPwd('');
    setPwdConfirm('');
    setNewPwd('');

    await toast.promise(
      submitForm('/api/v1/auth/update-password', data, 'patch', {}),
      {
        loading: 'Updating password ....',
        success: (data) => {
          console.log({ data });
          return 'success';
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

  const onUpdate = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      country: country,
      passportID: passportID,
      mobile: mobile,
    };

    await toast.promise(
      submitForm('/api/v1/auth/update-me', data, 'patch', {}),
      {
        loading: 'Updating profile data ....',
        success: (data) => {
          console.log({ data });
          return 'success';
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
    <c.Container>
      <c.FormTitle>My Profile</c.FormTitle>

      <c.Form onSubmit={onUpdate}>
        <c.FormGroup>
          <Label labelText={'Email'} />
          <TextField placeholder={'Enter email here'} value={email} />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'Name'} />
          <TextField
            placeholder={'Enter name here'}
            value={name}
            setValue={setName}
          />
        </c.FormGroup>

        <c.FormGroup>
          <Label labelText={'Mobile'} />
          <TextField
            value={mobile}
            setValue={setMobile}
            placeholder={'Enter mobile here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'Country'} />
          <TextField
            value={country}
            setValue={setCountry}
            placeholder={'Enter country here'}
          />
        </c.FormGroup>

        <c.FormGroup>
          <Label labelText={'ID or Passport  number'} />
          <TextField
            value={passportID}
            setValue={setPassportID}
            placeholder={'Enter ID or Passport number here'}
          />
        </c.FormGroup>
        <c.FormGroup></c.FormGroup>
        {/* <c.FormGroup>
          <Label labelText={'Profile photo'} />
          <TextField
            type="file"
            placeholder={'Upload tour gallery images here'}
          />
        </c.FormGroup> */}

        <c.FormGroup>
          <c.SubmitBtn>Update profile</c.SubmitBtn>
          <c.SubmitBtn color="#333" type="reset">
            Clear
          </c.SubmitBtn>
        </c.FormGroup>
      </c.Form>

      <c.FormTitle>Update Password</c.FormTitle>

      <c.Form onSubmit={onPwdReset}>
        <c.FormGroup>
          <Label labelText={'Current password'} />
          <TextField
            type={'password'}
            value={pwd}
            setValue={setPwd}
            placeholder={'Enter current password here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'New password'} />
          <TextField
            type={'password'}
            value={newPwd}
            setValue={setNewPwd}
            placeholder={'Enter new password here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'Confirm New password'} />
          <TextField
            type={'password'}
            value={pwdConfirm}
            setValue={setPwdConfirm}
            placeholder={'Confirm new password here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          {/* <Label labelText={'Confirm New password'} />
          <TextField placeholder={'Confirm new password here'} /> */}
        </c.FormGroup>

        <c.FormGroup>
          <c.SubmitBtn>Update password</c.SubmitBtn>
          <c.SubmitBtn color="#333" type="reset">
            Clear
          </c.SubmitBtn>
        </c.FormGroup>
      </c.Form>
    </c.Container>
  );
};

export default ClientHomeComp;
