import React from 'react'
import * as n1 from './AdminVehicleUpdateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';

const AdminVehicleUpdateForm = () => {
    return(
        <n1.FormContainer>
            <n1.Form>
                <n1.FormRow>
                    <n1.FormGroup>
                        <Label labelText={'Vehicle No'}/>
                        <TextField placeholder={'Enter Vehicle No'} />
                    </n1.FormGroup>
                    <n1.FormGroup>
                        <Label labelText={'Vehicle Type'}/>
                        <TextField placeholder={'Enter Vehicle Type'}/>
                    </n1.FormGroup>
                </n1.FormRow>

                <n1.FormRow>
                    <n1.FormGroup>
                        <Label labelText={'Vehicle Model'}/>
                        <TextField placeholder={'Enter Vehicle Model'}/>
                    </n1.FormGroup>
                </n1.FormRow>
                <n1.FormSubmitBtnRow>
                    <n1.FormSubmitBtnContainer>
                        <FormButton btntext={'add vehicle'} />
                    </n1.FormSubmitBtnContainer>
                </n1.FormSubmitBtnRow>
            </n1.Form>
        </n1.FormContainer>
    )
}

export default AdminVehicleUpdateForm