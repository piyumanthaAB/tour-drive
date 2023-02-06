import React from 'react'
import SigleTourHeader from '../../components/public/single tour/SigleTourHeader';
import SingleTourIncludes from '../../components/public/single tour/SingleTourIncludes';
import SingleTourMap from '../../components/public/single tour/SingleTourMap';
import SIngleTourOverview from '../../components/public/single tour/SIngleTourOverview';

const SingleTour = () => {
    return (
        <>
            <SigleTourHeader />
            <SIngleTourOverview />
            <SingleTourIncludes />
            {/* <SingleTourMap/> */}
        </>
    );
}

export default SingleTour