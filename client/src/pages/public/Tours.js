import React from 'react'
import TourHeroComponent from '../../components/public/tours/TourHeroComponent'
import TourListComponent from '../../components/public/tours/TourListComponent'
import useFetch from './../../hooks/useFetch'
// import { tours } from '../../data/tours'
import BounceLoader from "react-spinners/ClipLoader";

const Tours = () => {

  const { data,isPending,isError} = useFetch('/api/v1/tours');
  
  if (data) {
    console.log({data});
  }

  return (
    <>
      <TourHeroComponent />
      {isPending && <BounceLoader
        size={60}
        cssOverride={{
          display: "block",
          margin: "5rem auto",
        }}
      />}
      {isError && <p>error</p>}
      {data && <TourListComponent tours={data.data} />}
      
    </>
  );
}

export default Tours