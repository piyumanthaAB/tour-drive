import React from 'react'
import Label from '../../shared/Form Elements/Label';
import TextField from '../../shared/Form Elements/TextField';
import TextArea from '../../shared/Form Elements/TextArea';
import * as u from './UpdateTourElements';

const UpdateTour = () => {
    return (
        <>
            <u.Container>
              

                <u.FormTitle>
                    Update Tour
                </u.FormTitle>

                <u.Form>
                  
                    <u.FormGroup>
                        <Label labelText={'Tour Name'} />
                        <TextField placeholder={'Update Name'} />
                    </u.FormGroup>
                    <u.FormGroup>
                        <Label labelText={'Tour Price'} />
                        <TextField placeholder={'Update price'} />
                    </u.FormGroup>
                  
                    <u.FormGroup>
                        <Label labelText={'Tour Cover'} />
                        <TextField type='file' placeholder={'Upload tour cover image here'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'Tour Images'} />
                        <TextField type='file' placeholder={'Upload tour gallery images here'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'Age Limit'} />
                        <TextField type='text' placeholder={'Enter tour maximum age limit here'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'Capacity'} />
                        <TextField type='text' placeholder={'Enter maximum no of seats for this tour'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'Start Date'} />
                        <u.DateInput type={'date'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'End Date'} />
                        <u.DateInput type={'date'} />
                    </u.FormGroup>

                    <u.FormGroup>
                        <Label labelText={'Tour Locations'} />
                        <TextArea rows={10} placeholder='Enter coordinates of the locations here' />
                    </u.FormGroup>
                    <u.FormGroup>
                        <Label labelText={'Tour Description'} />
                        <TextArea rows={10} placeholder='Enter tour description here' />
                    </u.FormGroup>

                </u.Form>

            </u.Container>
        </>
    );
}

export default UpdateTour