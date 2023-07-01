import React from 'react';
import PostList from '../../components/public/blog/PostList';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import useFetch from '../../hooks/useFetch';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blogs = () => {
  const { data, isPending } = useFetch('/api/v1/blogs');
  return (
    <>
      {isPending && (
        <SpinnerContainer>
          {' '}
          <ClipLoader size={60} />
        </SpinnerContainer>
      )}
      {data && !isPending && <PostList blogs={data.data.blogs} />}
    </>
  );
};

export default Blogs;
