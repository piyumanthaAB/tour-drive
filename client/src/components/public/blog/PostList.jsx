import React from 'react';
import * as b from './PostListElements';
const PostList = ({ blogs }) => {
  return (
    <>
      <b.Container>
        {blogs.map((blog, i) => {
          return (
            <>
              <b.BlogCard key={i}>
                <b.BlogCardImgContainer image={blog.coverURL} />
                <b.BlogCardTitle>{blog.title} </b.BlogCardTitle>
                <b.BlogDesc>{blog.p1.slice(0, 250)}....</b.BlogDesc>
                <b.LinkBtn to={`/blogs/${blog._id}`}>Read more</b.LinkBtn>
              </b.BlogCard>
            </>
          );
        })}
      </b.Container>
      `
    </>
  );
};

export default PostList;
