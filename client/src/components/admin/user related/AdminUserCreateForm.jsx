import React from 'react'
import * as f from './AdminUserCreateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';



const AdminUserCreateForm = () => {

    


    return (
        <f.FormContainer>
            <f.Form>
                
                <f.FormRow>
                    <f.FormGroup>
                        <Label labelText={'First Name'} />
                        <TextField placeholder={'Enter first Name here'} />
                    </f.FormGroup>
                    <f.FormGroup>
                        <Label labelText={'Last Name'} />
                        <TextField placeholder={'Enter Last Name here'} />
                    </f.FormGroup>
                </f.FormRow>
                
                <f.FormRow>
                    <f.FormGroup>
                        <Label labelText={'Email'} />
                        <TextField placeholder={'Enter email here'} type={'email'} />
                    </f.FormGroup>
                    
                </f.FormRow>
                <f.FormSubmitBtnRow>
                    <f.FormSubmitBtnContainer>
                        <FormButton btntext={'add user'} />
                    </f.FormSubmitBtnContainer>
                    
                </f.FormSubmitBtnRow>

                

            </f.Form>
        </f.FormContainer>
    );
}

export default AdminUserCreateForm