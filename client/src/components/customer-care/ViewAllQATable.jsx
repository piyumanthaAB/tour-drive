import React from 'react';
import * as f from './ViewAllQATableElements';
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const ViewAllQATable = ({ requests }) => {
  const navigate = useNavigate();

  const onRequestUpdate = (e, req) => {
    navigate(`/customer-care/answer-qa-request/${req._id}`);
  };

  console.log({ requests });
  return (
    <>
      <f.Container>
        <f.FormTitle>View all Q&A requests</f.FormTitle>
        <f.TableContainer>
          <f.Table>
            <f.TableRow>
              <f.TableDataCell th={true}>#</f.TableDataCell>
              <f.TableDataCell th={true}>tour</f.TableDataCell>
              <f.TableDataCell th={true}>question</f.TableDataCell>
              <f.TableDataCell th={true}>date, time</f.TableDataCell>
              <f.TableDataCell th={true}>Actions</f.TableDataCell>
            </f.TableRow>

            {requests.map((req, i) => {
              return (
                <f.TableRow key={i}>
                  <f.TableDataCell>{i + 1} </f.TableDataCell>
                  <f.TableDataCell>
                    <Link to={`/tours/${req.tour._id}`}>
                      {req?.tour?.name || 'not available'}{' '}
                    </Link>
                  </f.TableDataCell>
                  <f.TableDataCell>{req.question} </f.TableDataCell>
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

export default ViewAllQATable;
