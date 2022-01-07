import React from "react";
import PostList from "../../../components/PostList/PostList";
import { Post } from "../../../types/post";

interface ListProps {
  posts: Post[];
}

const List: React.FC<ListProps> = ({ posts }) => (
  <>
    <PostList posts={posts} />
  </>
);

export default List;
