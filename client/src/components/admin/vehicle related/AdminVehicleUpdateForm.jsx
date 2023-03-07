import React, { useState } from 'react'
import * as n from './AdminVehicleUpdateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import TextArea from '../../shared/Form Elements/TextArea.jsx';

const AdminVehicleUpdateForm = () => {

    const [transmission, setTransmission] = useState('Select Transmission')
    const [type, setType] = useState('Select vehicle Type')
    const [driver, setDriver] = useState('Select driver')
    
    const transmissionVals=['auto','manuel']
    const typeVals=['car','Van','Bike']
    const driverVals=['driver_1','driver_2','driver_3']
    return(
        <>
            <n.Container>
                <n.FormTitle>Update Vehicle</n.FormTitle>

                <n.Form>
                    
                    <n.FormGroup>
                        <Label labelText={'Vehicle No'} />
                        <TextField placeholder={'Enter vehicle number'} />
                    </n.FormGroup>
                    
                    <n.FormGroup>
                        <Label labelText={'Vehicle Transmission'} />
                        <DropDown
                            dropDownValues={transmissionVals }
                            currentDropdownVal={transmission}
                            setCurrentDropdownVal={setTransmission}
                        />
                    </n.FormGroup>

                    
                    <n.FormGroup>
                        <Label labelText={'Vehicle Brand'} />
                        <TextField placeholder={'Enter vehicle brand'} />
                    </n.FormGroup>
                    
                    <n.FormGroup>
                        <Label labelText={'Vehicle Model'} />
                        <TextField placeholder={'Enter vehicle model'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Vehicle Cover'} />
                        <TextField type='file' placeholder={'Upload vehicle cover image here'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Vehicle Images'} />
                        <TextField type='file' placeholder={'Upload vehicle  images here'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Vehicle type'} />
                        <DropDown
                            dropDownValues={typeVals }
                            currentDropdownVal={type}
                            setCurrentDropdownVal={setType}
                        />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'No 0f seats'} />
                        <TextField placeholder={'Enter number of seats'} />
                    </n.FormGroup>
                    <n.FormGroup>
                        <Label labelText={'Current Milage'} />
                        <TextField placeholder={'Enter current milage'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Assign Driver'} />
                        <DropDown
                            dropDownValues={driverVals }
                            currentDropdownVal={driver}
                            setCurrentDropdownVal={setDriver}
                        />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Vehicle description'} />
                        <TextArea rows={10} placeholder={'Enter vehicle description'} />
                    </n.FormGroup>
                    <n.FormGroup>
                        <Label labelText={'Vehicle features'} />
                        <TextArea rows={10} placeholder={'Enter vehicle features'} />
                    </n.FormGroup>

                    <n.FormGroup>

                        <n.SubmitBtn>Update vehicle</n.SubmitBtn>
                        <n.SubmitBtn color='#333' type='reset' >Clear</n.SubmitBtn>

                    </n.FormGroup>


                </n.Form>
            </n.Container>
        </>
    )
}

export default AdminVehicleUpdateForm