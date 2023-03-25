import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateTour from '../../../components/admin/tour related/UpdateTour';
import Dashboard from '../../../components/shared/Dashboard';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};

const AdminUpdateTour = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/tours/${id}`);

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <UpdateTour tour={data.data} />}
          </>
        }
      />
    </>
  );
};

export default AdminUpdateTour;
