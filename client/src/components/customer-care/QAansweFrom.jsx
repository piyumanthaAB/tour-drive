import React, { useState } from 'react';
import * as q from './QAanswerFormElements';
import Label from '../shared/Form Elements/Label';
import TextField from '../shared/Form Elements/TextField';
import TextArea from '../shared/Form Elements/TextArea';
import { toast } from 'react-hot-toast';
import submitForm from '../../hooks/submitForm';

const QAansweFrom = ({ data }) => {
  const [question, setQuestion] = useState(data?.question || 'error');
  const [answer, setAnswer] = useState('');

  console.log({ url: `/api/v1/qa/answer/${data._id}` });

  const onSubmit = async (e) => {
    e.preventDefault();

    toast.promise(
      submitForm(`/api/v1/qa/answer/${data._id}`, { answer }, 'patch', {}),
      {
        loading: 'Submitting answer ...',
        success: (data) => `Answer submitted successfully `,
        error: (err) => {
          if (!err.response.data.message) {
            return 'Something went wrong. Try again.';
          }
          return `${err?.response?.data?.message?.toString()}`;
        },
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      }
    );
  };

  return (
    <>
      <q.Container>
        <q.FormTitle>Answer question</q.FormTitle>
        <q.Form onSubmit={onSubmit}>
          <q.FormGroup>
            <Label labelText={'Question'} />
            <TextArea
              value={question}
              // setValue={setQuestion}
              type="text"
              // placeholder={'Enter tour duration here'}
            />
          </q.FormGroup>
          <q.FormGroup>
            <Label labelText={'Answer'} />
            <TextArea
              value={answer}
              setValue={setAnswer}
              type="text"
              placeholder={'Enter answer here'}
            />
          </q.FormGroup>
          <q.ButtonGroup>
            <q.SubmitBtn>Submit</q.SubmitBtn>
          </q.ButtonGroup>
        </q.Form>
      </q.Container>
    </>
  );
};

export default QAansweFrom;
