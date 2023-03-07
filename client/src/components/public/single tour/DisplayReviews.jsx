import React from 'react'
import * as d from './DisplayReviewsElements';
import defaultUser from './../../../images/default_user_avatar.png'
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
const DisplayReviews = () => {
    return (
        <>
            <d.Section>
                <d.Container>
                    <d.ReviewContainerTopBar>
                        <d.Text fontsize='1.7rem' color='#555' fontweight='600' >
                            Reviewed by 03 customer(s)
                        </d.Text>
                        
                    </d.ReviewContainerTopBar>

                    <d.ReviewRowContainer>
                        <d.ReviewRowContainerLeft>
                            <d.AvatarContainer img={defaultUser} />
                            <d.Text fontsize='1.7rem' color='#444' fontweight='600' margin='2rem 0 0' >
                                Jane Doe
                            </d.Text>
                        </d.ReviewRowContainerLeft>
                        <d.ReviewRowContainerRight>
                            <d.ReviewStarsContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsFillStarFill />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsFillStarFill />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsFillStarFill />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsStarHalf />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsStar />
                                </d.IconContainer>
                            </d.ReviewStarsContainer>

                            <d.Text fontsize='1.7rem' color='#444' fontweight='600' margin='2rem 0 0' >
                                Nice Tour
                            </d.Text>

                            <d.ReviewDateRow>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='#777' >
                                    <MdOutlineDateRange />
                                </d.IconContainer>
                                <d.Text fontsize='1.7rem' color='#777' fontweight='500' margin='0 0 0 1rem' >
                                    September 27, 2022
                                </d.Text>
                            </d.ReviewDateRow>
                        </d.ReviewRowContainerRight>
                    </d.ReviewRowContainer>

                    <d.ReviewRowContainer>
                        <d.ReviewRowContainerLeft>
                            <d.AvatarContainer img={defaultUser} />
                            <d.Text fontsize='1.7rem' color='#444' fontweight='600' margin='2rem 0 0' >
                                Mathew Perry
                            </d.Text>
                        </d.ReviewRowContainerLeft>
                        <d.ReviewRowContainerRight>
                            <d.ReviewStarsContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsFillStarFill />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsFillStarFill />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsStarHalf />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsStar />
                                </d.IconContainer>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                    <BsStar />
                                </d.IconContainer>
                            </d.ReviewStarsContainer>

                            <d.Text fontsize='1.7rem' color='#444' fontweight='600' margin='2rem 0 0' >
                                Nothing to complain. Great for the price
                            </d.Text>

                            <d.ReviewDateRow>
                                <d.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='#777' >
                                    <MdOutlineDateRange />
                                </d.IconContainer>
                                <d.Text fontsize='1.7rem' color='#777' fontweight='500' margin='0 0 0 1rem' >
                                    March 10, 2020
                                </d.Text>
                            </d.ReviewDateRow>
                        </d.ReviewRowContainerRight>
                    </d.ReviewRowContainer>


                </d.Container>
            </d.Section>
        </>
    );
}

export default DisplayReviews