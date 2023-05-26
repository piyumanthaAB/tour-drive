import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPostComp from '../../components/public/blog/BlogPostComp';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlogPost = () => {
  const { id } = useParams();

  const { data, isPending } = useFetch(`/api/v1/blogs/${id}`);
  return (
    <>
      {isPending && (
        <SpinnerContainer>
          {' '}
          <ClipLoader size={60} />
        </SpinnerContainer>
      )}
      {data && !isPending && <BlogPostComp post={data.data.blog} />}
    </>
  );
};

export default BlogPost;
