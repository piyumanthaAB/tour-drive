import React, { useState } from 'react'
import styled from 'styled-components'
import DropDown from '../components/shared/Form Elements/DropDown';
import FormButton from '../components/shared/Form Elements/FormButton';
import Label from '../components/shared/Form Elements/Label';
import PasswordField from '../components/shared/Form Elements/PasswordField';
import TextArea from '../components/shared/Form Elements/TextArea';
import TextField from '../components/shared/Form Elements/TextField';

const Container = styled.div`
    width:100% ;
    min-height:50rem ;
    ${'' /* background-color:#333 ; */}
    padding:3rem 10rem ;
    display:flex ;
    flex-wrap:wrap ;
`;

const ElementContainer = styled.div`
    width:${props=>props.length || '200px'} ;
    margin: 2rem 0;
    background-color:#fff ;
    padding:3rem ;
`;

const TextDiv = styled.div`
    width:100% ;
`;

const SharedElementsPreview = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [txtArea, setTxtArea] = useState('');

    const [currentDropdownVal, setCurrentDropdownVal] = useState('select item from list');

    const dropDownValues = [
        'Item 1 🤖','Item 2 🚩','Item 3 🫡','Item 4 💥'
    ]

    return (
        <>
            <Container>
                <TextDiv >
                <h1>This page is for preview shared form elemnts and other shared elements for this project</h1>
                <br /><br />
                <h2>🚩 Email Text field typed data showing here 🚩: {email}</h2>
                <br /><br />
                <h2>💥 Password Text field typed data showing here 💥: {pwd}</h2>
                <br /><br />
                <h2>👉 TextArea Text field typed data showing here 👉: {txtArea}</h2>
                <br /><br />
                <h2>🤖 Dropdown selected data showing here 🤖: {currentDropdownVal}</h2>
                </TextDiv>
                

               

                <ElementContainer length={'500px'}>
                    <Label labelText={'Email'} />
                    <TextField placeholder={'email'} value={email} setValue={setEmail} />
                  
                </ElementContainer>

                <ElementContainer length={'500px'}>
                    <Label labelText={'Password'} />
                    <PasswordField placeholder={'Password'} value={pwd} setValue={setPwd}  />
                  
                </ElementContainer>
                
                <ElementContainer length={'500px'}>
                    <FormButton btntext={'This is button text'} onClick={()=>alert('button clicked')} />
                  
                </ElementContainer>

                <ElementContainer length={'500px'}>
                    <TextArea rows={2} value={txtArea} setValue={setTxtArea}  placeholder={'description'} />
                  
                </ElementContainer>

                <ElementContainer length={'500px'}>
                    <DropDown dropDownValues={dropDownValues} currentDropdownVal={currentDropdownVal} setCurrentDropdownVal={setCurrentDropdownVal} />
                  
                </ElementContainer>

              
            </Container>
        </>
    );
}

export default SharedElementsPreview