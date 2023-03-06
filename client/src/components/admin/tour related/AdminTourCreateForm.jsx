import React, { useState } from 'react'
import DropDown from '../../shared/Form Elements/DropDown';
import Label from '../../shared/Form Elements/Label';
import TextArea from '../../shared/Form Elements/TextArea';
import TextField from '../../shared/Form Elements/TextField';
import * as f from './AdminTourCreateFormElements';

const AdminTourCreateForm = () => {

  const [guideOne, setGuideOne] = useState('Select guide one');
  const [guideTwo, setGuideTwo] = useState('Select guide two');

  const availableGuides = ['mark', 'john', 'mathew'];

  return (
    <>
      <f.Container>
        <f.FormTitle>
          Add Tour
        </f.FormTitle>
        <f.Form>
          
          <f.FormGroup>
            <Label labelText={'Tour Name'} />
            <TextField placeholder={'Enter tour name here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Tour Price'} />
            <TextField placeholder={'Enter tour price here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Tour Cover'} />
            <TextField type='file' placeholder={'Upload tour cover image here'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Images'} />
            <TextField type='file' placeholder={'Upload tour gallery images here'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Age Limit'} />
            <TextField type='text' placeholder={'Enter tour maximum age limit here'} />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Capacity'} />
            <TextField type='text' placeholder={'Enter maximum no of seats for this tour'} />
          </f.FormGroup>
          
          <f.FormGroup>
            <Label labelText={'Select Tour Guide 1'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideOne}
              setCurrentDropdownVal={setGuideOne}

            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select Tour Guide 2'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Start Date'} />
            <f.DateInput type={'date'}/>
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'End Date'} />
            <f.DateInput type={'date'}/>
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Category'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Select Tour type'} />
            <DropDown
              dropDownValues={ availableGuides}
              currentDropdownVal={guideTwo}
              setCurrentDropdownVal={setGuideTwo}
            />
          </f.FormGroup>

          <f.FormGroup>
            <Label labelText={'Tour Locations'} />
            <TextArea rows={10} placeholder='Enter coordinates of the locations here' />
          </f.FormGroup>
          <f.FormGroup>
            <Label labelText={'Tour Description'} />
            <TextArea rows={10} placeholder='Enter tour description here' />
          </f.FormGroup>

          <f.FormGroup>

            <f.SubmitBtn>Add Tour</f.SubmitBtn>
            
          </f.FormGroup>
          

        </f.Form>
      </f.Container>
    </>
  )
}

export default AdminTourCreateForm