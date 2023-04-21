import React from 'react';
import UpdateUser from '../../../components/admin/user related/UpdateUser';
import Dashboard from '../../../components/shared/Dashboard';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import { useParams } from 'react-router-dom';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};
const AdminUpdateUser = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useFetch(`/api/v1/users/${id}`);

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <UpdateUser user={data.data.user} />}
            {/* <UpdateUser /> */}
          </>
        }
      />
    </>
  );
};

export default AdminUpdateUser;
