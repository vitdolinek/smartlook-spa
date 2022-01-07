import React from "react";

import { Post } from "../../../types/post";
import { Title, Wrapper } from "./Detail.styled";
import { default as Comments } from "./PostComments.container";

interface DetailProps {
  post: Post;
}

/**
 * It would be good to list here the author's name as well.
 * We could fetch a user list, save it to a global state
 * and iterate to find the matching ID, however, with a lot of records it would be really inefficient.
 * A possible way would be to send a request to /users/:id and get the author's information there.
 */

const Detail: React.FC<DetailProps> = ({ post }) => (
  <>
    <Wrapper>
      <Title>{post.title}</Title>
      <p>{post.body}</p>
    </Wrapper>
    <Comments postId={post.id} />
  </>
);

export default Detail;
