import React, { useState } from 'react';
import * as r from './CreateReviewFormElements';
import ReactStars from 'react-rating-stars-component';
import { render } from 'react-dom';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import FormButton from './../../shared/Form Elements/FormButton';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const CreateReviewForm = ({ tourId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');

  const [locationRating, steLocationRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);

  const handleServiceRating = (newRating) => {
    setServiceRating(newRating);
  };
  const handlelocationRating = (newRating) => {
    steLocationRating(newRating);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      review: reviewText,
      locationRating,
      serviceRating,
      tour: tourId,
      reviewType: 'tour',
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

    // setName('');
    // setEmail('');
    // setReviewText('');
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
                Location
              </r.Text>
              <r.StarComponentCOntainer>
                <ReactStars
                  count={5}
                  onChange={handlelocationRating}
                  size={30}
                  activeColor="var(--main-color)"
                  char={<BsFillStarFill />}
                />
              </r.StarComponentCOntainer>
            </r.StarRow>
            {/* <r.StarRow>
                            <r.Text fontsize='2rem' color='#444' fontweight='500' margin='2rem 0' >
                                Price
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
            <r.StarRow>
              <r.Text
                fontsize="2rem"
                color="#444"
                fontweight="500"
                margin="2rem 0"
              >
                Service
              </r.Text>
              <r.StarComponentCOntainer>
                <ReactStars
                  count={5}
                  onChange={handleServiceRating}
                  size={30}
                  activeColor="var(--main-color)"
                  char={<BsFillStarFill />}
                />
              </r.StarComponentCOntainer>
            </r.StarRow>
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
