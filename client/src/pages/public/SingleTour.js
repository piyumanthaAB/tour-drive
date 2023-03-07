import React from 'react'
import CreateReviewForm from '../../components/public/single tour/CreateReviewForm';
import DisplayReviews from '../../components/public/single tour/DisplayReviews';
import ReviewSummary from '../../components/public/single tour/ReviewSummary';
import SigleTourHeader from '../../components/public/single tour/SigleTourHeader';
import SingleTourIncludes from '../../components/public/single tour/SingleTourIncludes';
import SingleTourMap from '../../components/public/single tour/SingleTourMap';
import SIngleTourOverview from '../../components/public/single tour/SIngleTourOverview';
import TourPlan from '../../components/public/single tour/TourPlan';

const SingleTour = () => {
    return (
        <>
            <SigleTourHeader />
            <SIngleTourOverview />
            <SingleTourIncludes />
            <SingleTourMap />
            <TourPlan />
            <ReviewSummary />
            <DisplayReviews />
            <CreateReviewForm/>
        </>
    );
}

export default SingleTour