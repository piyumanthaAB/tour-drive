import React from 'react';
import * as b from './CustomTourBannerElements';

const CustomTourBanner = () => {
  return (
    <>
      <b.Container>
        <b.HeadingText>
          Need more personalized tours? Sign Up with TourDrive and make your own
          customized tour with us.
        </b.HeadingText>
        <b.SignUpBtn to={'/signup'}>Sign Up</b.SignUpBtn>
      </b.Container>
    </>
  );
};

export default CustomTourBanner;
