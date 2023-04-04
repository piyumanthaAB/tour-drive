import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import AdminVehicleViewForm from '../../../components/admin/vehicle related/AdminVehicleViewForm';
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
const AdminVehicleView = () => {
  const { data, isPending, isError } = useFetch('/api/v1/vehicles');

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {isError && <h1>ERROR</h1>}
            {data && <AdminVehicleViewForm vehicles={data?.data} />}
            {/* <AdminVehicleViewForm /> */}
          </>
        }
      />
    </>
  );
};

export default AdminVehicleView;
