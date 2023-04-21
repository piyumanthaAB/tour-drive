import React from 'react';
import ViewAllUsers from '../../../components/admin/user related/ViewAllUsers';
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

const AdminViewAllUsers = () => {
  const { data, isPending, isError } = useFetch('/api/v1/users');

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <ViewAllUsers users={data.data.users} />}
            {/* <ViewAllUsers /> */}
          </>
        }
      />
    </>
  );
};

export default AdminViewAllUsers;
