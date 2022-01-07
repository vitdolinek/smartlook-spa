import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import Skeleton from "react-loading-skeleton";

import {
  AuthorEmail,
  Body,
  Item,
  SectionTitle,
  Title,
  Wrapper,
} from "./CommentList.styled";

const CommentListPlaceholder: React.FC = () => (
  <Wrapper>
    <SectionTitle>Comments</SectionTitle>
    {new Array(3).fill(null).map((_, index) => (
      <Item key={index}>
        <AuthorEmail>
          <Skeleton />
        </AuthorEmail>
        <Title>
          <Skeleton />
        </Title>
        <Body>
          <Skeleton />
        </Body>
      </Item>
    ))}
  </Wrapper>
);

export default CommentListPlaceholder;
