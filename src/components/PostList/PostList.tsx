import React from "react";

import { Post } from "../../types/post";
import { LearnMore, PostItem, Title, Wrapper } from "./PostList.styled";

interface PostListProps {
  posts: Post[];
}

/**
 * It would be good to limit description of a post in case we get longer text.
 */

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Wrapper>
    {posts.map((post) => (
      <PostItem key={post.id}>
        <Title>{post.title}</Title>
        <p>{post.body}</p>
        <LearnMore to={`/posts/${post.id}`}>See article</LearnMore>
      </PostItem>
    ))}
  </Wrapper>
);

export default PostList;
