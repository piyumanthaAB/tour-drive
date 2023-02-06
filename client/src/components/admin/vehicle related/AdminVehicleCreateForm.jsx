import React from 'react'
import * as n from './AdminVehicleCreateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';


const AdminVehiclecCreateForm = () => {
    return(
        <n.FormContainer>
            <n.Form>
                <n.FormRow>
                    <n.FormGroup>
                        <Label labelText={'Vehicle No'}/>
                        <TextField placeholder={'Enter Vehicle No'} />
                    </n.FormGroup>
                    <n.FormGroup>
                        <Label labelText={'Vehicle Type'}/>
                        <TextField placeholder={'Enter Vehicle Type'}/>
                    </n.FormGroup>
                </n.FormRow>

                <n.FormRow>
                    <n.FormGroup>
                        <Label labelText={'Vehicle Model'}/>
                        <TextField placeholder={'Enter Vehicle Model'}/>
                    </n.FormGroup>
                </n.FormRow>
                <n.FormSubmitBtnRow>
                    <n.FormSubmitBtnContainer>
                        <FormButton btntext={'add vehicle'} />
                    </n.FormSubmitBtnContainer>
                </n.FormSubmitBtnRow>
            </n.Form>
        </n.FormContainer>
    );
}

export default AdminVehiclecCreateForm