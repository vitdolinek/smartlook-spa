import React from "react";

import { Comment } from "../../types/comment";
import {
  AuthorEmail,
  Body,
  Item,
  SectionTitle,
  Title,
  Wrapper,
} from "./CommentList.styled";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <Wrapper>
    <SectionTitle>Comments</SectionTitle>
    {comments.map((comment) => (
      <Item key={comment.id}>
        <AuthorEmail>{comment.email}</AuthorEmail>
        <Title>{comment.name}</Title>
        <Body>{comment.body}</Body>
      </Item>
    ))}
  </Wrapper>
);

export default CommentList;
