import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import FormButton from './../../shared/Form Elements/FormButton'

import * as r from './CreateReviewFormElements';

const CreateReviewForm = () => {

    const ratingChanged = (newRating) => {
        console.log({newRating});
    };
    
    const submitReview = (e) => {
        e.preventDefault();

        alert('for submitted')
    }
  return (
      <>
          <r.Section>
                <r.Container>
                    <r.Text fontsize='3rem' color='#444' fontweight='500' margin='0 0 0' >
                        LEAVE FEEDBACK ABOUT THIS
                    </r.Text>
                    <r.Text fontsize='1.7rem' color='#444' fontweight='500' margin='2rem 0' >
                        Your email address will not be published.
                    </r.Text>
                    <r.ReviewStarSectionContainer>
                        <r.StarRow>
                            <r.Text fontsize='2rem' color='#444' fontweight='500' margin='2rem 0' >
                                Driver
                            </r.Text>
                            <r.StarComponentCOntainer>

                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={30}
                                    activeColor="var(--main-color)"
                                    char={<BsFillStarFill />}
                                    
                                />
                            </r.StarComponentCOntainer>
                        </r.StarRow>
                        <r.StarRow>
                            <r.Text fontsize='2rem' color='#444' fontweight='500' margin='2rem 0' >
                                Vehicle
                            </r.Text>
                            <r.StarComponentCOntainer>

                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={30}
                                    activeColor="var(--main-color)"
                                    char={<BsFillStarFill />}
                                    
                                />
                            </r.StarComponentCOntainer>
                        </r.StarRow>
                        {/* <r.StarRow>
                            <r.Text fontsize='2rem' color='#444' fontweight='500' margin='2rem 0' >
                                Service
                            </r.Text>
                            <r.StarComponentCOntainer>

                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={30}
                                    activeColor="var(--main-color)"
                                    char={<BsFillStarFill />}
                                    
                                />
                            </r.StarComponentCOntainer>
                        </r.StarRow> */}
                    </r.ReviewStarSectionContainer>


                    <r.ReviewForm onSubmit={submitReview}>
                        <r.FormGroup>
                            <r.Input type={'text'} placeholder='Name' />
                        </r.FormGroup>
                        <r.FormGroup>
                            <r.Input type={'text'} placeholder='Email' />
                        </r.FormGroup>
                        <r.FormGroup>
                            <r.InputArea rows={10} type={'text'} placeholder='Type Review Here' />
                        </r.FormGroup>
                        <r.FormBtnCOntainer>

                            <FormButton btntext={'Submit Review'} textcolor='#fff' fontweight={'600'} />
                        </r.FormBtnCOntainer>
                    </r.ReviewForm>

                </r.Container>
            </r.Section>
    </>
  )
}

export default CreateReviewForm