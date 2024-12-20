import React, { useState } from 'react';
import Label from '../shared/Form Elements/Label';
import TextField from '../shared/Form Elements/TextField';
import * as c from './ClientHomeElements';
import useAuth from '../../hooks/useAuth';

const ClientHomeComp = () => {
  const { user } = useAuth();

  const [email, setEmail] = useState(user.email || 'not available');
  const [name, setName] = useState(user.name || 'update your name ..');
  const [mobile, setMobile] = useState(
    user.mobile || 'update your mobile number'
  );
  const [country, setCountry] = useState('Sri Lanka');
  const [local, setLocal] = useState(true);
  const [id, setId] = useState();
  const [passport, setPassport] = useState();

  return (
    <c.Container>
      <c.FormTitle>My Profile</c.FormTitle>

      <c.Form>
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
            setValue={setName}
            placeholder={'Enter country here'}
          />
        </c.FormGroup>

        <c.FormGroup>
          <Label labelText={'ID or Passport'} />
          <TextField placeholder={'Enter ID or Passport here'} />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'Profile photo'} />
          <TextField
            type="file"
            placeholder={'Upload tour gallery images here'}
          />
        </c.FormGroup>

        <c.FormGroup>
          <c.SubmitBtn>Update profile</c.SubmitBtn>
          <c.SubmitBtn color="#333" type="reset">
            Clear
          </c.SubmitBtn>
        </c.FormGroup>
      </c.Form>

      <c.FormTitle>Update Password</c.FormTitle>

      <c.Form>
        <c.FormGroup>
          <Label labelText={'Current password'} />
          <TextField
            type={'password'}
            placeholder={'Enter current password here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'New password'} />
          <TextField
            type={'password'}
            placeholder={'Enter new password here'}
          />
        </c.FormGroup>
        <c.FormGroup>
          <Label labelText={'Confirm New password'} />
          <TextField
            type={'password'}
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
