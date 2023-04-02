import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from '../../../components/shared/Dashboard';
import AdminVehicleUpdateForm from '../../../components/admin/vehicle related/AdminVehicleUpdateForm';
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
const AdminVehicleUpdate = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/vehicles/${id}`);
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <AdminVehicleUpdateForm vehicle={data.data} />}
            {/* <AdminVehicleUpdateForm /> */}
          </>
        }
      />
    </>
  );
};

export default AdminVehicleUpdate;
