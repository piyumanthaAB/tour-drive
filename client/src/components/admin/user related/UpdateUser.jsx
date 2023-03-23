import React,{useState} from 'react'
import Label from '../../shared/Form Elements/Label.jsx';
import * as n from './UpdateUserElements.js';
import TextField from '../../shared/Form Elements/TextField.jsx';
import TextArea from '../../shared/Form Elements/TextArea';
import DropDown from '../../shared/Form Elements/DropDown.jsx';

const UpdateUser = () => {

    const [guideOne, setGuideOne] = useState('Select user role');
    const availableGuides = ['driver', 'tour_guide'];

    return (
        <>
            <n.Container>
                <n.FormTitle>Update User</n.FormTitle>

                <n.Form>
                    
                    <n.FormGroup>
                        <Label labelText={'First Name'} />
                        <TextField placeholder={'Enter user\'s first name here'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Last Name'} />
                        <TextField placeholder={'Enter user\'s last name here'} />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Email'} />
                        <TextField placeholder={'Enter email here'} />
                    </n.FormGroup>
          
          
          
                    <n.FormGroup>
                        <Label labelText={'Select user role'} />
                        <DropDown
                            dropDownValues={availableGuides}
                            currentDropdownVal={guideOne}
                            setCurrentDropdownVal={setGuideOne}

                        />
                    </n.FormGroup>

                    <n.FormGroup>
                        <Label labelText={'Age'} />
                        <TextField placeholder={'Enter age here'} />
                    </n.FormGroup>
                    
                    
                    <n.FormGroup>
                        <Label labelText={'Mobile'} />
                        <TextField placeholder={'Enter mobile number here'} />
                    </n.FormGroup>

                    
                    

                    <n.FormGroup>

                        <n.SubmitBtn>Update user</n.SubmitBtn>
                        <n.SubmitBtn color='#333' type='reset' >Clear</n.SubmitBtn>
                    </n.FormGroup>


                </n.Form>
            </n.Container>
        </>
    );
}

export default UpdateUser