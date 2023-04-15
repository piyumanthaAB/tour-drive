import React from 'react';
import * as f from './ViewAllRequestsTableElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ViewAllRequestsTable = ({ requests }) => {
  const navigate = useNavigate();

  const onRequestUpdate = (e, req) => {
    navigate(`/customer-care/view-request/${req._id}`);
  };

  return (
    <>
      <f.Container>
        <f.FormTitle>View all Emergency requests</f.FormTitle>
        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>user</f.TableDataCell>
              <f.TableDataCell th={true}>status</f.TableDataCell>
              <f.TableDataCell th={true}>message</f.TableDataCell>
              <f.TableDataCell th={true}>date, time</f.TableDataCell>
              <f.TableDataCell th={true}>Actions</f.TableDataCell>
            </f.TableRow>

            {requests.map((req, i) => {
              return (
                <f.TableRow key={i}>
                  <f.TableDataCell>{i + 1} </f.TableDataCell>
                  <f.TableDataCell>
                    {req.user.name || 'not available'}{' '}
                  </f.TableDataCell>
                  <f.TableDataCell>{req.status} </f.TableDataCell>
                  <f.TableDataCell>{req.message} </f.TableDataCell>
                  <f.TableDataCell>{req.createdAt} </f.TableDataCell>
                  <f.TableDataCell className="flex" minwidth="1rem">
                    <f.TableActionBtn
                      onClick={(e) => {
                        onRequestUpdate(e, req);
                      }}
                    >
                      <FiEdit />
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

export default ViewAllRequestsTable;
