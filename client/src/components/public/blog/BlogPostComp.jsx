import React from 'react';
import * as b from './PostElements';

const BlogPostComp = ({ post }) => {
  return (
    <b.Container>
      <b.PostTitle>{post.title} </b.PostTitle>
      <b.HeroImageContainer image={post.coverURL} />
      <b.ParagraphContainer>
        <b.Paragraph>{post.p1}</b.Paragraph>
      </b.ParagraphContainer>
      <b.GalleryContainer>
        {post.galleryImages.map((img, i) => {
          return (
            <>
              <b.GalleryImgContainer key={i} image={`${img}`} />
            </>
          );
        })}
      </b.GalleryContainer>
      <b.ParagraphContainer>
        <b.Paragraph>{post.p2}</b.Paragraph>
      </b.ParagraphContainer>

      <b.ParagraphContainer>
        <b.Paragraph>{post.p3}</b.Paragraph>
      </b.ParagraphContainer>
    </b.Container>
  );
};

export default BlogPostComp;
