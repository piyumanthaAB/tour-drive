import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { render } from 'react-dom';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import FormButton from './../../shared/Form Elements/FormButton';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

import * as r from './CreateReviewFormElements';

const CreateReviewForm = ({ vehicleId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');

  const [vehicleRating, steVehicleRating] = useState(0);
  const [driverRating, setDriverRating] = useState(0);

  const handleVehicleRating = (newRating) => {
    steVehicleRating(newRating);
  };
  const handleDriverRating = (newRating) => {
    setDriverRating(newRating);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      review: reviewText,
      vehicleRating,
      driverRating,
      vehicle: vehicleId,
      reviewType: 'vehicle',
    };

    await toast.promise(
      submitForm('/api/v1/reviews', formData, 'post', {}),
      {
        loading: 'Creating Review...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success';
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      }
    );
  };
  return (
    <>
      <r.Section>
        <r.Container>
          <r.Text fontsize="3rem" color="#444" fontweight="500" margin="0 0 0">
            LEAVE FEEDBACK ABOUT THIS
          </r.Text>
          <r.Text
            fontsize="1.7rem"
            color="#444"
            fontweight="500"
            margin="2rem 0"
          >
            Your email address will not be published.
          </r.Text>
          <r.ReviewStarSectionContainer>
            <r.StarRow>
              <r.Text
                fontsize="2rem"
                color="#444"
                fontweight="500"
                margin="2rem 0"
              >
                Driver
              </r.Text>
              <r.StarComponentCOntainer>
                <ReactStars
                  count={5}
                  onChange={handleDriverRating}
                  size={30}
                  activeColor="var(--main-color)"
                  char={<BsFillStarFill />}
                />
              </r.StarComponentCOntainer>
            </r.StarRow>
            <r.StarRow>
              <r.Text
                fontsize="2rem"
                color="#444"
                fontweight="500"
                margin="2rem 0"
              >
                Vehicle
              </r.Text>
              <r.StarComponentCOntainer>
                <ReactStars
                  count={5}
                  onChange={handleVehicleRating}
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
              <r.Input
                type={'text'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </r.FormGroup>
            <r.FormGroup>
              <r.Input
                type={'text'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </r.FormGroup>
            <r.FormGroup>
              <r.InputArea
                rows={10}
                type={'text'}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Type Review Here"
              />
            </r.FormGroup>
            <r.FormBtnCOntainer>
              <FormButton
                btntext={'Submit Review'}
                textcolor="#fff"
                fontweight={'600'}
              />
            </r.FormBtnCOntainer>
          </r.ReviewForm>
        </r.Container>
      </r.Section>
    </>
  );
};

export default CreateReviewForm;
