import React from 'react'
import * as f from './FooterElements';
import { BsTwitter,BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FiPhoneCall,FiMail } from "react-icons/fi";

const Footer = ({color,textColor,headingColor,iconColor}) => {
    return (
        <>
            <f.FooterSection color={color} >
                <f.Container color={color} >
                    <f.ColumOne>
                        <f.FooterBrandContainer>

                            <f.FooterBrand />
                        </f.FooterBrandContainer>
                        <f.Desc textColor={textColor}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sed? Voluptatem omnis repudiandae eos nihil deserunt atque quis .
                        </f.Desc>
                        <f.IconsContainer >
                            <f.Icon iconColor={iconColor}><BsTwitter /></f.Icon>
                            <f.Icon iconColor={iconColor}><FaFacebookF /></f.Icon>
                            <f.Icon iconColor={iconColor}><BsInstagram /></f.Icon>
                            <f.Icon iconColor={iconColor}><FaPinterest /></f.Icon>
                        </f.IconsContainer>
                    </f.ColumOne>
                    <f.Col>
                        <f.FooterTitle headingColor={headingColor} >Support</f.FooterTitle>
                        <f.FooterLink textColor={textColor} to='/'>Customer Support</f.FooterLink>
                        <f.FooterLink textColor={textColor} to='/'>Privacy & Policy</f.FooterLink>
                        <f.FooterLink textColor={textColor} to='/'>Contact Channels</f.FooterLink>

                    </f.Col>
                    <f.Col>
                        <f.FooterTitle headingColor={headingColor}>About Us</f.FooterTitle>
                        <f.FooterLink textColor={textColor} to='/'>Our Story</f.FooterLink>
                        <f.FooterLink textColor={textColor} to='/'>Travel Blog & Tips</f.FooterLink>
                        <f.FooterLink textColor={textColor} to='/'>Working With Us</f.FooterLink>
                        <f.FooterLink textColor={textColor} to='/'>Be Our Partner</f.FooterLink>

                    </f.Col>
                    <f.Col>
                        <f.FooterTitle headingColor={headingColor}>Contact Info</f.FooterTitle>
                        <f.FooterAddressInfoItemsContainer>
                            <f.FooterLink textColor={textColor} to='/'>455 West Orchard Street <br />Kings Mountain, NC 280867</f.FooterLink>

                        </f.FooterAddressInfoItemsContainer>
                        <f.FooterContactInfoItemsContainer>
                            <f.ContactIcon><FiPhoneCall /></f.ContactIcon>
                            <f.FooterLink textColor={textColor} to='/'>+088 (006) 992-99-10</f.FooterLink>

                        </f.FooterContactInfoItemsContainer>
                        <f.FooterContactInfoItemsContainer>
                            <f.ContactIcon><FiMail /></f.ContactIcon>
                            <f.FooterLink textColor={textColor} to='/shared-elemets-preview'>tourdrive.info@gmail.com</f.FooterLink>

                        </f.FooterContactInfoItemsContainer>

                    </f.Col>
                </f.Container>
            </f.FooterSection>
        </>
    );
}

export default Footer