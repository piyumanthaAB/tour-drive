import React, { useState,useRef,useEffect } from 'react'
import styled from 'styled-components';
import { AiOutlineArrowDown ,AiOutlineArrowUp} from "react-icons/ai";

const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props => props.lineheight || '2.5rem'};
    
`;

const IconContainer = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
`;

const Container = styled.div`
    width:100% ;
    ${'' /* padding:1rem 2rem ; */}
    position: relative;
    ${'' /* background-color:#eee ; */}
`;

const HeaderContainer = styled.div`
    width:100% ;
    min-height:5rem ;
    ${'' /* background-color:red ; */}
    border:1px solid #ccc ;
    border-radius:1rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    padding:1.5rem 3rem ;

    :hover{
        cursor: pointer;
    }

`;

const BodyContainer = styled.div`
    width:100% ;
    ${'' /* min-height:30rem ; */}
    background-color:#fff;
    margin:2rem 0 ;
    border-radius:1rem ;
    padding:1rem 0 ;
    border:1px solid #ccc ;
    position:absolute ;
    top:80% ;
    left:0% ;
    display:${props=>props.open?'block':'none'} ;

`;


const ItemContainer = styled.div`
    width:100% ;
    ${'' /* background-color: blue; */}
    padding:1rem 2rem ;
    margin:2rem 0 ;
    transition:all 0.3s ;

    :hover{
        cursor: pointer;
        background-color:#ccc ;
    }
`;

const DropDown = ({dropDownValues,currentDropdownVal,setCurrentDropdownVal}) => {

    const [open, setOpen] = useState(false);
    // const [currentVal, setCurrentVal] = useState('Select Item');

    const dropDownRef = useRef(null);

    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    },[])

    return (
        <Container>
            <HeaderContainer ref={dropDownRef} onClick={()=>setOpen(!open)}>
                <Text fontweight='600' fontsize='1.6rem'>{ currentDropdownVal}</Text>
                <IconContainer fontsize='2rem' margin='0 0 0 auto' >
                    {open?<AiOutlineArrowUp/>:<AiOutlineArrowDown/>}
                    
                </IconContainer>
            </HeaderContainer>
            <BodyContainer open={open}>
                {/* <ItemContainer>
                    <Text onClick={e => {
                        setCurrentDropdownVal(e.target.outerText)
                    }} fontsize='1.6rem'>Item 1</Text>
                </ItemContainer>
                <ItemContainer>
                    <Text onClick={e=>setCurrentDropdownVal(e.target.outerText)} fontsize='1.6rem'>Item 2</Text>
                </ItemContainer>
                <ItemContainer>
                    <Text onClick={e=>setCurrentDropdownVal(e.target.outerText)} fontsize='1.6rem'>Item 3</Text>
                </ItemContainer> */}
                {dropDownValues.map(item=><ItemContainer>
                    <Text onClick={e=>setCurrentDropdownVal(e.target.outerText)} fontsize='1.6rem'>{item} </Text>
                </ItemContainer>)}
                
            </BodyContainer>
          
        </Container>
    )
}

export default DropDown