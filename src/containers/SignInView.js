import React from 'react';
import SignInForm from './SignInForm';
import Carousel from './Carousel';
import { SAMPLE_IMAGES } from '../constants/sampleCarouselImages';

const SignInView = () => {
  return (
    <div className="signin-view">
      <SignInForm />
      <Carousel imgUrls={ SAMPLE_IMAGES } />
    </div>
  );
};

export default SignInView;