import React from 'react'
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import * as r from './ReviewSummaryElements';

const ReviewSummary = () => {
  return (
      <>
          <r.Section>
                <r.Container>
                    <r.Text fontsize='3rem' fontweight='600' color='#222' >3 Reviews for this vehicle</r.Text>
                    <r.ReviewsContainer>
                        <r.Left>
                            <r.LeftTop>
                                <r.LeftTopLeft>
                                    <r.Text fontsize='2rem' fontweight='600' color='#222' >4.2/5</r.Text>
                                    <r.ReviewStarsContainer>
                                        <r.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)' >
                                            <BsFillStarFill />
                                        </r.IconContainer>
                                        <r.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)'>
                                            <BsFillStarFill />
                                        </r.IconContainer>
                                        <r.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)'>
                                            <BsFillStarFill />
                                        </r.IconContainer>
                                        <r.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)'>
                                            <BsStarHalf />
                                        </r.IconContainer>
                                        <r.IconContainer margin='0 0.2rem' fontsize='1.8rem' color='var(--main-color)'>
                                            <BsStar />
                                        </r.IconContainer>
                                    </r.ReviewStarsContainer>
                                  
                                </r.LeftTopLeft>
                                <r.LeftTopRight>
                                    <r.Text fontsize='1.8rem' fontweight='600' color='#222' >Based on 3 rating(s)</r.Text>
                                </r.LeftTopRight>
                            </r.LeftTop>
                            <r.LeftBottom>
                                <r.IconContainer fontsize='3rem' bacgroundcolor='#eee' borderradius='50%' padding='2rem'>
                                    <AiOutlineLike />
                                </r.IconContainer>
                                <r.Text fontsize='1.7rem' fontweight='600' color='#222' margin='0 0 0 2rem'>
                                    03 Customer(s) recommended this item
                                </r.Text>
                            </r.LeftBottom>
                        </r.Left>
                        <r.Right>
                            <r.ReviewRowGroup>
                                <r.Text fontsize='1.7rem' margin='0 0 1rem 0' fontweight='500' color='#222' >Driver</r.Text>
                                <r.Percentage><r.Text fontsize='1.2rem' margin='0 0 0 0' fontweight='600' color='#eee' >60%</r.Text></r.Percentage>
                                <r.ReviewRow percentage='60%'/>
                            </r.ReviewRowGroup>
                            <r.ReviewRowGroup>
                                <r.Text fontsize='1.7rem' margin='0 0 1rem 0' fontweight='500' color='#222' >Vehicle</r.Text>
                                <r.Percentage><r.Text fontsize='1.2rem' margin='0 0 0 0' fontweight='600' color='#eee' >70%</r.Text></r.Percentage>

                                <r.ReviewRow percentage='70%'/>
                            </r.ReviewRowGroup>
                            {/* <r.ReviewRowGroup>
                                <r.Text fontsize='1.7rem' margin='0 0 1rem 0' fontweight='500' color='#222' >Service</r.Text>
                                <r.Percentage><r.Text fontsize='1.2rem' margin='0 0 0 0' fontweight='600' color='#eee' >90%</r.Text></r.Percentage>

                                <r.ReviewRow percentage='90%'/>
                            </r.ReviewRowGroup> */}
                        </r.Right>
                    </r.ReviewsContainer>
                </r.Container>
            </r.Section>
    </>
  )
}

export default ReviewSummary