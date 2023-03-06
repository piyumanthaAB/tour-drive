import React,{useState} from 'react'
import * as f from './AdminUserCreateFormElements.js';
import Label from '../../shared/Form Elements/Label.jsx';
import TextField from '../../shared/Form Elements/TextField.jsx';
import DropDown from '../../shared/Form Elements/DropDown.jsx';
import TextArea from '../../shared/Form Elements/TextArea.jsx';
import FormButton from '../../shared/Form Elements/FormButton.jsx';



const AdminUserCreateForm = () => {

    
    const [guideOne, setGuideOne] = useState('Select user role');
    const [guideTwo, setGuideTwo] = useState('Select guide two');
  
    const availableGuides = ['driver', 'tour_guide'];

    return (
        <>
            <f.Container>
                <f.FormTitle>
                    Add User
                </f.FormTitle>
                <f.Form>
          
                    <f.FormGroup>
                        <Label labelText={'First Name'} />
                        <TextField placeholder={'Enter user\'s first name here'} />
                    </f.FormGroup>
                    <f.FormGroup>
                        <Label labelText={'Last Name'} />
                        <TextField placeholder={'Enter user\'s last name here'} />
                    </f.FormGroup>
          
                    <f.FormGroup>
                        <Label labelText={'Email'} />
                        <TextField placeholder={'Enter email here'} />
                    </f.FormGroup>
          
          
          
                    <f.FormGroup>
                        <Label labelText={'Select user role'} />
                        <DropDown
                            dropDownValues={availableGuides}
                            currentDropdownVal={guideOne}
                            setCurrentDropdownVal={setGuideOne}

                        />
                    </f.FormGroup>

          
                    <f.FormGroup>
                        <Label labelText={'Age'} />
                        <TextField placeholder={'Enter age here'} />
                    </f.FormGroup>
                    
                    
                    <f.FormGroup>
                        <Label labelText={'Mobile'} />
                        <TextField placeholder={'Enter mobile number here'} />
                    </f.FormGroup>


         

                    <f.FormGroup>

                        <f.SubmitBtn>Add User</f.SubmitBtn>
            
                    </f.FormGroup>
          

                </f.Form>
            </f.Container>
        </>
    );
}

export default AdminUserCreateForm