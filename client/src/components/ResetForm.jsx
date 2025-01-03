/*import React, { Component } from 'react'
import { Formik } from 'formik'
import { object, ref, string } from 'yup'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import Spinner from './Spinner'
import Alert from './Alert'


export default function ResetForm() {
    state = {
        passChangeSuccess: false,
      }
    
      _handleModalClose = () => {
        this.setState(() => ({
          passChangeSuccess: false,
        }))
      }
    
      _renderModal = () => {
        const onClick = () => {
          this.setState(() => ({ passChangeSuccess: false }))
        }
    
        return (
          <Alert
            isOpen={this.state.passChangeSuccess}
            onClose={this._handleClose}
            handleSubmit={onClick}
            title="Password Reset"
            text="Your password was changed successfully"
            submitButtonText="Done"
          />
        )
      }
    
      _handleSubmit = ({
        currentPass,
        newPass,
        confirmPass,
        setSubmitting,
        resetForm,
      }) => {
        // fake async login
        setTimeout(async () => {
          setSubmitting(false)
    
          this.setState(() => ({
            passChangeSuccess: true,
          }))
    
          resetForm()
        }, 1000)
      }
    
      render() {
        return (
          <Formik
            initialValues={{
              currentPass: '',
              newPass: '',
              confirmPass: '',
            }}
            validationSchema={object().shape({
              currentPass: string().required('Current password is required'),
              newPass: string().required('New password is required'),
              confirmPass: string()
                .oneOf([ref('newPass')], 'Passwords do not match')
                .required('Password is required'),
            })}
            onSubmit={(
              { currentPass, newPass, confirmPass },
              { setSubmitting, resetForm }
            ) =>
              this._handleSubmit({
                currentPass,
                newPass,
                confirmPass,
                setSubmitting,
                resetForm,
              })
            }
            render={props => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                isSubmitting,
              } = props
              return isSubmitting ? (
                <Spinner />
              ) : (
                <Paper className="form form--wrapper" elevation={10}>
                  <form className="form" onSubmit={handleSubmit}>
                    <FormControl fullWidth margin="dense">
                      <InputLabel
                        htmlFor="password-current"
                        error={Boolean(touched.currentPass && errors.currentPass)}
                      >
                        {'Current Password'}
                      </InputLabel>
                      <Input
                        id="password-current"
                        name="currentPass"
                        type="password"
                        value={values.currentPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.currentPass && errors.currentPass)}
                      />
                      <FormHelperText
                        error={Boolean(touched.currentPass && errors.currentPass)}
                      >
                        {touched.currentPass && errors.currentPass
                          ? errors.currentPass
                          : ''}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      fullWidth
                      margin="dense"
                      error={Boolean(touched.newPass && errors.newPass)}
                    >
                      <InputLabel
                        htmlFor="password-new"
                        error={Boolean(touched.newPass && errors.newPass)}
                      >
                        {'New Password'}
                      </InputLabel>
                      <Input
                        id="password-new"
                        name="newPass"
                        type="password"
                        value={values.newPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.newPass && errors.newPass)}
                      />
                      <FormHelperText
                        error={Boolean(touched.newPass && errors.newPass)}
                      >
                        {touched.newPass && errors.newPass ? errors.newPass : ''}
                      </FormHelperText>
                    </FormControl>
                    <FormControl
                      fullWidth
                      margin="dense"
                      error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                      <InputLabel
                        htmlFor="password-confirm"
                        error={Boolean(touched.confirmPass && errors.confirmPass)}
                      >
                        {'Confirm Password'}
                      </InputLabel>
                      <Input
                        id="password-confirm"
                        name="confirmPass"
                        type="password"
                        value={values.confirmPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.confirmPass && errors.confirmPass)}
                      />
                      <FormHelperText
                        error={Boolean(touched.confirmPass && errors.confirmPass)}
                      >
                        {touched.confirmPass && errors.confirmPass
                          ? errors.confirmPass
                          : ''}
                      </FormHelperText>
                    </FormControl>
                    <Button
                      type="submit"
                      variant="raised"
                      color="primary"
                      disabled={Boolean(!isValid || isSubmitting)}
                      style={{ margin: '16px' }}
                    >
                      {'Reset Password'}
                    </Button>
                  </form>
                  {this._renderModal()}
                </Paper>
              )
            }}
          />
        )
      }
} */

import React,{useState} from 'react';
import * as l from './ResetFormElement';
import TextField from './shared/Form Elements/TextField';
import { toast } from 'react-hot-toast';
import submitForm from '../hooks/submitForm';
import { useParams } from 'react-router-dom';


export default function ResetForm() {

  const{token}=useParams()

  const[pwd,setPwd]=useState('');
  const[pwdConfirm,setPwdConfirm]=useState('');

  const onSubmit=async e=>{
    e.preventDefault();
// alert(token)

toast.promise(
  submitForm(`/api/v1/auth/resetPassword/${token}`,{password:pwd,passwordConfirm:pwdConfirm},'post',{}),
  {
    loading: 'Resetting password...',
    success: (data) => `Password reset successfully `,
    error: (err) => {
      if (!err.response.data.message) {
        return 'Something went wrong. Try again.';
      }
      return `${err?.response?.data?.message?.toString()}`;
    },
  },
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      fontSize: '1.7rem',
    },
  }
);



  }
  return (
    <l.MainContainer>
      <l.LoginContainer onSubmit={onSubmit}>
        <l.LoginName>Password Reset</l.LoginName>
        <l.LoginDes>
        Type new password and confirm it
        </l.LoginDes>
         
        <l.EmailInputContainer>

<TextField value={pwd} setValue={setPwd} placeholder='  Enter new password here'/>
</l.EmailInputContainer>
        <l.EmailInputContainer>

<TextField value={pwdConfirm} setValue={setPwdConfirm} placeholder='  Confirm new password here'/>
</l.EmailInputContainer>
         
         <l.LoginButton selected={true}>Continue</l.LoginButton>


      </l.LoginContainer>

    </l.MainContainer>
  )
}

