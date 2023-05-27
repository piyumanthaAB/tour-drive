import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import QAansweFrom from '../../components/customer-care/QAansweFrom';
import useFetch from '../../hooks/useFetch';
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
const AnswerQAResuest = () => {
  const { id } = useParams();
  const { data, isPending } = useFetch(`/api/v1/qa/single/${id}`);

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <QAansweFrom data={data.data.qa} />}
          </>
        }
      />
    </>
  );
};

export default AnswerQAResuest;
