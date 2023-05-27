import React, { useState } from 'react';
import * as q from './QAFromElements';
import TextArea from '../../shared/Form Elements/TextArea';
import submitForm from '../../../hooks/submitForm';
import { toast } from 'react-hot-toast';
import useFetch from '../../../hooks/useFetch';

const QAForm = ({ tourId }) => {
  const [question, setQuestion] = useState('');

  const { data, isPending } = useFetch(`/api/v1/qa/${tourId}`);

  if (data) {
    console.log({ data });
  }

  const onSubmit = async (e) => {
    toast.promise(
      submitForm(
        '/api/v1/qa',
        {
          question,
          tour: tourId,
        },
        'post',
        {}
      ),
      {
        loading: 'Submitting question...',
        success: (data) => `Question submitted successfully `,
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
      <q.Section>
        <q.QAtitleBar>
          <q.Title>Frequently asked questions</q.Title>
        </q.QAtitleBar>
        <q.Container>
          {data &&
            !isPending &&
            data.data.qa.map((qa, i) => {
              return (
                <q.Row key={i}>
                  <q.QuestionAnswer>Q &nbsp; : {qa.question}</q.QuestionAnswer>
                  <q.QuestionAnswer>A &nbsp; : {qa.answer}</q.QuestionAnswer>
                </q.Row>
              );
            })}
        </q.Container>
        <q.QAtitleBar>
          <q.Title>Ask questions about this tour.</q.Title>
        </q.QAtitleBar>
        <TextArea
          value={question}
          setValue={setQuestion}
          placeholder={'Type yout question here'}
        />
        <q.SubmitBtn
          onClick={() => {
            onSubmit();
          }}
        >
          Submit
        </q.SubmitBtn>
      </q.Section>
    </>
  );
};

export default QAForm;
