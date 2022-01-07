import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import Skeleton from "react-loading-skeleton";

import { PostItem, Title, Wrapper } from "./PostList.styled";

const PostListPlaceholder: React.FC = () => (
  <Wrapper>
    {new Array(10).fill(null).map((_, index) => (
      <PostItem key={index}>
        <Title>
          <Skeleton />
        </Title>
        <p>
          <Skeleton />
        </p>
        <Skeleton width={80} />
      </PostItem>
    ))}
  </Wrapper>
);

export default PostListPlaceholder;
