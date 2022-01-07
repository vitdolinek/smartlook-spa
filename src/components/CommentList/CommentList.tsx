import React from "react";
import { Comment } from "../../types/comment";
import {
  Item,
  Wrapper,
  SectionTitle,
  Title,
  AuthorEmail,
  Body,
} from "./CommentList.styled";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <Wrapper>
    <SectionTitle>Comments</SectionTitle>
    {comments.map((comment) => (
      <Item>
        <AuthorEmail>{comment.email}</AuthorEmail>
        <Title>{comment.name}</Title>
        <Body>{comment.body}</Body>
      </Item>
    ))}
  </Wrapper>
);

export default CommentList;
