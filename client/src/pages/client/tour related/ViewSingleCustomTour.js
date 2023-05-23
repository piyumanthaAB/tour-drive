import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import ClipLoader from 'react-spinners/ClipLoader';
import useFetch from '../../../hooks/useFetch';
import SingleCustomTourView from '../../../components/admin/tour related/SingleCustomTourView';
import SingleCustomTour from '../../../components/client/SingleCustomTour';
import { useParams } from 'react-router-dom';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};
const ViewSingleCustomTour = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useFetch(
    `/api/v1/custom-tours/my-custom-tours/${id}`
  );
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && !isPending && (
              <SingleCustomTour tour={data?.data?.myCustomTour[0]} />
            )}
          </>
        }
      />
    </>
  );
};

export default ViewSingleCustomTour;
