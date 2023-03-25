import React from 'react';
import * as f from './ViewAllUsersElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewAllUsers = ({ users }) => {
  const navigate = useNavigate();

  const onUserUpdate = (e, user) => {
    // console.log(user);
    navigate(`/admin/users/update/${user._id}`);
  };
  return (
    <>
      <f.Container>
        <f.FormTitle>View all Users</f.FormTitle>

        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>Name</f.TableDataCell>
              <f.TableDataCell th={true}>Email</f.TableDataCell>
              <f.TableDataCell th={true}>Status</f.TableDataCell>
              <f.TableDataCell th={true}>User type</f.TableDataCell>
              <f.TableDataCell th={true}>Actions</f.TableDataCell>
            </f.TableRow>
            {users.map((user, key) => {
              return (
                <f.TableRow key={key}>
                  <f.TableDataCell>{key + 1} </f.TableDataCell>
                  <f.TableDataCell>{user.name || '-'}</f.TableDataCell>
                  <f.TableDataCell minwidth='1rem'>
                    {user.email || '-'}
                  </f.TableDataCell>
                  <f.TableDataCell className='flex'>
                    {' '}
                    {user.active ? 'active' : 'deactive'}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell minwidth='1rem'>{user.role}</f.TableDataCell>
                  <f.TableDataCell className='flex' minwidth='1rem'>
                    <f.TableActionBtn
                      onClick={(e) => {
                        onUserUpdate(e, user);
                      }}
                    >
                      <FiEdit />
                    </f.TableActionBtn>
                    <f.TableActionBtn>
                      <FiTrash2 />
                    </f.TableActionBtn>
                  </f.TableDataCell>
                </f.TableRow>
              );
            })}
          </f.Table>
        </f.TableContainer>
      </f.Container>
    </>
  );
};

export default ViewAllUsers;
